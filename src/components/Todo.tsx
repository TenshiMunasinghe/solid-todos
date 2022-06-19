import { FiTrash2 } from 'solid-icons/fi'

interface Props {
  todo: Todo
  removeTodo: (id: string) => void
}

const Todo = (props: Props) => {
  const handleRemove = () => {
    props.removeTodo(props.todo._id)
  }
  return (
    <li class='bg-neutral-800 px-5 py-2 flex items-center space-x-4'>
      <form class='flex-1 flex items-center space-x-4'>
        <input
          type='text'
          value={props.todo.content}
          class='bg-transparent border-0 focus:ring-green-500 flex-1'
        />
        <input
          type='checkbox'
          checked={props.todo.isCompleted}
          class='bg-transparent text-green-500 focus:ring-green-500'
        />
      </form>
      <button onClick={handleRemove}>
        <FiTrash2 size={24} class='text-green-500' />
      </button>
    </li>
  )
}

export default Todo
