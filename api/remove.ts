import type { VercelRequest, VercelResponse } from '@vercel/node'
import { ObjectId } from 'mongodb'
import { client } from './_mongo'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { ids }: { ids: string[] } = request.body
  if (!ids.length) return
  try {
    client.connect(async err => {
      const collection = client.db('solid-todo').collection('todos')
      if (ids.length === 1) {
        const id = ids[0]
        await collection.deleteOne({ _id: new ObjectId(id) })
      } else {
        await collection.deleteMany({
          _id: { $in: ids.map(id => new ObjectId(id)) },
        })
      }
      response.json({ success: true, removed: ids })
    })
  } catch (error) {
    console.error(error)
  }
  await client.close()
}
