import React from "react";
import Container from "react-bootstrap/Container";

import Campaigns from "./models/Campaigns";
import Cards from "./models/Cards";
import Navigation from "./components/nav/Navigation";
import CardRows from "./components/cards/CardRows";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: { campaignName: "All Campaigns", id: null } };
    this.selectCampaign = this.selectCampaign.bind(this);
  }

  selectCampaign(id) {
    if (id === "all-campaigns") {
      this.setState({ selected: { campaignName: "All Campaigns", id: null } });
    } else {
      this.setState({ selected: Campaigns.getById(id) });
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation
          campaigns={Campaigns.getAll()}
          selected={this.state.selected.campaignName}
          selectCampaign={this.selectCampaign}
        />
        <Container className="card-container">
          {this.state.selected.id ? (
            <CardRows items={Cards.getCampaignId(this.state.selected.id)} />
          ) : (
            <CardRows items={Cards.getAll(this.state.selected.id)} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
