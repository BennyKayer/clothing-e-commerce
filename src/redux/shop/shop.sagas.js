// Listens to every action that we pass to it
import { takeLatest, call, put, all } from "redux-saga/effects";
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

// redux-sage purpose is to run sagas concurrently
export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    // Switch to takeLatest as in these use case we want the most recent collections
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
