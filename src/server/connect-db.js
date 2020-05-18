import { MongoClient } from "mongodb";
const url = `mongodb://localhost:27017/miorganizador`;
let db = null;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db();
  console.info("La db es:,", db);
  return db;
}
//connectBD();
