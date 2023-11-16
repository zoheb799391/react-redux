import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState =  {
    todos: [{
        id: '1',
        text: 'hey new todo'
    }]
}
const TodoSlice = createSlice({
    name: 'todolist',
    reducers: {
       addTodo :  (state, action) => {
            const Todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(Todo)
            // console.table( initialState);
            // state.todos.push({
            //     id: nanoid(),
            //     text: action.payload
            // });
            // console.log(state);
           
        },
        removeTodo: (state, action) => {
            const todos = state.todos.filter((todo) => todo.id !== action.payload);
            console.log('todos', todos, state)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    },
    initialState,
})

export const { addTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;