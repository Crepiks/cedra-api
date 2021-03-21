import { Request, Response } from "express";
import { NotFoundError } from "../core/api-error";
import Controller from "../core/controller";
import LikesService from "./likes.service";

class LikesController extends Controller {
  constructor(private likesService: LikesService) {
    super();
  }

  getLikedByUser = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const user = await this.likesService.findUserByPhoneNumber(phoneNumber);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const users = await this.likesService.getLikedByUser(user);
    this.sendSuccessResponse(res, "Likes by user retrieved", { users });
  };

  getLikedToUser = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const user = await this.likesService.findUserByPhoneNumber(phoneNumber);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    const users = await this.likesService.getLikedToUser(user);
    this.sendSuccessResponse(res, "Likes to user retrieved", { users });
  };
}

export default LikesController;
