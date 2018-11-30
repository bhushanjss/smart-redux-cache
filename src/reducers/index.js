import { combineReducers } from 'redux';
import WeatherInfoReducer from './WeatherInfoReducer';
import TwitterFeedReducer from './TwitterFeedReducer';

const rootReducer = combineReducers({
	weather: WeatherInfoReducer,
	twitter: TwitterFeedReducer
});

export default rootReducer;