 import { Reducer  } from "./reducer";
 
 
 import {  legacy_createStore , combineReducers , applyMiddleware , compose} from "redux"
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
 credential:Reducer })

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);


export const  store = legacy_createStore(rootReducer, enhancer)
