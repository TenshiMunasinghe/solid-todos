import { createEffect, createSignal, For, Show } from 'solid-js'
import Todo from './Todo'

interface Props {
  todos: Todo[]
  removeTodo: (id: string[]) => void
}

const TodoList = (props: Props) => {
  const [selected, setSelected] = createSignal<string[]>([])
  const [isSelecting, setIsSelecting] = createSignal(false)

  createEffect(() => {
    if (!isSelecting()) {
      setSelected([])
    }
  })

  const toggleSelection = (id: string, isSelected: boolean) => {
    if (isSelected && !selected().includes(id)) {
      setSelected(prev => [...prev, id])
      return
    }
    if (!isSelected && selected().includes(id)) {
      setSelected(prev => prev.filter(i => i !== id))
    }
  }

  const toggleSelecting = () => {
    setIsSelecting(prev => !prev)
  }

  const handleMultipleRemove = () => {
    props.removeTodo(selected())
    setSelected([])
  }

  return (
    <div class='flex flex-col space-y-8'>
      <div class='space-x-6'>
        <button onClick={toggleSelecting}>
          {isSelecting() ? 'Delete' : 'Edit'}
        </button>
        <Show when={isSelecting() && selected().length > 0}>
          <button onClick={handleMultipleRemove}>Delete</button>
        </Show>
      </div>
      <ul class='space-y-5'>
        <For each={props.todos}>
          {todo => (
            <Todo
              todo={todo}
              removeTodo={props.removeTodo}
              toggleSelection={toggleSelection}
              isSelecting={isSelecting()}
            />
          )}
        </For>
      </ul>
    </div>
  )
}

export default TodoList
