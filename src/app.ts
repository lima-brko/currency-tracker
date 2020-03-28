import Koa from 'koa';
import Mongoose from 'mongoose';
import cors from 'koa-cors';

import env from './utils/env';

Mongoose.connect(env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

import router from './routes';

const app = new Koa();

/**
 * API available to any domain for tests
 */
app.use(cors({origin: false}));
app.use(router.routes());
app.use(router.allowedMethods());


export default app;
