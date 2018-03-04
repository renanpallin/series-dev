import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Router from "./src/Router";

import firebase from "firebase";

export default class App extends React.Component {
    componentDidMount() {
        var config = {
            apiKey: "AIzaSyDoWiyuevt0NVQo2-4ECHcsN-KF4xpJxio",
            authDomain: "series-dev.firebaseapp.com",
            databaseURL: "https://series-dev.firebaseio.com",
            projectId: "series-dev",
            storageBucket: "",
            messagingSenderId: "731104072505"
        };
        firebase.initializeApp(config);
    }

    render() {
        return <Router />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
