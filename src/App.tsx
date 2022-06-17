import ky from 'ky'
import { Component, createResource } from 'solid-js'

const App: Component = () => {
  const [data] = createResource(
    () => 'api/todos',
    async url => {
      const res = await ky.get(url).json()
      console.log(res)
    }
  )
  return (
    <p class='text-4xl text-green-700 text-center py-20'>Hello tailwind!</p>
  )
}

export default App
