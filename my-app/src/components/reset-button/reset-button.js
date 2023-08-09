import { connect } from 'react-redux'
import { NEW_GAME } from '../../actions'

const ResetButtonContainer = ({ dispatch }) => {

	const handleNewGame = () => dispatch(NEW_GAME)

	return (
		<button className="resetBtn" onClick={handleNewGame}>
			Начать заново
		</button>
	)
}

export const ResetButton = connect()(ResetButtonContainer)
