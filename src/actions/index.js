import firebase from 'firebase';
import { Alert } from 'react-native';

const loginSuccess = (user, dispatch) =>
	dispatch({
		type: 'SET_USER',
		user,
	});

const getMessageByErrorCode = errorCode => {
	switch (errorCode) {
		case 'auth/wrong-password':
			return 'Senha incorreta';
		case 'auth/user-not-found':
			return 'Usuário não encontrado';
		default:
			return 'Erro desconhecido';
	}
};

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
							},
							// style: 'cancel', // Só pra IOS
						},
						{
							text: 'Sim',
							onPress: () => {
								console.log('criando usuário', email, password)
								firebase
									.auth()
									.createUserWithEmailAndPassword(
										email,
										password
									)
									.then(user => {
										console.log('usúario criado!', email, password, user)
										loginSuccess(user, dispatch)
									})
									.catch(error => {
										Alert.alert(
											'Oops...',
											getMessageByErrorCode(error.code)
										);
									});
							},
						},
					],
					{ cancelable: false }
				);
			} else {
				Alert.alert('Oops...', getMessageByErrorCode(error.code));
			}
		});
};
