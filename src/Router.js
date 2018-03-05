import { StackNavigator, SwitchNavigator } from "react-navigation";

import LoginPage from "./pages/LoginPage";
import SeriesApp from "./SeriesApp";

export const stackNavigatorOptions = {
    navigationOptions: {
        title: "Series",
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "#6ca2f7",
            borderBottomWidth: 1,
            borderBottomColor: "#C5C5C5"
        },
        headerTitleStyle: {
            color: "white",
            fontSize: 30,
            alignSelf: "center"
        }
    }
};

const UnauthStack = StackNavigator(
    {
        Login: {
            screen: LoginPage
        }
    },
    stackNavigatorOptions
);

// const AuthStack = StackNavigator({
//     Main:
// });

const Router = SwitchNavigator({
    Unauth: UnauthStack,
    Auth: SeriesApp,
});

export default Router;
