import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.girokwp.mongodb.net/?retryWrites=true&w=majority`
export const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
})
