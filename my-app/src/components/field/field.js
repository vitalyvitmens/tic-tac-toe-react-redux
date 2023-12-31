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
			store.dispatch({
				type: 'SET_GAME',
				payload: {
					currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
					field: [...field],
				},
			})

			if (field.filter((el) => el.value !== '').length < 9) {
				whoIsWinnerFn(field, WINNER_ARR_X, WINNER_ARR_O)
			}

			if (field.filter((el) => el.value === '').length === 0) {
				whoIsWinnerFn(field, WINNER_ARR_X, WINNER_ARR_O)
					? whoIsWinnerFn(field, WINNER_ARR_X, WINNER_ARR_O)
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
