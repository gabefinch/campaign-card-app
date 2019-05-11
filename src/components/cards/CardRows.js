import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CreateCard from "./CreateCard";
import SvcCard from "./SvcCard";
import "./CardRows.scss";

function CardRows(props) {
  return (
    <Row>
      {_layoutCards(props.items)}
      <Col sm="12" md="6" lg="4" xl="3" className="card-col">
        <CreateCard />
      </Col>
    </Row>
  );
}

export default CardRows;

function _layoutCards(items) {
  return items.map((item, index) => {
    return (
      <Col sm="12" md="6" lg="4" xl="3" key={index} className="card-col">
        <SvcCard card={item} index={index} />
      </Col>
    );
  });
}
