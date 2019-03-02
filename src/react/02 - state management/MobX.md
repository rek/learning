MobX
-----------

- Multiple stores
- Observeable arrays etc. IE: It wraps our objects with observables
- Pure MobX does not enforce structure
- Implemented internally with Proxys (v5)

Critisisms:

- Redux is moving forward, one way data binding (flux)
- MobX is going back allowing views to change data.

Boasts:

- MobX thinks it's so awesome because it removed boilerplate

Solution:

MobX State Tree!

- MST defines types for all observable data
- Actions
	- Can only mutate data from here
	- Triggers changes to anything observing
- Views
	- Computed values
	- Memoized
