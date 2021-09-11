import {useContext,useState,useRef,useEffect} from 'react'
import {ReactComponent as Pic} from '../assets/images/Timer.svg'
import { Link,useParams } from 'react-router-dom'
import Choice from './Choice'
import {GlobalStates} from './helpers/contexts/GlobalStates'
import { useHistory,Redirect } from 'react-router'
import { motion} from 'framer-motion'

const EachQuestion = () => {
   //some declarations
   const [data,setData,score,setScore,category,setCategory] =useContext(GlobalStates)
   const timer=useRef()
   const time =useRef(30)
   const [clicked, setclicked] = useState('')
   const [showRes, setshowRes] = useState(false)
   const key=useRef(Math.random()*99999)
   const history=useHistory()
   let index=Number(useParams().index)
   let optionNum=0;
   let correctAns=data?data[index>9?0:index].correct_answer:'';
   let answers=data?[...data[index>9?0:index].incorrect_answers,data[index>9?0:index].correct_answer].sort():[]
   
   
   //using 2 useEffect hooks
   useEffect(() => {
      const timerFunction=setInterval(() => {
         if(timer.current){
            if(Number(timer.current.innerText)>0){
               time.current=Number(time.current)-1;
               timer.current.innerText=Number(time.current);
            }
         }
         return()=>{
            if(timer.current){
               clearInterval(timerFunction)
            }
         }
      }, 1000);
   }, [])
// console.log(data)
   useEffect(() => {
      if(timer.current){
         time.current=30;
      }
      setclicked('')
      setshowRes(false)
      key.current=Math.random()*99999
      let timeOutF=setTimeout(()=>submit(),30000)
      return(()=>{
         clearTimeout(timeOutF)
      })
   }, [index])
   

   if(category){
      if(index>9){
         return <Redirect to='/scores'/>
      }
   }
   else{
      return <Redirect to='/choice'/>
   }
   let submit=()=>{
      setshowRes(true);
      if(correctAns.length &&clicked===correctAns){
         // console.log(correctAns)
         // console.log(clicked)
         // console.log("marks are getting updated")
         setScore(prev=>prev+1)
      }
      setTimeout(() => {
         //  index=Number(history.location.pathname[(history.location.pathname).length-1])
          history.replace(`/choice/${category}/${index + 1}`);
      }, 700);
   }
   const questionsAnimate={
      hidden:{
         opacity:0,
         x:'100vw',
      },
      visible:{
         opacity:1,
         x:0,
         transition:{duration:0.5}
      },
      exit:{
         opacity:0,
         x:'-100vw',
         transition:{duration:1}
      }
   }
   return (
      <>
         <motion.div variants={questionsAnimate} animate="visible" initial="hidden" className='questionSectionContainer' onClick={()=>{
            setclicked('')
         }} key={key.current}>
            {data?
               <div className={`questionContainer ${data[index].difficulty}`}>
                  <Pic className='timer' />
                  <span className="timeLeft" ref={timer}>{time.current}</span>
                  <div className='question' dangerouslySetInnerHTML={{__html:(data[index].question)}} />
               </div>   
                  :<div className='skeleton'>
                        <div className="question-skeleton">
                           <div className="text-skeleton"></div>
                           <div className="text-skeleton"></div>
                           <div className="text-skeleton"></div>
                        </div>
                        <div className="optionSkeleton-wrapper">
                           <div className="options-skeleton"></div>
                           <div className="options-skeleton"></div>
                           <div className="options-skeleton"></div>
                           <div className="options-skeleton"></div>
                        </div>
                     </div>}
                  {data?<div className="options">
                  {
                  answers.map((item)=>{
                     return <button disabled={showRes} className= {`eachOption ${showRes?item===correctAns?'correct':'':''} ${clicked===item?`${showRes? `${item===correctAns?'correct':'incorrect'}`:'selected'}`:' '} `} key={optionNum++}  onClick={(e)=>{
                        setclicked(item)
                        // setshowRes(true)
                        e.stopPropagation()
                        e.currentTarget.classList.add('selected')
                     }}  dangerouslySetInnerHTML={{__html:item}}/>
               })}
               </div>:''}
         </motion.div>

         {/* action buttons  */}

         {data?<div className="cta">
               <button className="secondary" onClick={()=>{
                     history.replace(`/scores`)
               }}>Quit</button>
               <button className="primary" onClick={submit}>submit</button>
         </div>:''}
      </>
   )
}

export default EachQuestion
