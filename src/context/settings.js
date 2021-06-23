import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = props => {

  const [showModal, setShowModal] = useState(false);

  const state = {
    showModal,
    changeModalDisplay: setShowModal
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
