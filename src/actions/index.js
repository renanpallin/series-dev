import firebase from 'firebase';
import { Alert } from 'react-native';

const loginSuccess = (user, dispatch) =>
	dispatch({
		type: 'LOGIN_USER',
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

export const testDispath = value => ({
	type: 'TEST_DISPATCH',
	value
})

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


export const addSerie = serie => async dispatch => {
	const { currentUser } = firebase.auth();
	return await firebase.database().ref(`/user/${currentUser.uid}/series`).push(serie);
}

export const getSerieGender = () => async dispatch => {
	console.log('Buscando séries')
	const series = await firebase.database().ref(`/gender`).once('value')
	console.log(series)
	console.log(series.val())
}