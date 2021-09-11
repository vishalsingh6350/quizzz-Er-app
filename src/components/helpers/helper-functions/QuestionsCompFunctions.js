import { useContext } from "react";
import GlobalStates from '../contexts/GlobalStates'
const QuestionsCompFunctions = () => {
   const createURL=(category)=>{
      let mp = new Map();
      mp.set('computer', 18)
      mp.set('mathematics', 19)
      mp.set('sports', 21)
      mp.set('random', )
      let URL=`https://opentdb.com/api.php?amount=10&${mp.get(category)?`category=${mp.get(category)}&`:''}type=multiple`

      return URL;
   }
   const fetchData=async (URL)=>{
      let data =await fetch(URL);
      if(!data.ok){
         throw new Error('there is some error...please try again....')
      }
      let jsonFdata=await data.json();
      return jsonFdata;
   }
   return {createURL,fetchData}
}

export default QuestionsCompFunctions
