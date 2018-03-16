import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from './src/Router';
import firebase from 'firebase';

import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from './src/reducers';


// https://github.com/zalmoxisus/remote-redux-devtools
const composeEnhancers = composeWithDevTools({ realtime: true });
const store = Redux.createStore(
    reducers,
    composeEnhancers(Redux.applyMiddleware(thunk))
);

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
