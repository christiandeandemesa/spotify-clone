// initialState is the initial value(s) in state when the app first renders.
export const initialState = {
	token: null
};

// stateReducer executes a specific function (i.e. type) using the data (i.e. payload) on the current version of state.
const stateReducer = (state, action) => {
	const {type, payload} = action;

	switch (type) {
		default:
			return state;
	}
};

export default stateReducer;
