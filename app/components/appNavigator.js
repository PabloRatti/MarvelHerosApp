import Routes from '../config/routes';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
    createReactNavigationReduxMiddleware,
    reduxifyNavigator
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const RootNavigator = createStackNavigator(Routes);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
