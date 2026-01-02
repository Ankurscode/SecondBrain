import { Router } from "express";
import { singIn, singUp } from "../controller/authController";
import {forgotPassword} from "../controller/forgotPassword"
import { resetPassword } from "../controller/resetPassword";
import { isAuthenticated } from "../middleware/authMiddleware";
import { content, newContents } from "../controller/crudContainer";

export const routes=Router();

routes.post("/signUp",singUp);
routes.post("/signIn",singIn);
routes.post("/forgot-password",forgotPassword);
routes.post("/reset-password", resetPassword);
routes.post("/addcontent",isAuthenticated,newContents)
routes.get("/content",isAuthenticated,content)
