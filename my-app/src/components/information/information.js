import { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../utils'

export class InformationContainer extends Component {
	render() {
		return (
			<>
				<div className="text-4xl font-semibold my-30">
					{this.props.isDraw
						? 'Ничья\nКонец игры!'
						: this.props.isGameEnded
						? `Победа: ${this.props.winner}\nКонец игры!`
						: `Ходит: ${this.props.currentPlayer}`}
				</div>
			</>
		)
	}
}

export const Information = connect(mapStateToProps)(InformationContainer)
