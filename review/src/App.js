import React, { useReducer } from "react";

import reducer from './reducers/calcReducer';
import actions from './actions/calcActions'

import "./styles.css";

export default function App() {

  const initialState = {
    currentValue: 0,
    memory: 0,
  }

  const [ state, dispatch ] = useReducer(reducer, initialState)

  // We communicate with the reducer in this way:
  // dispatch(action)

  const handleAdd = () => {
    dispatch(actions.addAction(2))
  }

  const handleSubtract = () => {
    dispatch(actions.subtractAction(5))
  }

  const handleClear = () => {
    dispatch(actions.clearAction())
  }

  console.log(state)

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" onClick={handleAdd} className="btn">
        + 2
      </button>
      <button type="button" onClick={handleSubtract} className="btn">
        - 5
      </button>
      <button type="button" onClick={handleClear} className="btn">
        CE
      </button>
    </div>
  );
}
