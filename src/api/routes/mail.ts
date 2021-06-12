import * as express from 'express';
import { mailMsgType, sendMessage } from '../../service/mail';

function sendMessageRouteAction(
  req: express.Request,
  res: express.Response,
): any {
  const { to, text, subject } = req.body as mailMsgType;
  if (to == null || text == null || subject == null) {
    return res.send({
      status: 'error',
    });
  }

  const msgStatus = sendMessage(req.body as mailMsgType);
  msgStatus
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    .then(val => res.send(val).status(200))
    .catch(() => {
      //
    });
}

const route = express.Router();

export default (app: express.Router): void => {
  app.use('/mail', route);

  route.post('/send-msg', sendMessageRouteAction);
};
