import express, { Request, Response, NextFunction } from "express";
import router from "./router";
import initDatabase from "./database";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { ApiError, NotFoundError } from "./core/api-error";

const app = express();

initDatabase();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

router(app);

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

app.use((err: Error, req: Request, res: Response, next: NextFunction) =>
  ApiError.handle(err as ApiError, res)
);

export default app;
