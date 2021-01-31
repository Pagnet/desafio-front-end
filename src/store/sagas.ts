import { all } from "redux-saga/effects";

import { searchPokemonSagas } from "./search-pokemon";

export default function* rootSaga() {
  yield all([searchPokemonSagas()]);
}
