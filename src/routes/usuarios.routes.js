import { Router } from "express";
import * as controller from "../controllers/usuario.controllers.js";

export const usuarioRouter = Router();

usuarioRouter.post("/registro", controller.registroUsuario);
