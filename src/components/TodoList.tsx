import { For } from 'solid-js'
import Todo from './Todo'

interface Props {
  todos: Todo[]
  removeTodo: (id: string) => void
}

const TodoList = (props: Props) => {
  return (
    <ul class='space-y-5'>
      <For each={props.todos}>
        {todo => <Todo todo={todo} removeTodo={props.removeTodo} />}
      </For>
    </ul>
  )
}

export default TodoList
