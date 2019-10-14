import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: this.getGreatQuote(),
      currentColor: this.getRandomColor()
    };

    this.newQuote = this.newQuote.bind(this);
  }

  getGreatQuote() {
    let quotes = [
      {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
      },
      {
        quote: "Those who dare to fail miserably can achieve greatly.",
        author: "John F. Kennedy"
      },
      {
        quote: "It is hard to fail, but it is worse never to have tried to succeed.",
        author: "Theodore Roosevelt"
      },
      {
        quote: "It is our choices, that show what we truly are, far more than our abilities.",
        author: "J. K Rowling"
      },
      {
        quote: "If you want to be happy, be.",
        author: "Leo Tolstoy"
      }
    ];
    return quotes[ Math.floor( Math.random()*( quotes.length ) ) ];
  }

  getRandomColor() {
    return "#"+((1<<24)*Math.random()|0).toString(16);
  }

  newQuote() {
    this.setState({
      currentQuote: this.getGreatQuote(),
      currentColor: this.getRandomColor()
    });
  }

  render() {
    let bgColorStyle = {
      backgroundColor: this.state.currentColor
    };
    let fgColorStyle = {
      color: this.state.currentColor
    };
    let transitionStyle = {
      transitionProperty: 'background-color, color',
      transitionDuration: '2s'
    };
    let borderStyle = {
      border: `1px solid ${this.state.currentColor}`,
      transitionProperty: 'border-color',
      transitionDuration: '2s'
    };
    return (
      <div className="mainContainer" style={Object.assign({}, bgColorStyle, fgColorStyle, transitionStyle)}>
        <div id="qoute-box" className="quoteBox">
          <div className="quoteTextContainer">
            <FontAwesomeIcon icon={faQuoteLeft} size="2x"></FontAwesomeIcon>
            <p id="text" className="quoteText">{this.state.currentQuote.quote}</p>
            <FontAwesomeIcon icon={faQuoteRight} size="2x"></FontAwesomeIcon>
          </div>
          <p id="author" className="quoteAuthor">{this.state.currentQuote.author}</p>
          <hr style={borderStyle}/>
          <div className="quoteBtnLayout">
            <button id="tweet-quote" className="quoteBtn" style={Object.assign({}, bgColorStyle, transitionStyle)}>
              <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
            </button>
            <button id="tumblr-quote" className="quoteBtn" style={Object.assign({}, bgColorStyle, transitionStyle)}>
              <FontAwesomeIcon icon={faTumblr} size="2x"></FontAwesomeIcon>
            </button>
            <button id="new-quote" className={`quoteBtn newQuote`} onClick={this.newQuote} style={Object.assign({}, bgColorStyle, transitionStyle)}>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
