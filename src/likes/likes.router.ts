import { Router } from "express";
import LikesService from "./likes.service";
import LikesController from "./likes.controller";
import asyncHandler from "../helpers/async-handler";

const likesService = new LikesService();
const likesController = new LikesController(likesService);

const router = Router();

router.get("/:phoneNumber/liked-by-user", asyncHandler(likesController.getLikedByUser()));
router.get("/:phoneNumber/liked-to-user", asyncHandler(likesController.getLikedToUser()));

export default router;
