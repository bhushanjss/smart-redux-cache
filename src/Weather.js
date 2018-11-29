import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component {

	render() {
		const { currentWeather } = this.props;
		return (
		<div className='weather'>
			<h3>Weather Data for Chicago</h3>
			<p>{currentWeather.temp}&#x2103;</p>
			<p>{currentWeather.text}</p>
		</div>
		);
	}

}

const mapStatesToProps = state => ({
	show: state.weather.show,
	currentWeather: state.weather.currentWeather
});

export default connect(mapStatesToProps)(Weather);