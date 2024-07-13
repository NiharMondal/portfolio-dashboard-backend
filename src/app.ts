import express, { Application } from "express";
import cors from "cors";

import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";
import { rootRouter } from "./route";

const app: Application = express();

const allowedOrigins = [
	"https://nihar-mondal.vercel.app/",
	"https://portfolio-dashboard-client-iota.vercel.app/"
];

app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is in the allowed origins list
    if (allowedOrigins.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials:true,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//use routes
app.use("/api/v1", rootRouter);

app.use(globalErrorHandler);

app.use("*", notFound);

export default app;