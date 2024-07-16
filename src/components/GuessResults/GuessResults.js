import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '/src/constants.js';
import {checkGuess} from '/src/game-helpers.js';

function GuessResults({ guesses, answer }) {
  const temp = [...guesses];
  for(let n = temp.length; n < NUM_OF_GUESSES_ALLOWED; n++) {
    temp.push('     ');
  }
  return (
    <div className="guess-results">
      {temp.map((guess, index) => {
        return <p
          key={index}
          className="guess">
          {checkGuess(guess, answer).map((object, index) => {
            ourClass = object.letter == ' ' ? 'cell' : "cell " + object.status;
            return <span key={index}
               className={ourClass}>
              {object.letter}
            </span>
      })}
        </p>
})}
    </div>);
}
export default GuessResults;
