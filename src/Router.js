import { StackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
// import SeriesApp from './SeriesApp';

import SeriesPage from "./pages/SeriesPage";
import SerieDetailPage from "./pages/SerieDetailPage";
import SerieFormPage from "./pages/SerieFormPage";

export const stackNavigatorOptions = {
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
};

// const UnauthStack = StackNavigator(
//     {
//         Login: {
//             screen: LoginPage,
//         },
//     },
//     stackNavigatorOptions
// );

// const AuthStack = StackNavigator({
//     Main:
// });

// const Router = SwitchNavigator({
//     Unauth: UnauthStack,
//     Auth: SeriesApp,
// });

const Router = StackNavigator(
    {
        Login: {
            screen: LoginPage
        },
        SerieForm: {
            screen: SerieFormPage,
        },
        Main: {
            screen: SeriesPage,
        },
        SerieDetail: {
            screen: SerieDetailPage,
            navigationOptions: ({ navigation }) => {
                const { title } = navigation.state.params.serie;
                // const title = 'Black Mirror';

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
    stackNavigatorOptions
);

export default Router;
