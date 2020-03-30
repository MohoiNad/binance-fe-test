import  React, {useEffect} from 'react';
import {useWsConnection} from './hooks/useWsConnection'

export const App:React.FC = () => {
    useWsConnection()
  return (
    <div data-test='app-component'>
      Market
      <hr/>

    </div>
  );
}


