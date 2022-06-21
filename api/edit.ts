import type { VercelRequest, VercelResponse } from '@vercel/node'
import { ObjectId } from 'mongodb'
import { client } from './_mongo'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { id, todo } = request.body
  if (!id) return
  try {
    client.connect(async err => {
      const collection = client.db('solid-todo').collection('todos')
      await collection.updateOne({ _id: new ObjectId(id) }, { $set: todo })
      response.json({
        success: true,
        edited: { id, ...todo },
      } as APIResponse.Edit)
    })
  } catch (error) {
    console.error(error)
  }
  await client.close()
}
