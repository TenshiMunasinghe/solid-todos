import type { VercelRequest, VercelResponse } from '@vercel/node'
import { client } from './_mongo'

export default (request: VercelRequest, response: VercelResponse) => {
  client.connect(err => {
    const collection = client.db('solid-todo').collection('todos')
    response.json(collection)
    client.close()
  })
}
