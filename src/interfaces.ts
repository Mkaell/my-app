import { Actions } from "./store/actions";

interface IStore {
        data:  ICards
}

interface ICards  {
        fetching: boolean,
        cards: [] | {}[],
        err: any
}

interface IFetch {
        type: Actions.FETCHING_START, 
}

interface IFetchDone {
        type: Actions.FETCHING_DONE,
        payload?: [] | {}[]
}

interface IFetchFail {
        type: Actions.FETCHING_FAIL,
        payload?: string | undefined
} 

type ActionsTypes =  IFetch | IFetchDone | IFetchFail
 
export type {IStore, ICards, ActionsTypes}
