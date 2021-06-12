"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const mail_1 = require("../../service/mail");
function sendMessageRouteAction(req, res) {
    const { to, text, subject } = req.body;
    if (to == null || text == null || subject == null) {
        return res.send({
            status: 'error',
        });
    }
    const msgStatus = (0, mail_1.sendMessage)(req.body);
    msgStatus
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        .then(val => res.send(val).status(200))
        .catch(() => {
        //
    });
}
const route = express.Router();
exports.default = (app) => {
    app.use('/mail', route);
    route.post('/send-msg', sendMessageRouteAction);
};
//# sourceMappingURL=mail.js.map