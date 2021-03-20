import { Request, Response } from "express";
import Controller from "../core/controller";
import CreateUserDto from "./dto/create-user.dto";
import UsersService from "./users.service";

class UsersController extends Controller {
  constructor(private usersService: UsersService) {
    super();
  }

  index = () => async (req: Request, res: Response) => {
    const users = await this.usersService.getUsers();
    this.sendSuccessResponse(res, "Users retrieved", { users });
  };

  store = () => async (req: Request, res: Response) => {
    const payload: CreateUserDto = req.body;
    const user = await this.usersService.createUser(payload);
    this.sendCreatedResponse(res, "User created", { user });
  };
}

export default UsersController;
