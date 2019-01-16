import React, { Component } from "react";
// import { Shake } from "reshake";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import chars from "./chars.json";

class App extends Component {
  state = {
    guessArray: [],
    message: "Click an image to begin!",
    score: 0,
    topScore: 0,
    shake: 0
  };

  // Card is clicked
  clickCard = card => {
    let guessArray = this.state.guessArray;
    let score = this.state.score;
    // if card is already clicked...
    if (guessArray[card.id]) {
      this.setState({
        message: "Somebody done told you wrong!!!",
        topScore: Math.max(this.state.score, this.state.topScore),
        guessArray: [],
        score: 0,
        shake: 0.75
      });
    } else {
      guessArray[card.id] = true;
      this.setState({
        message: "wazzup, Wazzup, WAZZUP!?!?!",
        guessArray: guessArray,
        score: ++score,
        shake: 0
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.top}
        />
        <Jumbotron />
        {/* Use "reshake" to shake the page on a wrong answer */}
        {/* <Shake
          h={25}
          v={10}
          r={5}
          q={this.state.shake}
          dur={650}
          int={2.6}
          max={40}
          fixed={true}
          fixedStop={false}
          freez={false}
        > */}
        <Wrapper>
          {chars
            .sort((a, b) => 0.5 - Math.random())
            .map(randomCard => (
              <ImgCard
                clickCard={this.clickCard}
                name={randomCard.name}
                key={randomCard.name}
                image={randomCard.img_url}
              />
            ))}
        </Wrapper>
        {/* </Shake> */}
        <Footer />
      </div>
    );
  }
}

export default App;
