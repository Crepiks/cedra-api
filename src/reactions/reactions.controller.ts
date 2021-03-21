import { Request, Response } from "express";
import Controller from "../core/controller";
import { NotFoundError } from "../core/api-error";
import ReactionsService from "./reactions.service";
import User from "../models/user.model";

class ReactionsController extends Controller {
  constructor(private reactionsService: ReactionsService) {
    super();
  }

  get = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const user = await this.reactionsService.detailUserByPhoneNumber(phoneNumber);
    this.checkUserPresence(user);
    this.sendSuccessResponse(res, "User retrieved", { user });
  };

  getReactedByUser = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const user = await this.reactionsService.detailUserByPhoneNumber(phoneNumber);
    this.checkUserPresence(user);

    const users = await this.reactionsService.getReactedByUser(user);
    this.sendSuccessResponse(res, "Reacted by user users retrieved", { users });
  };

//   addReactByUser = () => async (req: Request, res: Response) => {
//     const { phoneNumber } = req.params;
//     const user = await this.reactionsService.detailUserByPhoneNumber(phoneNumber);
//     this.checkUserPresence(user);

//     const { reactedUserPhoneNumber } = req.body;
//     const reactedUser = await this.reactionsService.detailUserByPhoneNumber(reactedUserPhoneNumber);
//     this.checkUserPresence(reactedUser);

//     const { like } = req.body;

//     const createdReaction = await this.reactionsService.addReactByUser(user, reactedUser, like);
//     this.sendSuccessResponse(res, "Reaction by user created", { createdReaction });
//   };

  private checkUserPresence(user: User) {
    if (!user) {
      throw new NotFoundError("User not found");
    }
  }
}

export default ReactionsController;
