import { Router } from "express";
import asyncHander from "../helpers/async-handler";
import UsersService from "./users.service";
import UsersController from "./users.controller";

const usersService = new UsersService();
const usersController = new UsersController(usersService);

const router = Router();

router.get("/", asyncHander(usersController.index()));

export default router;
