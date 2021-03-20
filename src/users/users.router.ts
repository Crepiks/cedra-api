import { Router } from "express";
import asyncHander from "../helpers/async-handler";
import UsersService from "./users.service";
import UsersController from "./users.controller";

const usersService = new UsersService();
const usersController = new UsersController(usersService);

const router = Router();

router.get("/", asyncHander(usersController.index()));
router.post("/", asyncHander(usersController.store()));
router.get("/:phoneNumber", asyncHander(usersController.get()));
router.patch("/:phoneNumber", asyncHander(usersController.update()));

export default router;
