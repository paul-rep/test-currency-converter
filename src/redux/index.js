import {combineReducers} from 'redux';
import { currencyReducer } from './currencyReducer';

const rootReducer = combineReducers({
    base_currency: currencyReducer
})

export default rootReducer;