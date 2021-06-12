"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const config_1 = __importDefault(require("../config"));
const nodemailer_1 = __importDefault(require("nodemailer"));
async function sendMessage(mailMsg) {
    try {
        const { to, text, subject } = mailMsg;
        if (to == null || text == null || subject == null) {
            return {
                status: 'error',
            };
        }
        const transporter = nodemailer_1.default.createTransport({
            host: config_1.default.mail?.server,
            port: config_1.default.mail?.port,
            secure: config_1.default.mail?.secure,
            auth: {
                user: config_1.default.mail?.email,
                pass: config_1.default.mail?.password,
            },
        });
        await transporter.sendMail({
            from: config_1.default.mail?.email,
            to,
            subject,
            text,
        });
        return {
            status: 'ok',
        };
    }
    catch (er) {
        console.log(er);
        return {
            status: 'error',
        };
    }
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=mail.js.map