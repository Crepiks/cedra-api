import express, { Request, Response, Application } from "express";

import users from "./users/users.router";
import reactions from "./reactions/reactions.router";
import options from "./options/options.router";
import tags from "./tags/tags.router";

export default (app: Application) => {
  app.get("/", (req: Request, res: Response) => res.send("Cedra API"));
  app.use("/api/users", users);
  app.use("/api/users", reactions);
  app.use("/api/options", options);
  app.use("/api/tags", tags);
  app.use("/storage", express.static("storage"));
};
