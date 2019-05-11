import React from "react";
import Card from "react-bootstrap/Card";
import "./CreateCard.scss";

function CreateCard(props) {
  return (
    <Card className="create-card">
      <Card.Body>
        <div className="row h-100">
          <div className="col-sm-12 my-auto text-center">
            <div className="oi oi-plus" title="plus" aria-hidden="true" />
            <div>Create a Service Card</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CreateCard;
