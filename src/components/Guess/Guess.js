import React from 'react';


function Guess({handleGuess}) {
  const [guess, setGuess] = React.useState('')
  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length < 5) { return; }
    handleGuess(guess)
    setGuess('');
  }
  return <div>
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label forhtml="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={event => {
          const text = event.target.value.toUpperCase();
          setGuess(text);
        }}
      />
    </form>
  </div>;
}

export default Guess;
