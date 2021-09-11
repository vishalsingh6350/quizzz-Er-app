// import {createContext} from 'react'
// const GlobalStates=createContext()
// export default GlobalStates
import React,{useState,useEffect,createContext} from 'react'
export const GlobalStates = createContext();

export const StatesProvider = props=>{
   const [data,setData]=useState(null)
   const [score,setScore]=useState(0);
   const [category,setCategory]=useState(()=>null)
   useEffect(()=>{
         // setCategory('ab update ho gya')
         // console.log(category)
         let mp = new Map();
         mp.set('computer', 18)
         mp.set('mathematics', 19)
         mp.set('sports', 21)
         mp.set('random', )
         let URL=`https://opentdb.com/api.php?amount=10&${mp.get(category)?`category=${mp.get(category)}&`:''}type=multiple`
         ;(async (URL)=>{
            // console.log(category)
            let res =await fetch(URL);
            if(!res.ok){
               throw new Error('there is some error...please try again....')
            }
            let jsonFdata=await res.json();
            // console.log(jsonFdata.results)
            if(category){
               setData(jsonFdata.results);
            }
         })(URL).catch(err=>console.log("There is some problem in fetching data from internet....try after sometime or check your internet connection"))
   },[category])
   // console.log(data)
   // console.log('global states provider is re rendered')
   return (
      <GlobalStates.Provider value={[data,setData,score,setScore,category,setCategory]}>
         {props.children}
      </GlobalStates.Provider>
   ) ;
}