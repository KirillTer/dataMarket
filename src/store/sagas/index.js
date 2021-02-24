import { put, call, takeLatest, all } from 'redux-saga/effects';

import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes'
import { searchApi } from '../../api'

// function* callFetchMain() {
//     try {
//         const result = yield call(fetchMainApi)  
//         yield put({ type: LOAD_MAIN_SUCCESS, payload: result });
//     } catch(error) {
//         yield put({ type: LOAD_MAIN_FAILURE, payload: error });
//     }
// }

function* callSearch({payload}) {
    console.log('callSearch', payload)
    try {
        const result = yield call(() => searchApi(payload))
        yield put({ type: SEARCH_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: SEARCH_FAILURE, payload: error });
    }
}

// function* callFetchGames({payload}) {
//     try {
//         const result = yield call(() => fetchGamesApi(payload))
//         yield put({ type: LOAD_GAMES_SUCCESS, payload: result });
//     } catch(error) {
//         yield put({ type: LOAD_GAMES_FAILURE, payload: error });
//     }
// }

// function* mainWatcher() {
//     yield takeLatest(LOAD_MAIN_START, callFetchMain)
// }

function* searchWatcher() {
    yield takeLatest(SEARCH_START, action => callSearch(action))
}

// function* gamesWatcher() {
//     yield takeLatest(LOAD_GAMES_START, action => callFetchGames(action))
// }

export default function* rootSaga() {
    yield all([
        // mainWatcher(),
        searchWatcher(),
        // gamesWatcher()
    ]);
}