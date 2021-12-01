import { Action } from "redux";
import { LoadingStatus } from "../../types";
import { ITweetsState } from "./contracts/state";

export enum TweetsActionsType {
   SET_TWEETS = "tweets/SET_TWEETS",
   FETCH_TWEETS = "tweets/FETCH_TWEETS",
   SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}
// ================================== ИНТЕРФЕЙСЫ ДЛЯ ТИПИЗАЦИИ ACTION-CREATORS ========================
// дополнительно extends Action<TweetsActionsType>
interface IsetTweets extends Action<TweetsActionsType>  {
   type: TweetsActionsType.SET_TWEETS,
   payload: ITweetsState["items"] // можно использовать  ITweet[]
}

interface IsetLoadingState extends Action<TweetsActionsType> {
   type: TweetsActionsType.SET_LOADING_STATE,
   payload: LoadingStatus
}
// ================================== ACTION-CREATORS========================
export const setTweets = (payload: ITweetsState["items"]): IsetTweets => ({
   type: TweetsActionsType.SET_TWEETS,
   payload
})

export const setLoadingState = (payload: LoadingStatus): IsetLoadingState => ({
   type: TweetsActionsType.SET_LOADING_STATE,
   payload
})


export type TweetsActions = IsetTweets