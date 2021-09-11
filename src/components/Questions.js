import React from 'react'
import { useEffect,useState,useRef } from 'react'
import EachQuestion from './EachQuestion'
const Questions = ({category}) => {
   return (
            // <EachQuestion question={data.results[index].question} answers={options.current} correct={data.results[index].correct_answer} category={category}/>
               <EachQuestion/>
   )
}
export default Questions
