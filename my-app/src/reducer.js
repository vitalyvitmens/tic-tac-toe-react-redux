export const initialState = {
	currentPlayer: 'X',
	winner: '',
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
		case 'IS_GAME_ENDED': {
			return {
				...state,
				isGameEnded: true,
			}
		}
		case 'WINNER_X': {
			return {
				...state,
				isGameEnded: true,
				winner: 'X',
			}
		}
		case 'WINNER_O': {
			return {
				...state,
				isGameEnded: true,
				winner: 'O',
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
			return {
				...state,
				isGameEnded: false,
				isDraw: false,
				winner: '',
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
			}
		}
		default:
			return state
	}
}
