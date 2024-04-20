import { Request, Response } from "express";
import { CreateUserService } from "../../services/Users/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createuserService = new CreateUserService();
    const user = await createuserService.execute({
        name,
        email,
        password
    });
    res.status(200).send();
    return user;
  }
}

export { CreateUserController };
