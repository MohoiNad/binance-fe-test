import React from 'react';

type InitialTestProps = {
  success: Boolean
}

export const App:React.FC<InitialTestProps> = () => {
  return (
    <div data-test='app-component' className="App"/>
  );
}


