export const mapStateToProps = (state) => ({
  isDraw: state.isDraw,
	winner: state.winner,
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
})
