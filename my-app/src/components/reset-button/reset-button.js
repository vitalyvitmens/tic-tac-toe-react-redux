import styles from './reset-button.module.css'

export const ResetButton = ({ handleNewGame }) => {
	return (
		<button className={styles.resetBtn} onClick={handleNewGame}>
			Начать заново
		</button>
	)
}
