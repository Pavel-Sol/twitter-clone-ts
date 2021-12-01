import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ITweetsState } from './ducks/tweets/contracts/state'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'



const sagaMiddleware = createSagaMiddleware()

export interface RootState {
   tweets: ITweetsState,
 }

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)