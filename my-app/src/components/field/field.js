import { useSelector, useDispatch } from 'react-redux'
import { ACTION_TYPE, IS_DRAW } from '../../actions'
import {
	selectCurrentPlayer,
	selectField,
	selectIsGameEnded,
	selectWinner,
} from '../../selectors'
import { WINNER_ARR_O, WINNER_ARR_X } from '../../constats'
import { whoIsWinnerFn } from '../../utils'

export const Field = () => {
	const winner = useSelector(selectWinner)
	const field = useSelector(selectField)
	const currentPlayer = useSelector(selectCurrentPlayer)
	const isGameEnded = useSelector(selectIsGameEnded)

	const dispatch = useDispatch()

	const handleChange = (index) => {
		const newField = [...field]
		newField[index].value = currentPlayer

		if (!winner) {
			dispatch({
				type: ACTION_TYPE.SET_GAME,
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
					: dispatch(IS_DRAW)
			} else {
				return
			}
		}
	}

	return (
		<div className="box">
			{field.map((cell, index) => {
				return (
					<button
						className={cell.value === 'X' ? 'x' : 'o'}
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
