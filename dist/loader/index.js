"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
exports.default = (expressApp) => {
    (0, express_1.default)({ app: expressApp });
    console.log('Express loaded');
};
//# sourceMappingURL=index.js.map