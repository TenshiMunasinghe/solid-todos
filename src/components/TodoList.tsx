import { For } from 'solid-js'
import Todo from './Todo'

interface Props {
  todos: Todo[]
}

const TodoList = (props: Props) => {
  return (
    <ul class=''>
      <For each={props.todos}>{todo => <Todo todo={todo} />}</For>
    </ul>
  )
}

export default TodoList
