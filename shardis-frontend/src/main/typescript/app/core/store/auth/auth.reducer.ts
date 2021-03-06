import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import {AuthState, initialState} from './auth.state';
import {Actions, ActionTypes, ProcessTokenAction, AuthErrorAction} from './auth.actions';

export function decodeAccessToken(access_token: string) {
  try {
    return JSON.parse(window.atob(access_token.split('.')[1]));
  } catch (e) {
    console.log(`access token '${access_token}' is not correct`);
    return null;
  }

}

export function authReducer(state = initialState, action: Actions): AuthState {
  switch (action.type) {

    case ActionTypes.CLEAR_AUTH_STATE:
      return Object.assign({}, initialState);

    case ActionTypes.PROCESS_TOKEN:
      const processTokenAction: ProcessTokenAction = action as ProcessTokenAction;
      const userData = decodeAccessToken(processTokenAction.payload);
      console.log('userdata is ', userData);
      return (!userData) ? state : Object.assign({}, initialState, {
          authenticated: true,
          tokenExpirationDate: new Date(userData.exp * 1000),
          userData: userData,
          jwtToken: processTokenAction.payload
        });

    case ActionTypes.AUTH_ERROR:
      const authErrorAction: AuthErrorAction = action as AuthErrorAction;
      return Object.assign({}, state, {error: authErrorAction.payload});

    case ActionTypes.CLEAR_AUTH_ERROR:
      return Object.assign({}, state, {error: null});

    default:
      return state;
  }
}

