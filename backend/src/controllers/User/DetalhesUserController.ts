import { Request, Response } from "express";
import { DetalhesUserService } from "../../services/Users/DetalhesUserService";

class DetalhesUserController {
  async handle(req: Request, res: Response) {
    const detalhesUserService = new DetalhesUserService();

    const user = await detalhesUserService.execute();
    // Envie uma resposta vazia
    return res.json(user)
  }
}

export { DetalhesUserController };
