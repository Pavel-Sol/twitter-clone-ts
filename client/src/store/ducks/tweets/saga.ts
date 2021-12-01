import { call, put, takeEvery } from "@redux-saga/core/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { LoadingStatus } from "../../types";
import { setLoadingState, setTweets, TweetsActionsType } from "./actionCreators";
import { ITweetsState } from "./contracts/state";




export function* fetchTweetsRequest() {
   try {
      const tweets: ITweetsState["items"] = yield call(TweetsApi.fetchTweets);
      yield put(setTweets(tweets));
    } catch (error) {
      yield put(setLoadingState(LoadingStatus.ERROR));
    }
} 


export function* tweetsSaga() {
   yield takeEvery(TweetsActionsType.FETCH_TWEETS , fetchTweetsRequest)
} 

