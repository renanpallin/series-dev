import React from 'react';
import { StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import series from '../../series.json';

import SerieCard from '../components/SerieCard';

export default class SeriesPage extends React.Component {
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
		return (
			<FlatList
				contentContainerStyle={styles.list}
				data={this.state.series}
				numColumns={2}
				renderItem={({ item }) => (
					<SerieCard
						key={item.id}
						serie={item}
						navigateToDetail={(serie) => {this.props.navigation.navigate('SerieDetail', { serie })}}
					/>
				)}
				keyExtractor={item => item.id}
			/>
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
