import firebase from 'firebase';

export const tryLogin = (email, password) => async dispatch => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => {
			console.log('LoginPage', user);
			// this.props.navigation.navigate('Auth', { user });
		})
		.catch(error => {
			console.log(error);
			Alert.alert('ooopts');

			// firebase
			// 	.auth()
			// 	.createUserWithEmailAndPassword(email, password)
			// 	.then(user => loginUserSuccess(dispatch, user))
			// 	.catch(() => loginUserFail(dispatch));
		});


	dispatch({

	})
	return ({
		type: 'TRY_LOGIN',
		userData,
	});
};
