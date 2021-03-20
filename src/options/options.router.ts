import { Router } from "express";
import asyncHandler from "../helpers/async-handler";
import OptionsService from "./options.service";
import OptionsController from "./options.controller";

const optionsService = new OptionsService();
const optionsController = new OptionsController(optionsService);

const router = Router();

router.get("/", asyncHandler(optionsController.index()));

export default router;
