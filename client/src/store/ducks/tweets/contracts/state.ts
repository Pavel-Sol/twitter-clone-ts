import { LoadingStatus } from "../../../types";

export interface ITweet {
   _id?: string;
   text: string;
   createdAt: string;
   updatedAt: string;
   user: {
     fullname: string;
     username: string;
     avatarSrc?: string;
   };
   images?: string[];
 }

 export interface ITweetsState {
  items: ITweet[];
  loadingStatus: LoadingStatus;
 }