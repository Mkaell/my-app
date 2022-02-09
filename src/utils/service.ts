import axios from "axios"; //  lib to reguest
import {fetchingCards, fetchingCardsDone, fetchingCardsFail} from '../store/actionCreators'
import {store} from '../store/store'

 class Service {
        static _uri: string = 'https://randomuser.me/api/?results=100';
       // static _uri = '/no-user-here';

        static async getUsers(){
                store.dispatch(fetchingCards()) // {type: 'FETCHING'}  STORE  = {DATA: CARDS; {FETCHING: TRUE}}

                try {
                        const {data: {
                                results
                        }} = await axios.get(this._uri)
                        const d = fetchingCardsDone(results)
                        console.log(d)
                        store.dispatch(d) //  тот же диспатч 
            // {type: 'FETCHING_DONE', payload: results}
                } catch (e:any) {

                        store.dispatch( fetchingCardsFail(e.message))
            // {type: 'FETCHING_FAIL', payload: results}

                }
               
        }
}

export {Service}