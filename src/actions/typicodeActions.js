import axios from "axios";
import { API_TYPICODE } from "../config/env";

export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';

export function fetchUsers() {
  return dispatch => {
    dispatch({
      type: 'FETCH_USERS',
      payload: axios.get(`${API_TYPICODE}/users`)
        .then(res => res.data)
    })
  }
}
