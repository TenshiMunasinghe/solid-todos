import { MongoClient } from 'mongodb'

const userName = encodeURIComponent(process.env.USER_NAME)
const password = encodeURIComponent(process.env.PASSWORD)

const uri = `mongodb+srv://${userName}:${password}@cluster0.girokwp.mongodb.net/?retryWrites=true&w=majority`
export const client = new MongoClient(uri)
