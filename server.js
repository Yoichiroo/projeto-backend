import express from "express";

const publicacoes = [
    {
        id: 1,
        desc: "Um gatinho fofo dormindo",
        img: "https://placecats.com/cute/300/200",

    },
    {
        id: 2,
        desc: "Gato brincando com um novelo de lã",
        img: "https://placecats.com/playful/400/300",

    },
    {
        id: 3,
        desc: "Olhar penetrante de um gato preto",
        img: "https://placecats.com/black/500/250",

    },
    {
        id: 4,
        desc: "Gato explorando a natureza",
        img: "https://placecats.com/outdoor/600/400",

    },
    {
        id: 5,
        desc: "Gatinho ronronando no colo",
        img: "https://placecats.com/cuddle/300/200",
    }
];

const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log("ta on o server paizao");
});

app.get("/publicacoes", (req, res) => {
    res.status(200).json(publicacoes);
});

function buscarPost(id) {
    return publicacoes.findIndex((publicacao)=> {
        return publicacao.id === Number(id);
    })
};

app.get("/publicacoes/:id", (req, res) => {
    const index = buscarPost(req.params.id);
    res.status(200).json(publicacoes[index]);
});

