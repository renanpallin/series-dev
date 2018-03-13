import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from './src/Router';
import firebase from 'firebase';

import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './src/reducers';

const store = Redux.createStore(reducers, Redux.applyMiddleware(thunk));

export default class App extends React.Component {
    componentDidMount() {
        var config = {
            apiKey: 'AIzaSyDoWiyuevt0NVQo2-4ECHcsN-KF4xpJxio',
            authDomain: 'series-dev.firebaseapp.com',
            databaseURL: 'https://series-dev.firebaseio.com',
            projectId: 'series-dev',
            storageBucket: '',
            messagingSenderId: '731104072505',
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
