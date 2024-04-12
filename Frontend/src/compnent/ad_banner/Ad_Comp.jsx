import React from 'react';
import Advertisement from './Advertisement';
import Bottom_Ad_Comp from './Bottom_Ad_Comp';
import Top_Ad_Comp from './Top_Ad_Comp';
import Left_Ad_Comp from './Left_Ad_Comp';
import Right_Ad_Comp from './Right_Ad_Comp';

const Ad_Comp = (config) => {

  
  function shuffleArray(arr) {
    const len = arr.length;
    for (let i = len - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const render_comp=()=>{
    
      const arr = config.config.ads;
      
      let shuffledArr = shuffleArray(arr);
      console.log(shuffledArr[1]);
      setInterval(() => {
        shuffledArr = shuffleArray(arr);
        render()
      }, 5000);
  }


const render=(shuffledArr)=>{
  return(
    
   <div className="">
     <Top_Ad_Comp data={shuffledArr[1]} />
    <Bottom_Ad_Comp data={shuffledArr[2]}/>
    <Left_Ad_Comp data={shuffledArr[3]}/>
    <Right_Ad_Comp data={shuffledArr[4]}/>
   </div>
  )
}


  

  
  // Set an interval to shuffle the array every 5 seconds

  
      return (render_comp()

      );
    };
    
export default Ad_Comp;




