import {
	types,
} from 'mobx-state-tree'

const networkState = types.model({
	networkState: types.optional(types.enumeration(['initial', 'pending', 'done']), 'initial')
})

	.actions((self) => {
		return {
			networkStarted() {
				// console.log('Started loading')
				self.networkState = 'pending'
			},

			networkEnded() {
				// console.log('Stopped loading')
				self.networkState = 'done'
			},
		}
	})

	.views((self) => {
		return {
			get isLoading() {
				return self.networkState === 'pending'
			},
		}
	})


export {
	networkState,
}
