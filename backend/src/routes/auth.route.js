import express from "express";
import { login, logout, sigup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/signup", sigup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
