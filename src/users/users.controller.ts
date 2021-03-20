import { Request, Response } from "express";
import { ConflictError, NotFoundError } from "../core/api-error";
import Controller from "../core/controller";
import UsersService from "./users.service";
import User from "../models/user.model";
import Tag from "../models/tag.model";
import CreateUserDto from "./dto/create-user.dto";
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

  relateTag = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const user = await this.usersService.findUserByPhoneNumber(phoneNumber);
    this.checkUserPresence(user);

    const { tagId } = req.body;
    const tag = await this.usersService.findTagById(tagId);
    this.checkTagPresence(tag);
    await this.checkTagAlreadyExistsForUser(user, tag.id);

    await this.usersService.relateTag(user, tag);
    this.sendSuccessResponse(res, "Tag is related to user", { tag });
  };

  private checkUserPresence(user: User) {
    if (!user) {
      throw new NotFoundError("User not found");
    }
  }

  private checkTagPresence(tag: Tag) {
    if (!tag) {
      throw new NotFoundError("Tag not found");
    }
  }

  private async checkTagAlreadyExistsForUser(user: User, tagId: number) {
    const userTag = await this.usersService.findTagForUserById(user, tagId);
    if (userTag) {
      throw new ConflictError("Tag already related to the user");
    }
  }
}

export default UsersController;
