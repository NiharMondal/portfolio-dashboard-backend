import express, { Application } from "express";
import cors from "cors";

import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";
import { rootRouter } from "./route";

const app: Application = express();



app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//use routes
app.use("/api/v1", rootRouter);

app.use(globalErrorHandler);

app.use("*", notFound);

export default app;