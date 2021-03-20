import { Request, Response } from "express";
import { throws } from "node:assert";
import Controller from "../core/controller";
import TagsService from "./tags.service";

class TagsController extends Controller {
  constructor(private tagsService: TagsService) {
    super();
  }

  index = () => async (req: Request, res: Response) => {
    const tags = await this.tagsService.getTags();
    this.sendSuccessResponse(res, "Tags retrieved", { tags });
  };
}

export default TagsController;
