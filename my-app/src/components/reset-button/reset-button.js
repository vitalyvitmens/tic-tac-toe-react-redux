import { Component } from 'react'
import { connect } from 'react-redux'
import { NEW_GAME } from '../../actions'

export class ResetButtonContainer extends Component {
	handleNewGame = () => this.props.dispatch(NEW_GAME)

	render() {
		return (
			<button className="resetBtn" onClick={this.handleNewGame}>
				Начать заново
			</button>
		)
	}
}

export const ResetButton = connect()(ResetButtonContainer)
