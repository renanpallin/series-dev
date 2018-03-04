import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	LayoutAnimation,
	NativeModules,
} from 'react-native';

// This makes the animation work on Android devices
NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
	NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LongText extends React.Component {
	state = {
		isExpanded: true,
	};

	toggleExpanded() {
		this.setState({ isExpanded: !this.state.isExpanded });

		if (this.state.isExpanded) {
			setTimeout(() => this.props.scrollToBottom(800), 200)
		}
	}

	componentWillUpdate(nextProps, nextState) {
		LayoutAnimation.spring();
	}

	render() {
		const { label = '', text = '' } = this.props;
		return (
			<View style={styles.line}>
				<Text style={[styles.cell, styles.label]}>{label}</Text>
				<TouchableWithoutFeedback onPress={() => this.toggleExpanded()}>
					<View
						style={
							this.state.isExpanded
								? styles.expanded
								: styles.collapsed
						}>
						<Text style={[styles.cell, styles.content]}>
							{text}
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

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
	collapsed: {
		maxHeight: 65,
	},
	expanded: {
		flex: 1,
	},
});
