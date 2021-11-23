
const URL = 'https://jsonplaceholder.typicode.com/'

export const fetchUserRepositories = (id) => {
  return fetch(`${URL}users`)
    .then(response => response.json())
}

export const fetchPosts = (id) => {
  return fetch(`${URL}posts`)
    .then(response => response.json())
}

export const fetchAlbums = (id) => {
  return fetch(`${URL}albums`)
    .then(response => response.json())
}
