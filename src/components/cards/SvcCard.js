import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FloatingDropdown from "./FloatingDropdown";
import FloatingProgress from "./FloatingProgress";
import CardImage from "./CardImage";
import "./SvcCard.scss";

class SvcCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: true };
    this.handleModifyStatus = this.handleModifyStatus.bind(this);
  }

  handleModifyStatus(e) {
    this.setState({ loaded: false });
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 3000);
  }

  render() {
    return (
      <Card className="svc-card">
        {this.state.loaded ? (
          <FloatingDropdown
            style={this.state.loaded ? {} : { display: "none" }}
            status={this.props.card.currentWorkflow}
            modifyStatus={this.handleModifyStatus}
          />
        ) : (
          <FloatingProgress />
        )}
        <CardImage index={this.props.index} src={this.props.card} />
        <Card.Body>
          {this.props.card.cardTitle}
          <div className="my-1">
            <small>{`$ ${(this.props.index % 5) + 1}0,000 / month`}</small>
          </div>
          <div
            className={`status-bar my-1 bg-${_getStatusBarColoring(
              this.props.index
            )}`}
          />
        </Card.Body>
        <Card.Footer className="text-muted">
          <Row>
            <Col className="text-center">
              <span
                className="oi oi-briefcase"
                title="briefcase"
                aria-hidden="true"
              />
              <span>$149K</span>
            </Col>
            <Col className="text-center">
              <span
                className="oi oi-person"
                title="person"
                aria-hidden="true"
              />
              <span>127K</span>
            </Col>
            <Col className="text-center">
              <span className="oi oi-eye" title="eye" aria-hidden="true" />
              <span>200K</span>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    );
  }
}

export default SvcCard;

function _getStatusBarColoring(index) {
  return [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ][index % 8];
}
