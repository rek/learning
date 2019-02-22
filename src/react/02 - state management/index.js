import React from 'react'
import {observer} from 'mobx-react'
import {types} from 'mobx-state-tree'

const Robot = types.model('RobotModel', {
	name: '',
	kills: 0,
	model: '',
})

	.actions((self) => {
		return {
			addKill() {
				self.kills++
			},
		}
	})

	.views((self) => {
		return {
			get display() {
				return `${self.name} (${self.kills})`
			}
		}
	})


class StateManagement extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true
		}
	}

	render() {
		const {

		} = this.props

		return (
			<div>
				test
			</div>
		)
	}
}

export default observer(StateManagement)
