import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import series from '../series.json';

import SerieCard from '../components/SerieCard';

export default class SeriesList extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			series: []
		}
	}

	componentDidMount() {
		this.setState({
			series
		})
	}

	render(){
		return (
			<ScrollView>
				<Text>Lista da parada</Text>
				{this.state.series.map(serie => {
					return <SerieCard key={serie.id} serie={serie} />
				})}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({

})
