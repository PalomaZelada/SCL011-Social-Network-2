import { combineReducers } from 'redux';

//importing reducers
import newUser from './signin';

const reducers = combineReducers({
signIn: newUser
});

export default reducers;
