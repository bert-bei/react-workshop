import { Todo } from './TodoExample';

export const todoReducer = (state: State = initialState, action: Action): State => {

    const nextId = state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1

    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { id: nextId, text: action.payload, complete: false }],
            };
        case 'EDIT_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
                ),
            };
        case 'COMPLETE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

type Action =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'EDIT_TODO'; payload: { id: number; text: string } }
    | { type: 'COMPLETE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number };

interface State {
    todos: Todo[];
}

const initialState: State = {
    todos: [],
};
