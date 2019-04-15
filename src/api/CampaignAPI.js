const addCampaign = object => {
  return fetch(`https://backend-charity.herokuapp.com/api/campaigns`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(object)
  })
}

const editCampaign = (id, object) => {
  return fetch(`https://backend-charity.herokuapp.com/api/campaigns/${id}/`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(object)
  })
}

const deleteCampaign = id => {
  return fetch(`https://backend-charity.herokuapp.com/api/campaigns/${id}/`, { 
    method: 'DELETE' 
  });
}

const fetchCampaignByID = id => {
  return fetch(`https://backend-charity.herokuapp.com/api/campaigns/${id}/`)
    .then((data) => data.json())
}

const fetchCampaigns = () => {
  return fetch(`https://backend-charity.herokuapp.com/api/campaigns/`)
    .then((data) => data.json())
}

export default {
  fetchCampaigns: fetchCampaigns,
  fetchCampaignByID: fetchCampaignByID,
  deleteCampaign: deleteCampaign,
  editCampaign: editCampaign,
  addCampaign: addCampaign
}