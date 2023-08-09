import { connect } from 'react-redux'
import { mapStateToProps } from '../../utils'

const InformationContainer = ({
	isDraw,
	isGameEnded,
	winner,
	currentPlayer,
}) => {
	return (
		<>
			<div className="text-4xl font-semibold my-30">
				{isDraw
					? 'Ничья\nКонец игры!'
					: isGameEnded
					? `Победа: ${winner}\nКонец игры!`
					: `Ходит: ${currentPlayer}`}
			</div>
		</>
	)
}

export const Information = connect(mapStateToProps)(InformationContainer)
