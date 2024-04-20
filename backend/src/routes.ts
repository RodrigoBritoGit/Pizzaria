import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AutenticacaoUserController } from "./controllers/User/AutenticacaoUserController";
import { DetalhesUserController } from "./controllers/User/DetalhesUserController";
import { isAuthenticated } from "./controllers/middiewares/isAuthenticated";

const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AutenticacaoUserController().handle)
router.get('/detalhesUser',isAuthenticated, new DetalhesUserController().handle)

export { router };
