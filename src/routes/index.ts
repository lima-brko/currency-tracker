import Router from 'koa-router';

import graphql from './graphql';

const router = new Router();

router.all('/graphql', graphql);

export default router;
