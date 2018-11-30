const INITIAL_STATE = {
	twitterMessages: []
};


export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case 'TWITTER_FEED_ADD':
			return { ...state, twitterMessages: [...state.twitterMessages, action.payload ] }
		default:
			return state;
	}
}