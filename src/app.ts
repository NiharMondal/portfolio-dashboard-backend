import express, { Application } from "express";
import cors from "cors";

import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";
import { rootRouter } from "./route";

const app: Application = express();

app.use(
	cors({
		origin: [
			"http://localhost:5173",
			"https://nihar-mondal.vercel.app/",
			"https://portfolio-dashboard-client-iota.vercel.app/"
		],
		credentials: true,
	})
);
app.use(express.json());

//use routes
app.use("/api/v1", rootRouter);

app.use(globalErrorHandler);

app.use("*", notFound);

export default app;