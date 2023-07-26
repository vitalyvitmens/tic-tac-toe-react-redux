import { store } from '../../store'
import styles from './field.module.css'

export const Field = () => {
	const { field, currentPlayer, isGameEnded } = store.getState()

	const handleChange = (index) => {
		currentPlayer === 'X'
			? store.dispatch({
					type: 'SET_TIC_TAC_TOE',
					payload: {
						currentPlayer: 'O',
					},
			  })
			: store.dispatch({
					type: 'SET_TIC_TAC_TOE',
					payload: {
						currentPlayer: 'X',
					},
			  })
		const newField = [...field]
		newField[index].value = currentPlayer
		store.dispatch({
			type: 'SET_TIC_TAC_TOE',
			payload: {
				field: [...field],
			},
		})

		if (field.filter((el) => el.value === '').length === 0) {
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
