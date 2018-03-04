import React from "react";
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Text,
	Image,
	TextInput,
	Picker,
	Slider,
	Button,
	Alert
} from "react-native";
import FormRow from "../components/FormRow";

import firebase from "firebase";

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	tryLogin() {
		const { email, password } = this.state;
		if (!email || !password)
			return Alert.alert("Você preencha os campos de email e senha!");

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				this.props.navigation.navigate('Auth', { user })
			})
			.catch(error => {
				console.log(error);
				Alert.alert("ooopts");

				// firebase
				// 	.auth()
				// 	.createUserWithEmailAndPassword(email, password)
				// 	.then(user => loginUserSuccess(dispatch, user))
				// 	.catch(() => loginUserFail(dispatch));
			});
	}

	render() {
		return (
			<KeyboardAvoidingView
				resetScrollToCoords={{ x: 0, y: 0 }}
				style={styles.container}
				behavior="padding"
				contentContainerStyle={styles.ccs}
			>
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
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10
	},
	image: {
		aspectRatio: 1
	},
	baseInput: {
		color: "#000",
		paddingRight: 5, // to the placeholder
		paddingLeft: 5, // to the placeholder
		paddingBottom: 10
	},
	input: {
		// fontSize: 25,
	},
	longInput: {
		// fontSize: 18,
	},
	sameRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingLeft: 10,
		paddingRight: 10,
		marginBottom: 10
	},
	buttonContainer: {
		marginTop: 5
	}
	// list: {
	// 	// flexDirection: 'row',
	// }
});
