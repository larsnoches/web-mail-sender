import { Router } from 'express';
import mail from './routes/mail';

export default (): Router => {
  const app = Router();
  mail(app);

  return app;
};
