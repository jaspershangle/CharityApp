const addSponser = object => {
  return fetch(`https://backend-charity.herokuapp.com/api/sponsers/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(object)
  })
}

const editSponser = (id, object) => {
  return fetch(`https://backend-charity.herokuapp.com/api/sponsers/${id}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(object)
  })
}

const deleteSponser = id => {
  return fetch(`https://backend-charity.herokuapp.com/api/sponsers/${id}/`, { 
    method: 'DELETE' 
  });
}

const fetchSponserByID = id => {
  return fetch(`https://backend-charity.herokuapp.com/api/sponsers/${id}/`)
    .then((data) => data.json())
}

const fetchSponsers = () => {
  return fetch(`https://backend-charity.herokuapp.com/api/sponsers/`)
    .then((data) => data.json())
}

export default {
  fetchSponsers: fetchSponsers,
  fetchSponserByID: fetchSponserByID,
  deleteSponser: deleteSponser,
  editSponser: editSponser,
  addSponser: addSponser
}