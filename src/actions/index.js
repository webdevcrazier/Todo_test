// Action creators recieve data from the DOM event, format it as formal JSON 'action' object

import { LOGIN, LOGOUT, ADD_TODO, REMOVE_TODO, SAVE_TODO, SET_FILTER, TOGGLE_TODO, CLEAR_TODOS } from '../constants/action-types';

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
});

export const saveTodo = (payload) => ({
    type: SAVE_TODO,
    payload
});

export const clearTodos = () => ({
    type: CLEAR_TODOS
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export const login = (payload) => ({
    type: LOGIN,
    payload
})

export const logout = () => ({
    type: LOGOUT,
});
