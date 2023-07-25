import styles from './reset-button.module.css'

const ResetButtonLayout = ({ ResetButtonFn }) => (
	<button className={styles.resetBtn} onClick={() => ResetButtonFn()}>
		Начать заново
	</button>
)

export const ResetButton = ({ setField, setIsDraw, setIsGameEnded }) => {
	const ResetButtonFn = () => {
		setField([
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
		])
		setIsGameEnded(false)
		setIsDraw(false)
	}
	return (
		<ResetButtonLayout
			ResetButtonFn={ResetButtonFn}
			setField={setField}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
		/>
	)
}
