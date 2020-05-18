import { defaultState } from "./defaultState";
import { connectBD } from "./connect-db";

async function initializeBD() {
  let db = await connectBD();
  for (let collectionName in defaultState) {
    let collection = db.collection(collectionName);
    await collection.insertMany(defaultState[collectionName]);
  }
}
initializeBD();
