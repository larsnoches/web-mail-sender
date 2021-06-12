import * as express from 'express';
import path from 'path';
import routes from '../api';

type errType = {
  status: number;
  message: string;
};

export default ({ app }: { app: express.Application }): void => {
  app.set('views', path.join(__dirname, '..', '..', 'views'));
  app.set('view engine', 'ejs');

  app.use(express.json());

  app.get('/', (_req, res) => {
    res.render('index');
  });

  // Load API routes
  app.use('/api/v1', routes());

  app.use((req, res, next) => {
    const err = {
      status: 404,
      message: 'Not Found',
    };
    next(err);
  });

  // error handlers
  app.use(
    (
      err: errType,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      res.status(err.status || 500);
      res.json({
        errors: {
          message: err.message,
        },
      });
    },
  );
};
