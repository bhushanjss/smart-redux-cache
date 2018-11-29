import { combineReducers } from 'redux';
import WeatherInfoReducer from './WeatherInfoReducer';

const rootReducer = combineReducers({
	weather: WeatherInfoReducer
});

export default rootReducer;