import styles from './field.module.css'

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

export const Field = ({ field, handleChange, isGameEnded }) => {
	return (
		<FieldLayout
			field={field}
			handleChange={handleChange}
			isGameEnded={isGameEnded}
		/>
	)
}
