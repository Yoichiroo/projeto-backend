import { getTodasPublicacoes } from "../../models/publicacaoModel.js";

export async function listarPublicacoes(req, res) {
    const resultadoPublicacoes = await getTodasPublicacoes();
    res.status(200).json(resultadoPublicacoes);
}
