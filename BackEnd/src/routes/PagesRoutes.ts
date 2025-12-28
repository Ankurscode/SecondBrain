import { Router } from "express";
import { singIn, singUp } from "../controller/authController";

export const routes=Router();

routes.post("/signUp",singUp);
routes.post("/signIn",singIn);
