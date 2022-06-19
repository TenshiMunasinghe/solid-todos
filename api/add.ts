import type { VercelRequest, VercelResponse } from '@vercel/node'
import { client } from './_mongo'

export default async (request: VercelRequest, response: VercelResponse) => {
  const { todo } = request.body
  if (!todo) return
  try {
    client.connect(err => {
      const collection = client.db('solid-todo').collection('todos')
      const newTodo = { content: todo, isCompleted: false }
      collection.insertOne(newTodo)
      response.json({ success: true, added: newTodo })
    })
  } catch (error) {
    console.error(error)
  }
  await client.close()
}
