import {useContext,useEffect} from 'react'
import computer from '../assets/images/computerChoice-btn.svg'
import mathematics from '../assets/images/mathematicsChoice-btn.svg'
import sports from '../assets/images/sportsChoice-btn.svg'
import random from '../assets/images/RandomChoice-btn.svg'
import { Link } from 'react-router-dom'
import {GlobalStates} from './helpers/contexts/GlobalStates'

const Choice = () => {
   const [data,setData,score,setScore,category,setCategory] =useContext(GlobalStates)
   // console.log(category)
   useEffect(() => {
      setCategory(null)
      setData(null)
      setScore(0)
   }, [category])
   return (
   <div className='choice'>
      <div className="content-wrapper">
         <p className='text'>Please select a catergory of Questions from the given set:</p>
         <div className="options">
            <Link to='/choice/computer/1' onClick={()=>setCategory('computer')}>
               <div className="individual-option">
                  <img src={computer} alt="Computer" srcSet="" />
               </div>
            </Link>
            <Link to='/choice/mathematics/1' onClick={()=>setCategory('mathematics')}>
               <div className="individual-option">
                  <img src={mathematics} alt="Mathematics" srcSet="" />
               </div>
            </Link>
            <Link to='/choice/sports/1' onClick={()=>setCategory('sports')}>
               <div className="individual-option">
                  <img src={sports} alt="Sports" srcSet="" />
               </div>
            </Link>
            <Link to='/choice/random/1' onClick={()=>setCategory('random')}>
               <div className="individual-option">
                  <img src={random} alt="Random" srcSet="" />
               </div>
            </Link>
         </div>
       </div>
      </div>
   )
}

export default Choice
