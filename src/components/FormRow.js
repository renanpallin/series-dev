import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FormRow = ({ children }) => (
	<View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
	container: {
		padding: 10,
		// borderWidth: 1,
		backgroundColor: 'white',
		elevation: 1,
		marginTop: 5,
		marginBottom: 5,
	},
});

export default FormRow;
