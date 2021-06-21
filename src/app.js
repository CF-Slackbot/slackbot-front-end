import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SettingsContext from './context/settings';

const App = () => {
  return (
    <>
      <SettingsContext>
        <BrowserRouter>
          <h1>hey girl hey!</h1>
        </BrowserRouter>
      </SettingsContext>
    </>
  )
}

export default App;