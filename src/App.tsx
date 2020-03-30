import  React, {useEffect} from 'react';
import {useWsConnection} from './hooks/useWsConnection'
import {useFetchCurrency} from './hooks/useFetchCurrency'
import {Table} from './components/table'
export const App:React.FC = () => {

    const {isError:error, isLoading:loading, data} = useFetchCurrency()
    //const data = useWsConnection()

    const table = () => {
        if(error){
            return <h4>Error during fetching data from server!</h4>
        }
        else if(loading) {
            return <h4>Loading...</h4>
        }
         else {

             //@ts-ignore
             return <div data={data} />
        }
    }
  return (
    <div data-test='app-component'>
      Market
      <hr/>
        {table()}
    </div>
  );
}


