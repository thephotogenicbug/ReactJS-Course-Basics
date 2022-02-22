import React from 'react';
import './App.css';
import FirstComponent from './ClassComponent1';
import SecondComponent from './ClassComponent2';
import FunctionComponent1 from './FunctionComponent1';

function App() {
  return (
    <div className="App">
    <h1>This is Parent Component</h1>
    <FirstComponent />
    <SecondComponent />
    <FunctionComponent1 />
    </div>
  );
}

export default App;
