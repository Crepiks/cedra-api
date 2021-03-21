import express, { Request, Response, Application } from "express";

import users from "./users/users.router";
import options from "./options/options.router";
import tags from "./tags/tags.router";
import feed from "./feed/feed.router";
import likes from "./likes/likes.router";

export default (app: Application) => {
  app.get("/", (req: Request, res: Response) => res.send("Cedra API"));
  app.use("/api/users", users);
  app.use("/api/options", options);
  app.use("/api/tags", tags);
  app.use("/api/feed", feed);
  app.use("/api/likes", likes);
  app.use("/storage", express.static("storage"));
};
