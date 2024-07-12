"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
function main() {
    let server;
    server = app_1.default.listen(config_1.config.port, () => {
        console.log(`server is running on port ${config_1.config.port}`);
    });
    process.on("unhandledRejection", (err) => {
        console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
        if (server) {
            server.close(() => {
                process.exit(1);
            });
        }
        process.exit(1);
    });
    process.on("uncaughtException", () => {
        console.log(`👻 uncaughtException is detected , shutting down ...`);
        process.exit(1);
    });
}
main();
