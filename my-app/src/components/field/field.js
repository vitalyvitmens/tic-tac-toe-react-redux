import styles from './field.module.css'
import PropTypes from 'prop-types'

const FieldLayout = ({ field, handleChange, isGameEnded }) => (
	<div className={styles.box}>
		{field.map((cell, index) => {
			return (
				<button
					className={cell.value === 'X' ? styles.x : styles.o}
					key={index}
					onClick={() => (!cell.value ? handleChange(index) : null)}
					disabled={isGameEnded}
				>
					{cell.value}
				</button>
			)
		})}
	</div>
)

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleChange: PropTypes.func,
	isGameEnded: PropTypes.bool,
}

export const Field = ({ field, handleChange, isGameEnded }) => {
	return (
		<FieldLayout
			field={field}
			handleChange={handleChange}
			isGameEnded={isGameEnded}
		/>
	)
}

Field.propTypes = {
	field: PropTypes.array,
	handleChange: PropTypes.func,
	isGameEnded: PropTypes.bool,
}
