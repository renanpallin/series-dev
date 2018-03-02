import React from 'react';
import { StyleSheet, ScrollView, Text, Image } from 'react-native';
import series from '../series.json';

import Line from '../components/Line';
import LongText from '../components/LongText';

export default class SerieDetailPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [],
		};
	}

	componentDidMount() {
		this.setState({
			series,
		});
	}

	render() {
		// const { serie } = this.props.navigation.state.params;
		const serie = {
			id: 1,
			title: 'Black Mirror',
			gender: 'Comédia',
			rate: 100,
			img:
				'https://images-na.ssl-images-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, voluptatibus consectetur alias dolor ullam, repellat natus deleniti. Officiis sint fuga aut possimus alias accusantium consequatur blanditiis itaque unde ad voluptas a assumenda, eum sed necessitatibus ullam asperiores neque architecto dignissimos, non. Temporibus fugit perspiciatis, deserunt quae rem dicta sed soluta quisquam eum, repellendus sunt distinctio deleniti voluptate voluptates. Unde, doloremque.",
		};

		return (
			<ScrollView>
				<Image style={styles.image} source={{ uri: serie.img }} />
				<Line label="Gênero" content={serie.gender}  />
				<Line label="Nota" content={serie.rate}  />
				<LongText label="Descrição" text={serie.description} />
			</ScrollView>
		);
	}
}
// <ScrollView>
// 	<Text>Lista da parada</Text>
// 	{this.state.series.map(serie => {
// 		return <SerieCard key={serie.id} serie={serie} />
// 	})}
// </ScrollView>

const styles = StyleSheet.create({
	image: {
		aspectRatio: 1
	},
	// list: {
	// 	// flexDirection: 'row',
	// }
});
