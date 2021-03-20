import { Router } from "express";
import asyncHandler from "../helpers/async-handler";
import ReactionsService from "./reactions.service";
import ReactionsController from "./reactions.controller";

const reactionsService = new ReactionsService();
const reactionsController = new ReactionsController(reactionsService);

const router = Router();

router.get("/:phoneNumber", asyncHandler(reactionsController.get()));
router.get(
  "/:phoneNumber/get-reacted-by-user-id",
  asyncHandler(reactionsController.getReactedByUser())
);

export default router;
