import { Request, Response } from "express";
import { NotFoundError } from "../core/api-error";
import Controller from "../core/controller";
import FeedService from "./feed.service";

class FeedController extends Controller {
  constructor(private feedService: FeedService) {
    super();
  }

  react = () => async (req: Request, res: Response) => {
    const { phoneNumber } = req.params;
    const initiator = await this.feedService.findUserByPhoneNumber(phoneNumber);

    if (!initiator) {
      throw new NotFoundError("Initiator not found");
    }

    const recipient = await this.feedService.findUserByPhoneNumber(req.body.phoneNumber);

    if (!recipient) {
      throw new NotFoundError("Recipient not found");
    }

    await initiator.$relatedQuery("reactedByUser").relate({
      id: recipient.id,
      like: req.body.like,
    });

    this.sendCreatedResponse(res, "Reaction is stored", {});
  };
}

export default FeedController;
