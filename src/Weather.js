import React, { Component } from 'react';
import { connect } from 'react-redux';
import PubNubReact from 'pubnub-react';

import { saveMessageInStore } from './actions';

class Weather extends Component {

	constructor(props) {
	    super(props);
	    this.pubnub = new PubNubReact({ subscribeKey: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe' });
	    this.pubnub.init(this);
	  }

	componentWillMount(dispatch) {
		this.pubnub.subscribe({ channels: ['pubnub-twitter'], withPresence: true });    
	    this.pubnub.getMessage('pubnub-twitter', (msg) => {
	    	this.props.saveMessageInStore(msg.message);
	    });    
	    this.pubnub.getStatus((st) => {
	      console.log(st);
	      this.pubnub.publish({ message: 'hello world from react', channel: 'pubnub-twitter' });
	    });
	}

	componentWillUnmount() {
	    this.pubnub.unsubscribe({ channels: ['pubnub-twitter'] });
	}

	render() {
		const { currentWeather, twitterMessages } = this.props;
		return (
		<div className='weather'>
			<h4>Twitter Feed</h4>
			<div style={{textAlign: 'left'}}>{twitterMessages.map((item) => 
				(<div style={{padding: 5}}>{item.text}</div>))
			}</div>
			<h3>Weather Data for Chicago</h3>
			<p>{currentWeather.temp}&#x2103;</p>
			<p>{currentWeather.text}</p>
		</div>		
		);
	}
}

const mapStatesToProps = state => ({
	show: state.weather.show,
	currentWeather: state.weather.currentWeather,
	twitterMessages: state.twitter.twitterMessages
});

export default connect(mapStatesToProps, {saveMessageInStore})(Weather);
