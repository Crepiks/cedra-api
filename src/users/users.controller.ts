import { Request, Response } from "express";
import { NotFoundError } from "../core/api-error";
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

  get = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const user = await this.usersService.findUserByPhoneNumber(phoneNumber);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    this.sendSuccessResponse(res, "User retrieved", { user });
  };
}

export default UsersController;
