import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {Service} from './utils/service'
import { fetchingCards, fetchingCardsDone, fetchingCardsFail } from './store/actionCreators';
import axios from 'axios';

function App() {
  const dispatch = useDispatch()
  const fetching: any = useSelector((state:any) => state.cards.data.fetching) // true
  const err: any = useSelector((state:any) => state.cards.data.err)
  const cards: any  = useSelector((state:any) => state.cards.data.cards)

  useEffect(() => {
     Service.getUsers() 
  //   dispatch(fetchingCards())
  //   const f = async () => {
  //     try {
  //       const {data: {
  //               results
  //       }} = await axios.get('https://randomuser.me/api/?results=100')
  
  //       dispatch( fetchingCardsDone(results)) //  тот же диспатч 
  // // {type: 'FETCHING_DONE', payload: results}
  //     } catch (e:any) {
  //           console.log(e.error)
  //           dispatch( fetchingCardsFail(e.message))
  //     // {type: 'FETCHING_FAIL', payload: results}
      
  //     }
  //   }
  //   f()
  }, [])
   
  return (
    <div className="App">
      
        { 
          !err ?
           fetching 
          ? (<div>Loading ... </div>)
          :  (<div> {
              JSON.stringify(cards)
            } </div>)
          : err
        }
    </div>
  );
}

export default App;
