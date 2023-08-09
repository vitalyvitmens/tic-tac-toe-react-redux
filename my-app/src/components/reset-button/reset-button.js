import { useDispatch } from 'react-redux'
import { NEW_GAME } from '../../actions'

export const ResetButton = () => {
	const dispatch = useDispatch()

	const handleNewGame = () => dispatch(NEW_GAME)

	return (
		<button className="resetBtn" onClick={handleNewGame}>
			Начать заново
		</button>
	)
}
