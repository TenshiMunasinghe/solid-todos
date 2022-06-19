import type { VercelRequest, VercelResponse } from '@vercel/node'
import { ObjectId } from 'mongodb'
import { client } from './_mongo'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { id } = request.body
  if (!id) return
  try {
    client.connect(async err => {
      const collection = client.db('solid-todo').collection('todos')
      await collection.deleteOne({ _id: new ObjectId(id) })
      response.json({ success: true, removed: id })
    })
  } catch (error) {
    console.error(error)
  }
  await client.close()
}
