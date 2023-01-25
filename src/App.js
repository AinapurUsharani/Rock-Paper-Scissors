import {Component} from 'react'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import Game from './Components/Game'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isGameActive: true,
    score: 0,
    activeImage: '',
    opposite: '',
    gameStatus: '',
  }

  scoreChange = imageUrl => {
    const ImageItem = Math.floor(Math.random() * choicesList.length)
    const value = choicesList[ImageItem].imageUrl
    if (imageUrl === value) {
      this.setState({
        isGameActive: false,
        activeImage: imageUrl,
        opposite: value,
        gameStatus: 'IT IS DRAW',
      })
    }
    if (
      imageUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
      value ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameActive: false,
        activeImage: imageUrl,
        opposite: value,
        gameStatus: 'YOU WON',
      }))
    }
    if (
      imageUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
      value ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isGameActive: false,
        activeImage: imageUrl,
        opposite: value,
        gameStatus: 'YOU LOSE',
      }))
    }
    if (
      imageUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
      value ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isGameActive: false,
        activeImage: imageUrl,
        opposite: value,
        gameStatus: 'YOU LOSE',
      }))
    }
    if (
      imageUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
      value ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameActive: false,
        activeImage: imageUrl,
        opposite: value,
        gameStatus: 'YOU WON',
      }))
    }
    if (
      imageUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
      value ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameActive: false,
        activeImage: imageUrl,
        opposite: value,
        gameStatus: 'YOU WON',
      }))
    }
    if (
      imageUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
      value ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isGameActive: false,
        activeImage: imageUrl,
        opposite: value,
        gameStatus: 'YOU LOSE',
      }))
    }
  }

  ChangeGameStatus = () => {
    this.setState({isGameActive: true})
  }

  renderResult = () => {
    const {activeImage, opposite, gameStatus} = this.state

    return (
      <div className="result-container">
        <div className="image-container">
          <div className="my-container">
            <p className="paragraph">You</p>
            <img src={activeImage} alt="your choice" className="result-image" />
          </div>
          <div className="my-container">
            <p className="paragraph">Opponent</p>
            <img
              src={opposite}
              alt="opponent choice"
              className="result-image"
            />
          </div>
        </div>

        <p className="result-paragraph">{gameStatus}</p>
        <button
          type="button"
          className="playAgain"
          onClick={this.ChangeGameStatus}
        >
          Play Again
        </button>
      </div>
    )
  }

  renderGame = () => (
    <ul className="game-container">
      {choicesList.map(each => (
        <Game Details={each} key={each.id} scoreChange={this.scoreChange} />
      ))}
    </ul>
  )

  render() {
    const {isGameActive, score} = this.state
    return (
      <div className="app-container">
        <div className="Header">
          <h1 className="names">Rock Paper Scissors</h1>
          <div className="score-container">
            <p className="score-name">Score</p>
            <p className="score-value">{score}</p>
          </div>
        </div>
        {isGameActive ? this.renderGame() : this.renderResult()}
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              Rules
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="pop-container">
              <button
                type="button"
                onClick={() => close()}
                className="close-button"
                data-testid="closeButton"
              >
                <IoMdClose size="32" />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-image"
              />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default App
