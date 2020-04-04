import Logger from './helpers/Logger';
import mongoConnect from './mongo';
import server from './server';
import Environment from './environment';

(async () => {
  Logger.info('Connecting to MongoDB...');
  await mongoConnect();
  Logger.info('Successfully connected to MongoDB.');

  Logger.info('Starting express server...');
  const app = server();

  const port = Environment.variable('PORT');
  app.listen(port, () => {
    Logger.info(`Server running at port ${port}.`);
    Logger.info('Welcome to ANDJOY.');
  });
})();
