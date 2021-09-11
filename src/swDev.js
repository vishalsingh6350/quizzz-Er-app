export default function swDev(){
   let swUrl=`${process.env.PUBLIC_URL}/sw.js`
   if('serviceWorker' in navigator){
      navigator.serviceWorker.register(swUrl).then((res)=>{
         // console.log('service worker is registered sucessfully',res)
      }).catch((err)=>console.log('service worker is not registered ',err))
   }else{
      // console.log('service workers are not present in navigator')
   }
}