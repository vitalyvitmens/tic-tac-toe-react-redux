import { store } from '../../store'
import { NEW_GAME } from '../../actions'
import styles from './reset-button.module.css'

export const ResetButton = () => {
	const handleNewGame = () => store.dispatch(NEW_GAME)

	return (
		<button className={styles.resetBtn} onClick={handleNewGame}>
			Начать заново
		</button>
	)
}
