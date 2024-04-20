import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AutenticacaoUserController } from "./controllers/User/AutenticacaoUserController";

const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AutenticacaoUserController().handle)

export { router };
