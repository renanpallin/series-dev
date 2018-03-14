import { combineReducers } from 'redux';

export default combineReducers({
	series(state = [], action) {
		switch (action.type) {
			case 'ADD_SERIE':
				return [...state, action.serie];
			default:
				return state;
		}
	},

	user(state = null, action) {
		switch (action.type) {
			case 'SET_USER':
				return action.user;
			default:
				return state;
		}
	},
});
