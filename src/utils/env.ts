import dotenv from 'dotenv';

dotenv.config({path: '.env'});

export const ENVIRONMENT = process.env.NODE_ENV;
export const {SESSION_SECRET} = process.env;
export const MONGODB_URI = process.env.MONGODB_URI_LOCAL;

export default {
  ENVIRONMENT,
  SESSION_SECRET,
  MONGODB_URI,
  PORT: process.env.PORT
};
