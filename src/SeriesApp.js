import React from "react";

import { StackNavigator } from "react-navigation";

import SeriesPage from "./pages/SeriesPage";
import SerieDetailPage from "./pages/SerieDetailPage";
import SerieFormPage from "./pages/SerieFormPage";

// minha primeira dependência cíclica kkk
import { stackNavigatorOptions } from "./Router";

export default class SeriesApp extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.navigation.state);
        // const { user } = this.props.navigation.state.params;

        this.state = {
            user: {}
        };
    }

    render() {
        const { user } = this.state;
        const SerieStack = StackNavigator(
            {
                SerieForm: {
                    screen: props => <SerieFormPage {...props} user={user} />
                },
                Main: {
                    screen: props => <SeriesPage {...props} user={user} />
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
