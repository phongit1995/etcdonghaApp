import {combineReducers} from 'redux';
import LoginReducers from './loginreducers';
let Reducers = combineReducers({
    Login:LoginReducers
})
export default Reducers ;