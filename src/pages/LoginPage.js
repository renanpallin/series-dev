import React from 'react';
import {
	Alert,
	Button,
	Image,
	KeyboardAvoidingView,
	Picker,
	Slider,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import FormRow from '../components/FormRow';

import { connect } from 'react-redux';

import { tryLogin, getSerieGender } from '../actions';

@connect(({ user }) => ({ user }), { tryLogin, getSerieGender })
export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			isLoading: false,
		};
	}

	// componentDidMount() {
	// 	this.props.getSerieGender()
	// }

	componentDidUpdate(prevProps, prevState) {
		if (this.props.user)
			this.props.navigation.navigate('SerieForm');
	}

	tryLogin() {
		this.setState({ isLoading: true });
		const { email, password } = this.state;
		if (!email || !password) {
			setTimeout(() => Alert.alert(
							'Preenchimento inválido',
							'Você preencha os campos de email e senha!'
						), 50)
			return this.setState({ isLoading: false });
		}

		setTimeout(() => {
			this.props.tryLogin(email, password).then(() => {
				this.setState({ isLoading: false });
			});

		}, 500)
	}

	render() {
		return (
			<KeyboardAvoidingView
				resetScrollToCoords={{ x: 0, y: 0 }}
				style={styles.container}
				behavior="padding"
				contentContainerStyle={styles.ccs}>
				<FormRow>
					<TextInput
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
						placeholder="user@mail.com"
						style={[styles.baseInput, styles.input]}
					/>
				</FormRow>
				<FormRow>
					<TextInput
						onChangeText={password => this.setState({ password })}
						value={this.state.password}
						placeholder="********"
						secureTextEntry={true}
						style={[styles.baseInput, styles.input]}
					/>
				</FormRow>
				<View style={styles.buttonContainer}>
					<Button
						title="Entrar"
						onPress={() => {
							this.tryLogin();
						}}
					/>
				</View>
				<Text>{this.state.isLoading.toString()}</Text>
			</KeyboardAvoidingView>
		);
	}
}

// export default connect(({ user }) => ({ user: 123 }), { tryLogin })(LoginPage);

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	image: {
		aspectRatio: 1,
	},
	baseInput: {
		color: '#000',
		paddingRight: 5, // to the placeholder
		paddingLeft: 5, // to the placeholder
		paddingBottom: 10,
	},
	input: {
		// fontSize: 25,
	},
	longInput: {
		// fontSize: 18,
	},
	sameRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 10,
		paddingRight: 10,
		marginBottom: 10,
	},
	buttonContainer: {
		marginTop: 5,
	},
	// list: {
	// 	// flexDirection: 'row',
	// }
});
