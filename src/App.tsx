import ky from 'ky'
import { Document, InsertOneResult } from 'mongodb'
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
    const res = await ky.post('api/add', { json: { todo: value } }).json<{
      success: boolean
      added: InsertOneResult<Document> & { todo: Todo }
    }>()

    if (!res.success) return
    mutate(prev => [...prev, res.added.todo])
  }

  const removeTodo = async (id: string) => {
    const res = await ky
      .post('api/remove', { json: { id } })
      .json<{ success: boolean; removed: string }>()

    if (!res.success) return
    mutate(todos => {
      const removedTodoIdx = todos.findIndex(todo => todo._id === res.removed)
      return [
        ...todos.slice(0, removedTodoIdx),
        ...todos.slice(removedTodoIdx + 1),
      ]
    })
  }
  return (
    <div class='max-w-7xl mx-auto py-12 px-6 min-h-screen space-y-12'>
      <Input onSubmit={onSubmit} />
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList todos={data()} removeTodo={removeTodo} />
      </Suspense>
    </div>
  )
}

export default App
