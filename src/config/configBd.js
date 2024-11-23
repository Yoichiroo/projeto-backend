import { MongoClient } from 'mongodb';

export default async function dbConnect(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao banco de dados com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}