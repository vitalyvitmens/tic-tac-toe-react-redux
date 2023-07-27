import { store } from '../../store'
import styles from './field.module.css'

export const Field = () => {
	const { winner, field, currentPlayer, isGameEnded } = store.getState()

	const handleChange = (index) => {
		const newField = [...field]
		newField[index].value = currentPlayer

		currentPlayer === 'X'
			? store.dispatch({
					type: 'SET_GAME',
					payload: {
						currentPlayer: 'O',
						field: [...field],
					},
			  })
			: store.dispatch({
					type: 'SET_GAME',
					payload: {
						currentPlayer: 'X',
						field: [...field],
					},
			  })
		if (
			field.filter((el) => el.value === '').length === 0 &&
			(winner !== 'X' || winner !== 'O')
		) {
			store.dispatch({ type: 'IS_DRAW' })
		} else {
			return
		}
	}

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
