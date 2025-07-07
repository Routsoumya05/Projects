import { useState } from 'react'
import './App.css'

function App() {
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState('')
  const [score, setScore] = useState({ player: 0, computer: 0 })

  const choices = ['rock', 'paper', 'scissors']

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3)
    return choices[randomIndex]
  }

  const determineWinner = (player, computer) => {
    if (player === computer) return 'tie'
    
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'player'
    }
    
    return 'computer'
  }

  const handleChoice = (choice) => {
    const computer = getComputerChoice()
    const winner = determineWinner(choice, computer)
    
    setPlayerChoice(choice)
    setComputerChoice(computer)
    
    if (winner === 'player') {
      setResult('You win! 🎉')
      setScore(prev => ({ ...prev, player: prev.player + 1 }))
    } else if (winner === 'computer') {
      setResult('Computer wins! 😔')
      setScore(prev => ({ ...prev, computer: prev.computer + 1 }))
    } else {
      setResult("It's a tie! 🤝")
    }
  }

  const resetGame = () => {
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult('')
    setScore({ player: 0, computer: 0 })
  }

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      
      <div className="score-board">
        <div className="score">
          <h3>You: {score.player}</h3>
        </div>
        <div className="score">
          <h3>Computer: {score.computer}</h3>
        </div>
      </div>

      <div className="choices">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleChoice(choice)}
            className={`choice-btn ${playerChoice === choice ? 'selected' : ''}`}
          >
            {choice === 'rock' && '🪨'}
            {choice === 'paper' && '📄'}
            {choice === 'scissors' && '✂️'}
            <span>{choice}</span>
          </button>
        ))}
      </div>

      {playerChoice && computerChoice && (
        <div className="game-result">
          <div className="choices-display">
            <div className="choice-display">
              <h4>Your choice:</h4>
              <div className="choice-icon">
                {playerChoice === 'rock' && '🪨'}
                {playerChoice === 'paper' && '📄'}
                {playerChoice === 'scissors' && '✂️'}
              </div>
              <p>{playerChoice}</p>
            </div>
            
            <div className="vs">VS</div>
            
            <div className="choice-display">
              <h4>Computer's choice:</h4>
              <div className="choice-icon">
                {computerChoice === 'rock' && '🪨'}
                {computerChoice === 'paper' && '📄'}
                {computerChoice === 'scissors' && '✂️'}
              </div>
              <p>{computerChoice}</p>
            </div>
          </div>
          
          <div className="result-message">
            <h2>{result}</h2>
          </div>
        </div>
      )}

      <button onClick={resetGame} className="reset-btn">
        Reset Game
      </button>
    </div>
  )
}

export default App 

