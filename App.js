import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';

export default StackNavigator(
    {
        SerieForm: {
            screen: SerieFormPage,
        },
        Main: {
            screen: SeriesPage,
        },
        SerieDetail: {
            screen: SerieDetailPage,
            navigationOptions: ({ navigation }) => {
                // const { title } = navigation.state.params.serie;
                const title = 'Black Mirror';

                return {
                    title,
                    headerTitleStyle: {
                        color: 'white',
                        fontSize: 30,
                    },
                };
            },
        },
    },
    {
        navigationOptions: {
            title: 'Series',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: '#C5C5C5',
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 30,
                alignSelf: 'center',
            },
        },
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
