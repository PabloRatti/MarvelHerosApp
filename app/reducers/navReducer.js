import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../components/appNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('DetailScreen');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(tempNavState);

const NavReducer = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case 'HomeScreen':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'HomeScreen' }),
                state
            );
            break;
        case 'DetailScreen':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'DetailScreen' }),
                state
            );
            break;
        case 'ComicScreen':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ComicScreen' }),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default NavReducer;
