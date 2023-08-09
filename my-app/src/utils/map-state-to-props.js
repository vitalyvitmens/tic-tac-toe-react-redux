export const mapStateToProps = (state) => ({
	winner: state.winner,
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
})
