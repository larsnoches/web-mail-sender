import config from '../config';
import nodemailer from 'nodemailer';

export type mailMsgType = {
  from?: string;
  to: string;
  subject: string;
  text: string;
};

export type mailMsgStatusType = {
  status: string;
};

export async function sendMessage(
  mailMsg: mailMsgType,
): Promise<mailMsgStatusType> {
  try {
    const { to, text, subject } = mailMsg;
    if (to == null || text == null || subject == null) {
      return {
        status: 'error',
      };
    }

    const transporter = nodemailer.createTransport({
      host: config.mail?.server,
      port: config.mail?.port,
      secure: config.mail?.secure, // true for 465, false for other ports
      auth: {
        user: config.mail?.email,
        pass: config.mail?.password,
      },
    });

    await transporter.sendMail({
      from: config.mail?.email,
      to,
      subject,
      text,
    } as mailMsgType);

    return {
      status: 'ok',
    };
  } catch (er) {
    console.log(er);
    return {
      status: 'error',
    };
  }
}
