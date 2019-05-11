import cards from "./cards.json";

export default {
  getCampaignId,
  getAll
};

function getCampaignId(id) {
  return cards.filter(card => {
    return card.campaignId === id;
  });
}

function getAll() {
  return cards;
}
