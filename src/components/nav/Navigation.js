import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import DateRange from "./DateRange";
import "./Navigation.scss";

function Navigation(props) {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown
            title="Campaigns"
            id="basic-nav-dropdown"
            onSelect={props.selectCampaign}
          >
            <NavDropdown.Item key="all-campaigns" eventKey="all-campaigns">
              All Campaigns
            </NavDropdown.Item>
            {_makeOptions(props.campaigns)}
          </NavDropdown>
          <Navbar.Text>
            <span
              className="oi oi-list nav-icon"
              title="list"
              aria-hidden="true"
            />
            {props.selected}
          </Navbar.Text>
        </Nav>
        <div className="navbar-right">
          <span
            className="oi oi-magnifying-glass nav-icon-lg"
            title="magnifying glass"
            aria-hidden="true"
          />
          <DateRange />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

function _makeOptions(options) {
  return options.map(item => {
    return (
      <NavDropdown.Item key={item.id} eventKey={item.id}>
        {item.campaignName}
      </NavDropdown.Item>
    );
  });
}
