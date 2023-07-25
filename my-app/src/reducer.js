export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: [
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
	],
	winnerArrX: [
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
		{ value: 'X' },
	],
	winnerArrO: [
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
		{ value: 'O' },
	],
}

export const reducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case 'SET_TIC_TAC_TOE': {
			return {
				...state,
				...payload,
			}
		}
		case 'GAME_IS_OVER': {
			return {
				...state,
				isGameEnded: true,
			}
		}
		case 'IS_DRAW': {
			return {
				...state,
				isGameEnded: true,
				isDraw: true,
			}
		}
		case 'NEW_GAME': {
			return initialState
		}
		default:
			return state
	}
}
