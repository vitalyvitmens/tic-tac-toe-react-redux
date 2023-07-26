import { store } from '../../store'
import styles from './reset-button.module.css'

export const ResetButton = () => {
	const ResetButtonFn = () => {
		store.dispatch({ type: 'NEW_GAME' })
	}

	return (
		<button className={styles.resetBtn} onClick={ResetButtonFn}>
			Начать заново
		</button>
	)
}
