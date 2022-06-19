import { FiTrash2 } from 'solid-icons/fi'
import { createEffect, createSignal } from 'solid-js'

interface Props {
  todo: Todo
  removeTodo: (id: string) => void
}

const Todo = (props: Props) => {
  let ref: HTMLInputElement | null = null

  const [content, setContent] = createSignal(props.todo.content)

  createEffect(() => {
    console.log(content())
  })

  const handleRemove = () => {
    props.removeTodo(props.todo._id)
  }

  const handleEdit = () => {
    setContent(ref.value)
  }

  return (
    <li class='bg-neutral-800 px-5 py-2 flex items-center space-x-4'>
      <form
        onSubmit={e => {
          e.preventDefault()
          handleEdit()
          ref.blur()
        }}
        class='flex-1 flex items-center space-x-4'>
        <input
          ref={ref}
          type='text'
          value={content()}
          onBlur={handleEdit}
          class='bg-transparent border-0 focus:ring-0 focus:bg-neutral-700 flex-1'
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
