import { NestFactory } from '@nestjs/core'; 
 import { 
   FastifyAdapter, 
   NestFastifyApplication, 
 } from '@nestjs/platform-fastify'; 
 import { AppModule } from './app.module'; 
 import { ValidationPipe } from '@nestjs/common'; 
 import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger'; 
 import compression from '@fastify/compress'; 
 import fastifyCsrf from '@fastify/csrf-protection'; 
  
 async function bootstrap() { 
   const app = await NestFactory.create<NestFastifyApplication>( 
     AppModule, 
     new FastifyAdapter(),
     { cors: true } 
   ); 
  
   const config = new DocumentBuilder() 
     .setTitle('DREAM LINER API') 
     .setDescription('API Documentation') 
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
  
   app.useGlobalPipes(new ValidationPipe()); 
   app.enableShutdownHooks(); 
   await app.register(compression, { encodings: ['gzip', 'deflate'] }); 
   await app.register(fastifyCsrf); 
   await app.listen(3000); 
 } 
 bootstrap();