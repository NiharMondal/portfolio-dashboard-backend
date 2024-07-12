"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const notFound_1 = require("./middleware/notFound");
const route_1 = require("./route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://nihar-mondal.vercel.app/",
        "https://portfolio-dashboard-client-iota.vercel.app/"
    ],
    credentials: true,
}));
app.use(express_1.default.json());
//use routes
app.use("/api/v1", route_1.rootRouter);
app.use(globalErrorHandler_1.globalErrorHandler);
app.use("*", notFound_1.notFound);
exports.default = app;
