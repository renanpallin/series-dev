import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const SerieCard = ({ serie }) => (
	<View style={styles.card}>
		<Text>{serie.title}</Text>
	</View>
);

var { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
	card: {
		width,
		height,
	},
});

export default SerieCard;
