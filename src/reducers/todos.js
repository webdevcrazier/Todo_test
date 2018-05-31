import {ADD_TODO, REMOVE_TODO, SAVE_TODO, TOGGLE_TODO, CLEAR_TODOS} from '../constants/action-types';
import {filter} from 'lodash'

const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const todos = (state = storedTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
    console.log(state);
      localStorage.setItem('todos', JSON.stringify([
        ...state,
        action.payload
      ]));
      return [
        ...state,
        action.payload
      ];

    case REMOVE_TODO:
      let removedTodos = filter(state, todo => todo.id !== action.id)
      localStorage.setItem('todos', JSON.stringify(removedTodos));
      return removedTodos;

    case SAVE_TODO:
      let savedTodos = state.map(todo => {
        if (todo.id === action.payload.id) {
          return Object.assign({}, todo, {text: action.payload.todotext});
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(savedTodos));
      return savedTodos;

    case CLEAR_TODOS:
      localStorage.removeItem('todos');
      return [];

    case TOGGLE_TODO:
      let modifiedTodos = state.map(todo => {
        if (todo.id === action.id)
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(modifiedTodos));
      return modifiedTodos;

    default:
      return state;
  }
}

export default todos;
