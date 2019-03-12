export const TODO_ADD = 'TODO_ADD';
export const TODO_DONE = 'TODO_DONE';
export const TODO_REMOVE = 'TODO_REMOVE';

export function onTodoSubmit(todo) {
  return dispatch => {
    dispatch({
      type: TODO_ADD,
      payload: todo
    })
  }
}

export function onTodoDone(id) {
  return dispatch => {
    dispatch({
      type: TODO_DONE,
      payload: { id }
    })
  }
}

export function onTodoRemove(id) {
  return dispatch => {
    dispatch({
      type: TODO_REMOVE,
      payload: { id }
    })
  }
}