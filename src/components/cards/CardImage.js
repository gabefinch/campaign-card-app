import React from "react";
import Card from "react-bootstrap/Card";

class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.setLoaded = this.setLoaded.bind(this);
  }

  setLoaded(bool) {
    this.setState({ loaded: bool });
  }

  render() {
    return (
      <div>
        {!this.state.loaded ? (
          <Card.Img
            variant="top"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACZCAQAAAAhzf8/AAABC0lEQVR42u3SMQEAAAgDoC251Q2hJ2SgmcBJJUIiJEIikAiJkAiJQCIkQiIkAomQCImQCCRCIiRCIpAIiZAIiUAiJEIiJAKJkAiJkAgkQiIkQiKQCImQCIlAIiRCIiQCiZAIiZAIJEIiJEIikAiJkAiJQCIkQiIkAomQCImQCCRCIiRCIpAIiZAIiUAiJEIiJAKJkAiJkAgkQiIkQiKQCImQCIlAIiRCIiQCiZAIiZAIJEIiJEIikAiJkAiJQCIkQiIkAomQCImQCCRCIiRCIpAIiZAIiUAiJEIiJAKJkAiJkEgiJEIiJAKJkAiJkAgkQiIkQiKQCImQCIlAIiRCIiQCiZAIiZAIJOLRAn9zTIENt5Z0AAAAAElFTkSuQmCC"
          />
        ) : null}
        <Card.Img
          variant="top"
          src={`https://picsum.photos/290/153?ID=${this.props.index}`}
          style={!this.state.loaded ? { display: "none" } : {}}
          onLoad={() => this.setLoaded(true)}
        />
      </div>
    );
  }
}

export default CardImage;
