import React from "react";
import Badge from "react-bootstrap/Badge";

import "./DateRange.scss";

function DateRange() {
  return (
    <div className="text-danger">
      <span
        className="oi oi-caret-left nav-icon"
        title="caret left"
        aria-hidden="true"
      />
      <span
        className="oi oi-calendar nav-icon"
        title="calendar"
        aria-hidden="true"
      />
      <span>Today, Jan. 10th</span>
      <span
        className="oi oi-caret-right nav-icon"
        title="caret right"
        aria-hidden="true"
      />
      <Badge variant="danger" className="date-badge">
        1d
      </Badge>
    </div>
  );
}

export default DateRange;
