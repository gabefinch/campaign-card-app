import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./FloatingDropdown.scss";

class FloatingDropdown extends React.Component {
  render() {
    return (
      <Dropdown className="floating-dropdown" alignRight>
        <Dropdown.Toggle
          className="state-dropdown-toggle"
          size="sm"
          variant="default"
          id="dropdown-basic"
        >
          <span
            className="oi oi-pencil text-warning"
            title="pencil"
            aria-hidden="true"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu className="state-item-menu">
          <Dropdown.Item active>{_capitalize(this.props.status)}</Dropdown.Item>
          <Dropdown.Divider className="state-item-divider" />
          {_makeDropdownMenuItems(this.props)}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default FloatingDropdown;

function _makeDropdownMenuItems(props) {
  const items = _getDropdownMenuItems(props.status);
  return items.map((item, index) => {
    return (
      <div key={index}>
        <Dropdown.Item onClick={props.modifyStatus}>
          {_capitalize(item)}
        </Dropdown.Item>
        {index + 1 < items.length ? (
          <Dropdown.Divider className="state-item-divider" />
        ) : null}
      </div>
    );
  });
}

function _getDropdownMenuItems(status) {
  switch (status) {
    case "saved":
      return ["pending"];
    case "pending":
      return ["active", "declined"];
    case "active":
      return ["paused", "expired", "terminated"];
    case "paused":
      return ["active"];
    // case 'declined': return [];
    // case 'expired': return [];
    // case 'terminated': return [];
    default:
      return [];
  }
}

function _capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
