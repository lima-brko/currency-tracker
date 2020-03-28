import dotenv from 'dotenv';

dotenv.config({path: '.env'});

export const ENVIRONMENT = process.env.NODE_ENV;
export const MONGODB_URI = process.env.MONGODB_URI_LOCAL;

export default {
  ENVIRONMENT,
  MONGODB_URI,
  PORT: process.env.PORT
};
