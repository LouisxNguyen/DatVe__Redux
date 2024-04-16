import {combineReducers} from 'redux';
import seatReducer from './chairReducer';
const rootReducer = combineReducers({
    seatReducer,
})
export default rootReducer;