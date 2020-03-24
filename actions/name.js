import { config } from '../config/config';
const API = config.appUrl + 'api';

export const getNames = () => {
  return fetch(`${API}/names`)
  .then(res => res.json())
  .catch(err => console.log(err))
}

export const addName = name => {
  return fetch(`${API}/names`, {
    method: 'POST',
    ...config.jsonOptions,
    body: JSON.stringify({ name })
  })
  .then(res => res.json())
  .catch(err => console.log(err))
}

export const removeName = id => {
  return fetch(`${API}/names`, {
    method: 'DELETE',
    ...config.jsonOptions,
    body: JSON.stringify({ id })
  })
  .then(res => res.json())
  .catch(err => console.log(err))
}