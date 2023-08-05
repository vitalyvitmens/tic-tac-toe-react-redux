import { useDispatch } from 'react-redux'
import { NEW_GAME } from '../../actions'
import styles from './reset-button.module.css'

export const ResetButton = () => {
  const dispatch = useDispatch()

	const handleNewGame = () => dispatch(NEW_GAME)


	return (
		<button className={styles.resetBtn} onClick={handleNewGame}>
			Начать заново
		</button>
	)
}
