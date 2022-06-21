type Todo = {
  _id: string
  content: string
  isCompleted: boolean
}

declare namespace APIResponse {
  type Common = {
    success: boolean
  }
  export type Add = Common & { added: Todo }
  export type Remove = Common & { removed: string[] }
  export type Edit = Common & { edited: Todo }
}
