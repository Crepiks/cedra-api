import express, { Request, Response, Application } from "express";

export default (app: Application) => {
  app.get("/", (req: Request, res: Response) => res.send("Cedra API"));
  app.use("/storage", express.static("storage"));
};
