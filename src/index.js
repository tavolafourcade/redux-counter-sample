import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'

//Actions
const actionIncremented = {
	type: '@counter/incremented'
}
const actionDecremented = {
	type: '@counter/decremented'
}

const reset = {
	type: '@counter/reset'
}

const counterReducer = (state = 0, action) => {
	//State
	//switch típico de un reducer
	switch (action.type) {
		case '@counter/incremented':
			return state + 1;
		case '@counter/decremented':
			return state - 1;
		case '@counter/reset':
			return 0;
      default:
        return state;
	}
}

//Store
const store = createStore(counterReducer)

const App = () => {
  return (
    <div>
      <div>
        {store.getState()}
      </div>
      <button onClick={() => store.dispatch(actionIncremented)}>+</button>
      <button onClick={() => store.dispatch(actionDecremented)}>-</button>
      <button onClick={() => store.dispatch(reset)}>Reset</button>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp()
store.subscribe(renderApp)

