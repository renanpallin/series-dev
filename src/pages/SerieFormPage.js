import React from 'react';
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
	DatePickerAndroid
} from 'react-native';
// import series from '../series.json';

import Line from '../components/Line';
import LongText from '../components/LongText';
import FormRow from '../components/FormRow';

export default class SerieDetailPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			img: '',
			gender: '',
			rate: 0,
			description: '',
		};
	}

	async openDatePicker() {
		try {
			const { action, year, month, day } = await DatePickerAndroid.open({
				// Use `new Date()` for current date.
				// May 25 2020. Month 0 is January.
				date: new Date(2020, 4, 25),
			});
			if (action !== DatePickerAndroid.dismissedAction) {
				// Selected year, month (0-11), day
			}
		} catch ({ code, message }) {
			console.warn('Cannot open date picker', message);
		}
	}

	render() {
		// const { serie } = this.props.navigation.state.params;
		// const serie = {
		// 	id: 1,
		// 	title: 'Black Mirror',
		// 	gender: 'Comédia',
		// 	rate: 100,
		// 	img:
		// 		'https://images-na.ssl-images-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
		// 	description:
		// 		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptatibus consectetur alias dolor ullam, repellat natus deleniti. Officiis sint fuga aut possimus alias accusantium consequatur blanditiis itaque unde ad voluptas a assumenda, eum sed necessitatibus ullam asperiores neque architecto dignissimos, non. Temporibus fugit perspiciatis, deserunt quae rem dicta sed soluta quisquam eum, repellendus sunt distinctio deleniti voluptate voluptates. Unde, doloremque.",
		// };

		return (
			<KeyboardAvoidingView
				resetScrollToCoords={{ x: 0, y: 0 }}
				style={styles.container}
				behavior="padding"
				contentContainerStyle={styles.ccs}>
				<FormRow>
					<TextInput
						onChangeText={title => this.setState({ title })}
						value={this.state.title}
						placeholder="Título"
						style={[styles.baseInput, styles.input]}
					/>
				</FormRow>
				<FormRow>
					<TextInput
						onChangeText={img => this.setState({ img })}
						value={this.state.img}
						placeholder="Imagem URL"
						style={[styles.baseInput, styles.input]}
					/>
				</FormRow>
				<FormRow>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={gender => this.setState({ gender })}>
						<Picker.Item label="Comédia" value="comedy" />
						<Picker.Item label="Terror" value="horror" />
						<Picker.Item label="Policial" value="officer" />
						<Picker.Item label="Ficção" value="scifi" />
						<Picker.Item label="Avenura" value="adventure" />
					</Picker>
				</FormRow>

				<FormRow>
					<View style={styles.sameRow}>
						<Text>Nota:</Text>
						<Text>{this.state.rate}</Text>
					</View>
					<Slider
						onValueChange={rate => this.setState({ rate })}
						minimumValue={0}
						maximumValue={100}
						step={5}
					/>
				</FormRow>
				<FormRow>
					<TextInput
						onChangeText={text => this.setState({ text })}
						value={this.state.text}
						placeholder="Descrição"
						style={[styles.baseInput, styles.longInput]}
						numberOfLines={4}
					/>
				</FormRow>
				<Button
					title="Salvar"
					onPress={() => {
						console.log(this.state);
						this.openDatePicker();
					}}
				/>
			</KeyboardAvoidingView>
		);
	}
}

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
	// list: {
	// 	// flexDirection: 'row',
	// }
});
