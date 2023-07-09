import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONG0_USERNAME}:${process.env.MONG0_PASSWORD}@cluster0.ecn5toe.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToDb,
};