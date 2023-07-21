import styles from './information.module.css'
import PropTypes from 'prop-types'

const InformationLayout = ({ currentPlayer, isDraw, isGameEnded, winner }) => (
	<div className={styles.field}>
		<div>{isDraw ? 'Ничья' : null}</div>
		<div>{!isDraw && isGameEnded ? `Победа: ${winner}` : null}</div>
		<div>{!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}</div>
		<div>{isGameEnded ? 'Конец игры!' : null}</div>
	</div>
)

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	winner: PropTypes.string,
}

export const Information = ({ currentPlayer, isDraw, isGameEnded, field }) => {
	const winnerArrX = [
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
	]

	const winnerArrO = [
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
	]

	const whoIsWinnerFn = (arr1, arr2, arr3) => {
		const compareArrBySlice = (start, end, arr1, arr2) =>
			String(arr1.slice(start, end).map((el) => el.value)) ===
			String(arr2.slice(start, end).map((el) => el.value))

		const compareArrByIndex = (a, b, c, arr1, arr2) =>
			String(arr1[a].value) + String(arr1[b].value) + String(arr1[c].value) ===
			String(arr2[a].value) + String(arr2[b].value) + String(arr2[c].value)

		if (
			compareArrBySlice(0, 3, arr1, arr2) ||
			compareArrBySlice(3, 6, arr1, arr2) ||
			compareArrBySlice(6, 9, arr1, arr2) ||
			compareArrByIndex(2, 4, 6, arr1, arr2) ||
			compareArrByIndex(0, 4, 8, arr1, arr2) ||
			compareArrByIndex(0, 3, 6, arr1, arr2) ||
			compareArrByIndex(1, 4, 7, arr1, arr2) ||
			compareArrByIndex(2, 5, 8, arr1, arr2)
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			compareArrBySlice(0, 3, arr1, arr3) ||
			compareArrBySlice(3, 6, arr1, arr3) ||
			compareArrBySlice(6, 9, arr1, arr3) ||
			compareArrByIndex(2, 4, 6, arr1, arr3) ||
			compareArrByIndex(0, 4, 8, arr1, arr3) ||
			compareArrByIndex(0, 3, 6, arr1, arr3) ||
			compareArrByIndex(1, 4, 7, arr1, arr3) ||
			compareArrByIndex(2, 5, 8, arr1, arr3)
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else {
			return
		}
	}

	let winner = whoIsWinnerFn(field, winnerArrX, winnerArrO)

	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			field={field}
			winner={winner}
		/>
	)
}

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.array,
	winner: PropTypes.string,
}
