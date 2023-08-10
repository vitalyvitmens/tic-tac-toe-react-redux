import { Component } from 'react'
import { connect } from 'react-redux'
import { ACTION_TYPE, IS_DRAW } from '../../actions'
import { WINNER_ARR_O, WINNER_ARR_X } from '../../constats'
import { whoIsWinnerFn, mapStateToProps } from '../../utils'
export class FieldContainer extends Component {
	handleChange = (index) => {
		const newField = [...this.props.field]
		newField[index].value = this.props.currentPlayer

		if (!this.props.winner) {
			this.props.dispatch({
				type: ACTION_TYPE.SET_GAME,
				payload: {
					currentPlayer: this.props.currentPlayer === 'X' ? 'O' : 'X',
					field: [...this.props.field],
				},
			})

			if (this.props.field.filter((el) => el.value !== '').length < 9) {
				whoIsWinnerFn(this.props.field, WINNER_ARR_X, WINNER_ARR_O)
			}

			if (this.props.field.filter((el) => el.value === '').length === 0) {
				whoIsWinnerFn(this.props.field, WINNER_ARR_X, WINNER_ARR_O)
					? whoIsWinnerFn(this.props.field, WINNER_ARR_X, WINNER_ARR_O)
					: this.props.dispatch(IS_DRAW)
			} else {
				return
			}
		}
	}

	render() {
		return (
			<div className="box">
				{this.props.field.map((cell, index) => {
					return (
						<button
							className={cell.value === 'X' ? 'x' : 'o'}
							key={index}
							onClick={() => (!cell.value ? this.handleChange(index) : null)}
							disabled={this.props.isGameEnded}
						>
							{cell.value}
						</button>
					)
				})}
			</div>
		)
	}
}

export const Field = connect(mapStateToProps)(FieldContainer)
