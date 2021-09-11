import {useContext,useEffect} from 'react'
import { GlobalStates } from './helpers/contexts/GlobalStates'
import { Link } from 'react-router-dom'
const Scores = () => {
   const [data,setData,score,setScore,category,setCategory]=useContext(GlobalStates)
   useEffect(() => {
      setCategory(null)
   }, [])
   // console.log(score)
   return (
      <>
      <div className='scores'>
         Your Score : {score?score:'0'}/10 
      <Link to='/choice'>
         <button className='playAgain_btn'>Play Again</button>
      </Link>
      </div>
      </>
   )
}

export default Scores
