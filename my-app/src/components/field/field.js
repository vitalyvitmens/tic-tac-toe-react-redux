import { store } from '../../store'
import styles from './field.module.css'

export const Field = ({ handleChange }) => {
	const { isGameEnded, field } = store.getState()

	return (
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
}
