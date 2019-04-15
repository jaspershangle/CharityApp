const addCharity = object => {
  return fetch(`https://backend-charity.herokuapp.com/api/charities/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(object)
  })
}

const editCharity = (id, object) => {
  return fetch(`https://backend-charity.herokuapp.com/api/charities/${id}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(object)
  })
}

const deleteCharity = id => {
  return fetch(`https://backend-charity.herokuapp.com/api/charities/${id}/`, { 
    method: 'DELETE' 
  });
}

const fetchCharityByID = id => {
  return fetch(`https://backend-charity.herokuapp.com/api/charities/${id}/`)
    .then((data) => data.json())
}

const fetchCharities = () => {
  return fetch(`https://backend-charity.herokuapp.com/api/charities/`)
    .then((data) => data.json())
}

export default {
  fetchCharities: fetchCharities,
  fetchCharityByID: fetchCharityByID,
  deleteCharity: deleteCharity,
  editCharity: editCharity,
  addCharity: addCharity
}