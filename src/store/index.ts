import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import searchPokemon from "./search-pokemon";
import pokedex from "./pokedex";

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || null;

const rootReducer = combineReducers({
  searchPokemon,
  pokedex,
});

export default createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeEnhancers())
);

sagaMiddleware.run(rootSaga);
