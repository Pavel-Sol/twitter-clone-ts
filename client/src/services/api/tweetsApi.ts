import axios from "axios";
import { ITweetsState } from "../../store/ducks/tweets/contracts/state";

 
 export const TweetsApi = {
   fetchTweets: async (): Promise<ITweetsState["items"]> => {
    // console.log('TweetsApi')
     const {data} = await axios
       .get("http://localhost:3000/dummyData.json");
      //  console.log(data)  
     return data;
   },
 }

