const addDonation = catObject => {
  return fetch(`https://backend-charity.herokuapp.com/api/donations/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(catObject)
  })
}

const fetchDonations = () => {
  return fetch(`https://backend-charity.herokuapp.com/api/donations/`)
    .then((data) => data.json())
}

export default {
  fetchDonations: fetchDonations,
  addDonation: addDonation
}