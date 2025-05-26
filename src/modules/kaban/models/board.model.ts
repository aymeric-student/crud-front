// models/board.model.ts
export interface Task {
    id: string
    title: string
    subTask: string[]
}

export interface Column {
    id: string
    title: string
    tasks: Task[]
}

export interface Board {
    id: string
    name: string
    columns: Column[]
}
