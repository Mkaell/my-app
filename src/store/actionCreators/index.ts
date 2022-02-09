import { Actions} from "../actions";

// action creater 
export const fetchingCards = () => ({
        type: Actions.FETCHING_START
})

export const fetchingCardsDone = (data:any) => ({
        type: Actions.FETCHING_DONE,
        payload: data
})

export const fetchingCardsFail = (error?: any) => ({
        type: Actions.FETCHING_FAIL,
        payload: error      
})