interface Props {
  todo: Todo
}

const Todo = (props: Props) => {
  return (
    <li>
      <form class='bg-neutral-800 px-5 py-2 flex justify-between items-center'>
        <input
          type='text'
          value={props.todo.content}
          class='bg-transparent border-0 focus:ring-green-500'
        />
        <input
          type='checkbox'
          checked={props.todo.isCompleted}
          class='bg-transparent text-green-500 focus:ring-green-500'
        />
      </form>
    </li>
  )
}

export default Todo
