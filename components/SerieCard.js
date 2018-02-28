import React from 'react';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';

const SerieCard = ({ serie }) => (
	<View style={styles.container}>
		<View style={styles.card}>
			{/*
				stretch: Aperta a imagem e faz caber, ajusta largura e altura
				cover: Mantém a imagem original, mas cobre todo o container, se baseando no MENOR entre a largura e a altura
				contain: Não estica a imagem, faz caber sem mexer nas proporções, se baseando no MAIOR entre a largura e a altura
			*/}
			<Image
				source={{
					uri: serie.img,
				}}
				style={styles.image}
				aspectRatio={1}
				resizeMode="cover"
			/>
			<View>
				<View style={styles.cardTitleContainer}>
					<Text style={styles.cardTitle}>{serie.title}</Text>
				</View>
			</View>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		height: Dimensions.get('window').width / 2 , // @optional
	},
	image: {},
	card: {
		flex: 1,
		borderWidth: 1,
	},
	cardTitleContainer: {
		position: 'absolute',
		top: -50, // @see o mesmo alor
		backgroundColor: 'pink',
		opacity: 0.8,
		width: '100%',
		height: 50, // @see o mesmo valor

		paddingTop: 10,
		paddingBottom: 10,

		paddingLeft: 3,
		paddingRight: 3,

	},
	cardTitle: {
		// color: 'white',
		fontSize: 15,
		fontWeight: 'bold',
	},
});

export default SerieCard;
