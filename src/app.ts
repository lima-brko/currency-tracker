import Koa from 'koa';
import Mongoose from 'mongoose';
import env from './utils/env';

Mongoose.connect(env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

import router from './routes';

const app = new Koa();
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
