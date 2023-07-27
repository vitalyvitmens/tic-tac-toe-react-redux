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
}

export const reducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case 'SET_GAME': {
			return {
				...state,
				...payload,
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
				winner: '',
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
