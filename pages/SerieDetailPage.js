import React from 'react';
import { StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import series from '../series.json';

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
		const { serie } = this.props.navigation.state.params;

		return (
			<ScrollView>
				<Text>{serie.title}</Text>
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
	// list: {
	// 	// flexDirection: 'row',
	// }
});
