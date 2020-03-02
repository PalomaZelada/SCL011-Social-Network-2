import { createStore, applyMiddleware } from 'redux';
import Reducers from '../reducers/reducers';
import thunk from 'redux-thunk';

const middleWare= applyMiddleware(thunk);
const store = createStore(Reducers, middleWare);


export default store