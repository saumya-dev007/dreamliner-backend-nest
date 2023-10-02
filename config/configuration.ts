export const configuration = () => ({ 
    STAGE: process.env.STAGE,
    
    mongo_connection_string: process.env.STAGE == 'dev' 
      ? process.env.DEV_DB_CONNECTION_STRING 
      : ( 
        process.env.STAGE == 'prod' 
          ? process.env.PROD_DB_CONNECTION_STRING 
          : "mongodb+srv://dreamlinerentertainmentweb:TrhiAY3z0mkMlmaR@cluster0.ygqqpq9.mongodb.net/" 
      ), 
    mongo_db_name: process.env.STAGE == 'dev' 
      ? process.env.DEV_MONGO_DB_NAME 
      : ( 
        process.env.STAGE == 'prod' 
          ? process.env.PROD_MONGO_DB_NAME 
          : 'dreamliner' 
      ),
   
  });