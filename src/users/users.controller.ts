import { Request, Response } from "express";
import { NotFoundError } from "../core/api-error";
import Controller from "../core/controller";
import CreateUserDto from "./dto/create-user.dto";
import UsersService from "./users.service";
import User from "../models/user.model";
import UpdateUserDto from "./dto/update-user.dto";

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

  get = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const user = await this.usersService.findUserByPhoneNumber(phoneNumber);
    this.checkUserPresence(user);
    this.sendSuccessResponse(res, "User retrieved", { user });
  };

  update = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const user = await this.usersService.findUserByPhoneNumber(phoneNumber);
    this.checkUserPresence(user);

    const payload: UpdateUserDto = req.body;
    const updatedUser = await this.usersService.updateUser(user, payload);
    this.sendSuccessResponse(res, "User updated", { user: updatedUser });
  };

  delete = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const user = await this.usersService.findUserByPhoneNumber(phoneNumber);
    this.checkUserPresence(user);

    await this.usersService.deleteUser(user);
    this.sendSuccessResponse(res, "User deleted", {});
  };

  private checkUserPresence(user: User) {
    if (!user) {
      throw new NotFoundError("User not found");
    }
  }
}

export default UsersController;
