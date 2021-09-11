import React,{useEffect} from 'react' 
import Button from './helpers/Button'
import pic from '../assets/images/desktop-hero-image.svg'
import { Link } from 'react-router-dom'
const StartScreen = () => {


   useEffect(()=>{
      window.addEventListener('resize',()=>{
         // console.log(window.innerWidth);
      })
   },[])


   return (
      <>
         <div className='startScreen'>
            <div className="hero-text">
               <p>Welcome to Quizzz-Er</p>
               <p className='secondary-text'>
                  <strong>Rules:</strong>
                  <ul>
                     <li>There are 4 categories of questions you can choose from: <strong>Mathematics</strong>,<strong>Science</strong>,<strong>Sports</strong> and <strong>Random</strong></li>
                     <li>You will have 30 seconds to answer a question</li>
                     <li>Difficulty level of a question can be determined by the border color of that questions container</li>
                  </ul>
                  {/* Please give this fun filled quiz app a try....There are 4 category which you can choose as per your preference among <strong>Mathematics</strong>,<strong>Science</strong>,<strong>Sports</strong> and <strong>Random</strong>...There will  be 10 questions for which you will get 30 sec each..... */}

                  </p>
               <Link to='/choice'>
                  <Button text='Start'/>
               </Link>
            </div>
            <div className="hero-img">
               <img src={pic} alt="Hero-img"/>
            </div>
         </div>
         </>
   )
}

export default StartScreen
