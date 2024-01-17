import axios from 'axios'

const settings = {
    withCredentials: true,
}

const instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.1/`,
    withCredentials: true,
})

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType>(
            `todo-lists/${todolistId}`,
            { title: title }
        )
        return promise
    },
    getTodolist() {
        const promise = instance.get<TodoListType[]>(
            `/todo-lists`
        )
        return promise
    },
    postTodolist( title: string) {
        const promise = instance.post<ResponseType<{item: TodoListType}>>(
            `todo-lists`,
            { title: title }
        )
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType>(
            `todo-lists/${todolistId}`)
        return promise
    },
}

type TodoListType = {
    addedDate: string
    id: string
    order: number
    title: string
}

type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}


