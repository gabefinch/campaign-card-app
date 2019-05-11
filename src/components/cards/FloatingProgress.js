import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./FloatingProgress.scss";

function FloatingProgress() {
  return (
    <div>
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default FloatingProgress;
