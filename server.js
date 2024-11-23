import express from "express";
import dbConnect from "./src/config/configBd.js";
import routes from "./src/config/routes/publicacoesRoutes.js";

const conexao = await dbConnect(process.env.CONEXAO);

const app = express();

app.listen(3000, ()=>{
    console.log("Servidor ligado");
});

async function getTodasPublicacoes() {
    const database =  conexao.db("pentagram");
    const colecao = database.collection("publicacoes");

    return colecao.find().toArray();
}