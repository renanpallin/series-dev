import React from 'react';
import { StackNavigator, SwitchNavigator } from "react-navigation";

import SeriesPage from "./pages/SeriesPage";
import SerieDetailPage from "./pages/SerieDetailPage";
import SerieFormPage from "./pages/SerieFormPage";
import LoginPage from "./pages/LoginPage";

const stackNavigatorOptions = {
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

class SeriesApp extends React.Component {
    constructor(props) {
        super(props);

        const { user } = this.props.navigation.state.params;

        this.state = {
            user
        };
    }

    render() {
        const { user } = this.state;
        const SerieStack = StackNavigator(
            {
                Main: {
                    screen: props => <SeriesPage {...props} user={user} />
                },
                SerieForm: {
                    screen: props => <SerieFormPage {...props} user={user} />
                },
                SerieDetail: {
                    screen: props => <SerieDetailPage {...props} user={user} />,
                    navigationOptions: ({ navigation }) => {
                        // const { title } = navigation.state.params.serie;
                        const title = "Black Mirror";

                        return {
                            title,
                            headerTitleStyle: {
                                color: "white",
                                fontSize: 30
                            }
                        };
                    }
                }
            },
            stackNavigatorOptions
        );
        return <SerieStack />;
    }
}

const AuthStack = StackNavigator({
    Main: SeriesApp
});

const Router = SwitchNavigator({
    Unauth: UnauthStack,
    Auth: AuthStack
});

export default Router;
