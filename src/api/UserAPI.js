const addUser = object => {
  return fetch(`https://backend-charity.herokuapp.com/api/users/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(object)
  })
}

const editUser = (id, object) => {
  return fetch(`https://backend-charity.herokuapp.com/api/users/${id}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(object)
  })
}

const deleteUser = id => {
  return fetch(`https://backend-charity.herokuapp.com/api/users/${id}/`, { 
    method: 'DELETE' 
  });
}

const fetchUserByID = id => {
  return fetch(`https://backend-charity.herokuapp.com/api/users/${id}/`)
    .then((data) => data.json())
}

const fetchUsers = () => {
  return fetch(`https://backend-charity.herokuapp.com/api/users/`)
    .then((data) => data.json())
}

export default {
  fetchUsers: fetchUsers,
  fetchUserByID: fetchUserByID,
  deleteUser: deleteUser,
  editUser: editUser,
  addUser: addUser
}