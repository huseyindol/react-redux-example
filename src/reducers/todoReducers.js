import { TODO_ADD, TODO_DONE, TODO_REMOVE } from "../actions/todoActions";

const initialState = {
  todo: [
    { id: 1, name: 'kitap', done: false, remove: false },
    { id: 2, name: 'kalem', done: false, remove: false },
    { id: 3, name: 'silgi', done: true, remove: false },
    { id: 4, name: 'defter', done: true, remove: true }
  ]
}

export default (state = initialState, action) => {
  let { todo } = state
  switch (action.type) {
    case TODO_ADD:
      let id = todo.length
      action.payload.id = ++id
      todo.push(action.payload)
      document.querySelector('nav.todoButtons .active').click()
      return {
        ...state
      }
    case TODO_DONE:
      let todoDoneTemp = todo.find(res => res.id === parseInt(action.payload.id));
      todoDoneTemp.done = !todoDoneTemp.done
      return {
        ...state
      }
    case TODO_REMOVE:
      let todoRemoveTemp = todo.find(res => res.id === parseInt(action.payload.id));
      todoRemoveTemp.remove = !todoRemoveTemp.remove
      return {
        ...state
      }
    default:
      return state;
  }
}