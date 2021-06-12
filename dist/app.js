"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const express_1 = __importDefault(require("express"));
const loader_1 = __importDefault(require("./loader"));
try {
    // petrivanov2020ivanov@yandex.ru
    const expressApp = (0, express_1.default)();
    if (expressApp == null)
        throw new Error('Express server is null');
    (0, loader_1.default)(expressApp);
    const port = config_1.default?.server?.port;
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
}
catch (er) {
    console.log(er);
}
//# sourceMappingURL=app.js.map