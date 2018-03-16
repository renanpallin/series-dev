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
			case 'LOGIN_USER':
				return action.user;
			case 'LOGOUT_USER':
				return null;
			default:
				return state;
		}
	},
});
