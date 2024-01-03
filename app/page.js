'use client'

import React,{useState} from 'react'
import meme from '@/public/meme.gif'

const Page = () => {

  const [word,setWord]=useState("");
  const [yes,setYes]=useState();
  const [click,setClick]=useState(false);

  const showword=()=>{
    setClick(true);
      if(word.length==7 || word === "7"){
          setYes(true);
      }else{
        setYes(false);
      }
  }

  return (
    <div>
      <h1>Behind Everything, there is a Reason!</h1>
      <div className='thalabox'>
          <input type="text" placeholder='Enter AnyThing' onChange={(e)=>setWord(e.target.value)} value={word}/> <br />
          <button onClick={showword}>Check</button>
          <div className='footer'>
            Made By Suraj
          </div>
      </div>
        { yes ? 
          <div className='memebox'>
            {word}=7  : Thala for a Reason
            <img src="https://media.giphy.com/media/SsDiGCnZRtCCazWec0/giphy.gif" alt="meme" />
          </div> 
        : <div className=''></div>
        }
        { (!yes && click && word) ? 
          <div className='memebox'> 
          This Time Reason is 
          <img src="https://images.cnbctv18.com/wp-content/uploads/2023/04/Gautam-Gambhir-1019x573.jpg?im=FitAndFill,width=1200,height=900" alt="meme" />
        </div> 
        : <div className=''></div>            
        }
    </div>
  )
}

export default Page
