import produce from 'immer'

import { ITweetsState } from './contracts/state'
import { TweetsActionsType, TweetsActions } from './actionCreators';
import { LoadingStatus } from '../../types';

const iniTialState: ITweetsState = {
   items: [],
   loadingStatus: LoadingStatus.NEVER,
}

export const tweetsReducer = produce((draft: any, action: TweetsActions) =>{
   switch (action.type) {
      case TweetsActionsType.SET_TWEETS:
         draft.items = action.payload;
         break;
   
      default:
         break;
   }
}, iniTialState)

// iniTialState возможно не нужен