import { store } from '../../store'
import styles from './reset-button.module.css'

const ResetButtonLayout = ({ ResetButtonFn }) => (
	<button className={styles.resetBtn} onClick={ResetButtonFn}>
		Начать заново
	</button>
)

export const ResetButton = () => {

	const ResetButtonFn = () => {
		store.dispatch({ type: 'NEW_GAME' })
	}

	return <ResetButtonLayout ResetButtonFn={ResetButtonFn} />
}
