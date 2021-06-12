"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const httpServerPort = 8080;
const mailServerPort = 587;
const loadJsonFile = (fileName) => {
    const result = fs_extra_1.default.readJsonSync(path_1.default.join(__dirname, '..', '..', fileName));
    return result;
};
function loadConfig() {
    const config = loadJsonFile('config.json');
    return {
        mail: {
            port: config?.mail?.port ?? mailServerPort,
            email: config?.mail?.email ?? '',
            password: config?.mail?.password ?? '',
            secure: config?.mail?.secure ?? false,
            server: config?.mail?.server ?? '',
        },
        server: {
            port: config?.server?.port ?? httpServerPort,
        },
    };
}
exports.default = loadConfig();
//# sourceMappingURL=index.js.map