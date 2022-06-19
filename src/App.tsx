import ky from 'ky'
import { Component, createResource, Suspense } from 'solid-js'
import Input from './components/Input'
import TodoList from './components/TodoList'

const App: Component = () => {
  const [data, { mutate }] = createResource(
    () => 'api/todos',
    async url => {
      return ky.get(url).json<Todo[]>()
    }
  )

  const onSubmit = async (value: string) => {
    const res = await ky
      .post('api/add', { json: { todo: value } })
      .json<{ success: boolean; added: Todo }>()

    if (!res.success) return
    mutate(todos => [...todos, res.added])
  }
  return (
    <div class='max-w-7xl mx-auto py-12 px-6 min-h-screen space-y-12'>
      <Input onSubmit={onSubmit} />
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList todos={data()} />
      </Suspense>
    </div>
  )
}

export default App
