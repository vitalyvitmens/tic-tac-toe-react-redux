import { store } from '../../store'
import { WINNER_ARR_O, WINNER_ARR_X } from '../../constats'
import { whoIsWinnerFn } from '../../utils'
import styles from './field.module.css'

export const Field = () => {
	const { winner, field, currentPlayer, isGameEnded } = store.getState()

	const handleChange = (index) => {
		const newField = [...field]
		newField[index].value = currentPlayer

		if (!winner) {
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

			whoIsWinnerFn(field, WINNER_ARR_X, WINNER_ARR_O)

			if (field.filter((el) => el.value === '').length === 0) {
				whoIsWinnerFn(field, WINNER_ARR_X, WINNER_ARR_O)
					? 'X'
						? store.dispatch({ type: 'WINNER_X' })
						: store.dispatch({ type: 'WINNER_O' })
					: store.dispatch({ type: 'IS_DRAW' })
			} else {
				return
			}
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
