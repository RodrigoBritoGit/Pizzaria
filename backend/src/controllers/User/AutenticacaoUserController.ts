import { Request, Response } from "express";
import { AutencicacaoUserService } from "../../services/Users/AutenticacaoUserService";
class AutenticacaoUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const autencicacaoUserService = new AutencicacaoUserService();

    const autenticacao = await autencicacaoUserService.execute({
      email,
      password,
    });

    return res.json(autenticacao);
  }
}

export { AutenticacaoUserController };
