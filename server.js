import express from "express";
import dbConnect from "./src/config/configBd.js";

const conexao = await dbConnect(process.env.CONEXAO);

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log("Servidor ligado");
});

async function getTodasPublicacoes() {
    const database =  conexao.db("pentagram");
    const colecao = database.collection("publicacoes");

    return colecao.find().toArray();
}

app.get("/publicacoes", async (req, res) => {
    const resultadoPublicacoes = await getTodasPublicacoes();
    res.status(200).json(resultadoPublicacoes);
});