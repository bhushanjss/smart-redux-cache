import PubNubReact from 'pubnub-react';

import action from './action';
import { TWITTER_FEED_ADD } from './types';

export const saveMessageInStore = (msg) => (
	(dispatch) => {
		dispatch({type: 'TWITTER_FEED_ADD', payload: msg});	    	
	    //console.log(msg);
	}
);

