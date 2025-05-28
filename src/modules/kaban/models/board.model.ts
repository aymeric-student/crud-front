export interface Task {
    id: string
    title: string
    description: string
    subTasks: Subtasks[]
}

export interface Subtasks {
    id?: string
    isCompleted?: boolean
    title?: string
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
