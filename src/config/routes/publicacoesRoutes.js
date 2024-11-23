import express from "express";
import { listarPublicacoes } from "../controllers/publicacoesController.js";
const routes = (app) => {
    app.use(express.json());
    app.get("/publicacoes", listarPublicacoes());
};

export default routes;