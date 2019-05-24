
import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../components/appNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('Home');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(
  tempNavState
);

//function NavReducer(state = initialNavState, action) {
const NavReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'Categories':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Categories' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}


export default NavReducer