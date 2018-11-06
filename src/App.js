import React, { Component } from "react";
import { Container } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <Container>
        <CardGrid />
      </Container>
    );
  }
}

class CardGrid extends Component {
  render() {
    const files = [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/5.png",
      "/images/8.png",
      "/images/13.png",
      "/images/20.png",
      "/images/40.png",
      "/images/100.png",
      "/images/infinity.png",
      "/images/question.png"
    ];

    let cards = files.map(f => <Card file={f} />);
    return <div class="ui link cards">{cards}</div>;
  }
}

class Card extends Component {
  render() {
    return (
      <div class="card">
        <div class="image">
          <img src={this.props.file} />
        </div>
      </div>
    );
  }
}

export default App;
