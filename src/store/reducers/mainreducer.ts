import { initStore } from "../initStore"
import { combineReducers } from "redux"
import {Actions} from '../actions'
import { IStore, ActionsTypes } from "../../interfaces"
 
const cardsReducer = (state = initStore, action: ActionsTypes): IStore => {
        switch(action.type) {

                case Actions.FETCHING_START:
                return {...state, data: {
                        fetching: true,
                        cards: [],
                        err: false
                }}

                case Actions.FETCHING_DONE:
                return {...state, data: {
                        fetching: false,
                        cards: action.payload || [],
                        err: false
                }}

                case Actions.FETCHING_FAIL:
                return {...state, data: {
                        fetching: false,
                        cards: [],
                        err: action.payload || undefined 
                }}

                default: return state
        }
}
/// если у вас несколько редюсоров то можно их обьединить в combineReducers
export const rootReducers = combineReducers({
        cards: cardsReducer, 
})
 

 