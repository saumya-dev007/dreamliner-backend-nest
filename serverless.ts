import { NestFactory } from '@nestjs/core'; 
 import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'; 
 import { FastifyServerOptions, FastifyInstance, fastify } from 'fastify'; 
 import awsLambdaFastify from '@fastify/aws-lambda'; 
 import cors from '@fastify/cors' 
 import { 
   Context, 
   APIGatewayProxyEvent 
 } from 'aws-lambda'; 
 import { Logger } from '@nestjs/common'; 
 import { AppModule } from 'src/app.module'; 
 import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger'; 
  
 interface NestApp { 
   app: NestFastifyApplication; 
   instance: FastifyInstance; 
 } 
  
 let cachedNestApp: NestApp; 
 let cachedProxy; 
  
 async function bootstrapServer(): Promise<any> { 
  
   const serverOptions: FastifyServerOptions = { 
     logger: (process.env?.LOGGER || '0') == '1', 
   }; 
   const instance: FastifyInstance = fastify(serverOptions); 
   const app = await NestFactory.create<NestFastifyApplication>( 
     AppModule, 
     new FastifyAdapter(instance), 
     { 
       logger: !process.env?.AWS_EXECUTION_ENV ? new Logger() : console, 
     }, 
   ); 
  
   const config = new DocumentBuilder() 
     .setTitle('Divine Infinite Being API') 
     .setDescription('API Documentation for Divine Infinite Being') 
     .setVersion('1.0') 
     .addBearerAuth({ 
       description: `Please enter token in following format: Bearer <JWT>`, 
       name: 'Authorization', 
       bearerFormat: 'Bearer', 
       scheme: 'Bearer', 
       type: 'http', 
       in: 'Header' 
     }, 'access-token') 
     .build(); 
   const options: SwaggerDocumentOptions = { 
     operationIdFactory: ( 
       controllerKey: string, 
       methodKey: string, 
     ) => methodKey 
   }; 
  
   const document = SwaggerModule.createDocument(app, config, options); 
   SwaggerModule.setup('api', app, document, { 
     swaggerOptions: { 
       defaultModelsExpandDepth: -1, // Disables schemas section  
       displayRequestDuration: true 
     } 
   }); 
  
   const CORS_OPTIONS = { 
     origin: '*', 
     allowedHeaders: '*', 
     exposedHeaders: '*', 
     credentials: false, 
     methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'], 
   }; 
  
   // app.register(require('fastify-cors'), CORS_OPTIONS); 
   // app.enableCors() 
   await app.register(cors, CORS_OPTIONS) 
  
   app.setGlobalPrefix("api"); 
  //  app.setGlobalPrefix(process.env.API_PREFIX); 
  
   await app.init(); 
  
   return { 
     app, 
     instance 
   }; 
 } 
  
 export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<any> => { 
   // console.log("process.env==================>", process.env) 
   if (!cachedProxy) { 
  
     if (!cachedNestApp) { 
       cachedNestApp = await bootstrapServer(); 
     } 
     cachedProxy = awsLambdaFastify(cachedNestApp.instance, { decorateRequest: true }); 
   } 
  
   return cachedProxy(event, context); 
 };