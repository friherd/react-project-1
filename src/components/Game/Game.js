import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import GuessResults from '../GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants.js';

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const loser = guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const winner = [...guesses].pop() === answer;
  function handleGuess(newGuess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) { return }
    setGuesses([...guesses, newGuess]);
  }
  function playAgain() {
    const nextGuesses = [];
    setGuesses(nextGuesses)
    answer = sample(WORDS);
    console.info({ answer });
  }
  return <>
    <GuessResults
      guesses={guesses}
      answer={answer}
    />

    {loser && <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <button
        className='replay'
        onClick={playAgain}
      >
        Play Again
      </button>
    </div>}
    {winner && <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses.length} guess{guesses.length == 1 ? '' : 'es'}</strong>.
      </p>
      <button
        className='replay'
        onClick={playAgain}
      >
        Play Again
      </button>
    </div>}
    {!loser && !winner && <Guess
      handleGuess={handleGuess}
    />}
  </>;
}

export default Game;
