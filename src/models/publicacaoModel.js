import dbConnect from "../config/configBd.js";

const conexao = await dbConnect(process.env.CONEXAO);

export async function getTodasPublicacoes() {
    const database =  conexao.db("pentagram");
    const colecao = database.collection("publicacoes");
    
    return colecao.find().toArray();
}