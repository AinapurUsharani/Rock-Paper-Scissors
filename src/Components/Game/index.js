import './index.css'

const Game = props => {
  const {Details, scoreChange} = props
  const {imageUrl, id} = Details

  const gameMatch = () => {
    scoreChange(imageUrl)
  }

  const renderTest = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'SCISSORS':
        return 'scissorsButton'
      case 'PAPER':
        return 'paperButton'
      default:
        return null
    }
  }

  return (
    <li className="game-list-item">
      <button
        type="button"
        className="button-element"
        onClick={gameMatch}
        data-testid={renderTest()}
      >
        <img src={imageUrl} alt={id} className="image-element" />
      </button>
    </li>
  )
}

export default Game
