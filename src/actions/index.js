import firebase from 'firebase';
import { Alert } from 'react-native';

const loginSuccess = (user, dispath) =>
	dispatch({
		type: 'SET_USER',
		user,
	});
export const tryLogin = (email, password) => async dispatch => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(user => {
			console.log('LoginPage', user);
			loginSuccess(user, dispatch);
		})
		.catch(error => {
			console.log(error.code, error);
			if (error.code === 'auth/user-not-found') {
				Alert.alert(
					'Usuário não encontrado',
					'Deseja criar um cadastro com as informações inseridas?',
					[
						{
							text: 'Não',
							onPress: () => {
								console.log('Cancel Pressed');
								firebase
									.auth()
									.createUserWithEmailAndPassword(
										email,
										password
									)
									.then(user => loginSuccess(user, dispatch))
									.catch(error => {
										Alert.alert(
											'Oops...',
											'Um erro ocorreu'
										);
									});
							},
							style: 'cancel',
						},
						{
							text: 'Sim',
							onPress: () => console.log('OK Pressed'),
						},
					],
					{ cancelable: false }
				);
			} else {
				Alert.alert('Oops...', 'Um erro ocorreu');
			}
		});
};
