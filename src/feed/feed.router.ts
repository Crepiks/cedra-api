import { Router } from "express";
import FeedService from "./feed.service";
import FeedController from "./feed.controller";
import asyncHandler from "../helpers/async-handler";

const feedService = new FeedService();
const feedController = new FeedController(feedService);

const router = Router();

router.post("/:phoneNumber", asyncHandler(feedController.react()));

export default router;
