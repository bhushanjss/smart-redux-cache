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
	console.log('state size: ' + (JSON.stringify(state).length/1024) + 'KB');
	switch(action.type) {
		default:
			return state;	
	}
}