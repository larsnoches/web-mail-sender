import config from './config';
import express from 'express';
import loader from './loader';

try {
  // petrivanov2020ivanov@yandex.ru
  const expressApp = express();

  if (expressApp == null) throw new Error('Express server is null');

  loader(expressApp);

  const port = config?.server?.port;
  if (port == null) {
    throw new Error('Express server port is null');
  }
  expressApp
    .listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    })
    .on('error', err => {
      console.log(err);
    });
} catch (er) {
  console.log(er);
}
