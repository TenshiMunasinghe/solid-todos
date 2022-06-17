import type { VercelRequest, VercelResponse } from '@vercel/node'
import { client } from './_mongo'

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    client.connect(err => {
      const collection = client.db('solid-todo').collection('todos')
      collection.find({}).toArray((error, documents) => {
        if (err) throw error
        response.send(documents)
      })
    })
  } catch (error) {
    console.error(error)
  }
  await client.close()
}
