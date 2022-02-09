import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducers } from './reducers/mainreducer'
import thunk from 'redux-thunk'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]

const store = createStore(rootReducers, composeEnhancers(
        applyMiddleware(...middleware)
) ) // thunk позволяет работать с асинк операциями в акшенах
//applyMiddleware позволяет добавить миделвейры к стору 
// https://www.digitalocean.com/community/tutorials/redux-redux-thunk-ru
export {store}