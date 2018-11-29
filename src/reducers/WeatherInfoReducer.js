import { SHOW_WEATHER } from '../actions';

const INITIAL_STATE = {
	currentWeather: {
      'code': '26',
      'date': 'Thu, 29 Nov 2018 10:00 AM CST',
      'temp': '32',
      'text': 'Cloudy'
     },
	show: false
};



export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SHOW_WEATHER:
			return { ...state, show: true };
		default:
			return state;	
	}
}