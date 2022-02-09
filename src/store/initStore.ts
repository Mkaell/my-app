import { IStore } from '../interfaces'

export const initStore: IStore = {
        data: {
                fetching: false,
                cards: [],
                err: false
        }
}
  