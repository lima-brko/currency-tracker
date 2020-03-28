import app from './app';
import env from './utils/env';

/**
 * Start Koa server.
 */
const server = app.listen(env.PORT, () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    env.PORT,
    env.ENVIRONMENT
  );
  console.log('  Press CTRL-C to stop\n');
});

export default server;
