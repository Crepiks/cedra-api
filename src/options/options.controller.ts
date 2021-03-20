import { Request, Response } from "express";
import Controller from "../core/controller";
import OptionsService from "./options.service";

class OptionsController extends Controller {
  constructor(private optionsService: OptionsService) {
    super();
  }

  index = () => async (req: Request, res: Response) => {
    const genders = await this.optionsService.getGenders();
    const orientations = await this.optionsService.getOrientations();
    this.sendSuccessResponse(res, "Options retrieved", { genders, orientations });
  };
}

export default OptionsController;
