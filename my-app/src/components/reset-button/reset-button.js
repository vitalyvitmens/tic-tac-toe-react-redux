import styles from './reset-button.module.css'
import PropTypes from 'prop-types'

const ResetButtonLayout = ({ ResetButtonFn }) => (
	<button className={styles.resetBtn} onClick={() => ResetButtonFn()}>
		Начать заново
	</button>
)

ResetButtonLayout.propTypes = {
	ResetButtonFn: PropTypes.func,
}

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

ResetButton.propTypes = {
	ResetButtonFn: PropTypes.func,
	setField: PropTypes.func,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
}
