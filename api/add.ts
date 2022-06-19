import type { VercelRequest, VercelResponse } from '@vercel/node'
import { client } from './_mongo'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { todo } = request.body
  if (!todo) return
  try {
    client.connect(async err => {
      const collection = client.db('solid-todo').collection('todos')
      const added = await collection.insertOne({
        content: todo,
        isCompleted: false,
      })
      response.json({ success: true, added })
    })
  } catch (error) {
    console.error(error)
  }
  await client.close()
}
