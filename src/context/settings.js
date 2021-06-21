import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = props => {

  const state = {}

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
