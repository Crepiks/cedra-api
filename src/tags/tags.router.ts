import { Router } from "express";
import TagsService from "./tags.service";
import TagsController from "./tags.controller";
import asyncHandler from "../helpers/async-handler";

const tagsService = new TagsService();
const tagsController = new TagsController(tagsService);

const router = Router();

router.get("/", asyncHandler(tagsController.index()));

export default router;
