import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = props => {

  const [questionsModal, setQuestionsModal] = useState(false)

  const state = {
    questionsModal,
    changeQuestionsModal: setQuestionsModal
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
