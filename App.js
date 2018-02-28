import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';

export default StackNavigator({
    'Main': {
        screen: SeriesPage
    },
    'SerieDetail': {
    	screen: SerieDetailPage
    }
}, {
	navigationOptions: {
		title: 'Series'
	}
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
