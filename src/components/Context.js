import React, { useState, createContext } from 'react'

// Create Context Object
export const Context = createContext()

// Create a provider for components to consume and subscribe to changes
export const CounterContextProvider = (props) => {
	const [context, setContext] = useState({
		season: '2020-21',
		order: [],
		loaded: false,
	})

	return (
		<Context.Provider value={[context, setContext]}>
			{props.children}
		</Context.Provider>
	)
}
