import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label = '', text = '' }) => {
	return (
		<View style={styles.line}>
			<Text style={[styles.cell, styles.label]}>{label}</Text>
			<Text style={[styles.cell, styles.content]}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	line: {
		// flexDirection: 'row',
		paddingTop: 3,
		paddingBottom: 3,
		// borderWidth: 1,
		// borderColor: '#C5C5C5',
	},
	cell: {
		fontSize: 18,
		paddingLeft: 10,
		paddingRight: 10,

		// borderWidth: 1,
	},
	label: {
		fontWeight: 'bold',
		flex: 1,
		paddingBottom: 8,
		textDecorationLine: 'underline',
	},
	content: {
		flex: 3,
		textAlign: 'justify',
	},
	longLabel: {
		fontSize: 12,
	},
});

export default Line;
