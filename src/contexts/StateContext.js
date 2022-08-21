import {createContext, useReducer} from 'react';
import stateReducer, {initialState} from '../reducers/stateReducer';

// StateContext is a context object using initialState.
export const StateContext = createContext(initialState);

// {children} (i.e. props.children) is <App/> in index.js.
export const StateProvider = ({children}) => {
	// state is the most recently altered state, and dispatch is used to alter the state.
	// useReducer takes the initialState, and the stateReducer which alters the state.
	const [state, dispatch] = useReducer(stateReducer, initialState);

	// Creates a value that holds initial values and functions within StateProvider.
	const value = {
		token: state.token
	};

	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};
