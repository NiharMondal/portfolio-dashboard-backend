import express, { Application } from 'express'
import cors from 'cors'
import { rootRouter } from './route'
import { globalErrorHandler } from './middleware/globalErrorHandler'
import { notFound } from './middleware/notFound';


const app: Application = express()

app.use(cors())
app.use(express.json())


app.use("/api/v1", rootRouter);
app.use(globalErrorHandler);

app.use("*",notFound)

export default app;