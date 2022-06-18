interface Props {
  onSubmit: (value: string) => void
}

const Input = (props: Props) => {
  let ref: HTMLInputElement | null = null

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        props.onSubmit(ref.value)
        ref.value = ''
      }}
      class='flex focus-within:ring-1 rounded-xl overflow-hidden focus-within:ring-green-500 w-fit'>
      <input
        type='text'
        ref={ref}
        class='bg-neutral-700 px-2 h-full focus:ring-0 border-0 focus:outline-0'
      />
      <button class='bg-neutral-800 px-3' type='submit'>
        Add
      </button>
    </form>
  )
}

export default Input
