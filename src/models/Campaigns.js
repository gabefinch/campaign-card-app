import campaigns from "./campaigns.json";

export default {
  getAll,
  getById
};

function getAll() {
  return campaigns;
}

function getById(id) {
  for (let i = 0; i < campaigns.length; i++) {
    if (campaigns[i].id === id) {
      return campaigns[i];
    }
  }
  return null;
}
