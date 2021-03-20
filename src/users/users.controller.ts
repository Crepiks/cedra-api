import { Request, Response } from "express";
import Controller from "../core/controller";
import UsersService from "./users.service";

class UsersController extends Controller {
  constructor(private usersService: UsersService) {
    super();
  }

  index = () => async (req: Request, res: Response) => {
    const users = await this.usersService.getUsers();
    this.sendSuccessResponse(res, "Users retrieved", { users });
  };
}

export default UsersController;
