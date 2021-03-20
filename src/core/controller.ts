import { Response } from "express";
import { CreatedResponse, SuccessResponse } from "./api-response";

class Controller {
  protected sendSuccessResponse(res: Response, message: string, payload: any) {
    new SuccessResponse(message, payload).send(res);
  }

  protected sendCreatedResponse(res: Response, message: string, payload: any) {
    new CreatedResponse(message, payload).send(res);
  }
}

export default Controller;
