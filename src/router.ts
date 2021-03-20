import express, { Request, Response, Application } from "express";

import users from "./users/users.router";
import options from "./options/options.router";

export default (app: Application) => {
  app.get("/", (req: Request, res: Response) => res.send("Cedra API"));
  app.use("/api/users", users);
  app.use("/api/options", options);
  app.use("/storage", express.static("storage"));
};
