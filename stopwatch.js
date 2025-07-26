import React,{useState,useRef} from "react";
import Reactdom from 'react-dom/client';

function Stopwatch(){
    const[time,settime]=useState(0);
    const storereference=useRef(null);
    const[isstart,setisstart]=useState(false);

    function start(){
        if(!isstart)
        {
        storereference.current=setInterval(()=>{
            settime((newtime)=>newtime+1);
        },1000)
        setisstart(true);
    }
    }
    function stop(){
        if(isstart)
        {
        clearInterval(storereference.current);
        // storereference.current=null;
        setisstart(false);
        }

    }
    function reset(){
        clearInterval(storereference.current);
        storereference.current=null;
        settime(0);
        setisstart(false);

    }


    return(
        <div className="first">
        <h1>Stop Watch</h1>
        <h1 id="timer">{time}</h1>
        <button onClick={start}>Start</button>
         &nbsp;&nbsp;&nbsp;
        <button onClick={stop}>Stop</button>
         &nbsp;&nbsp;&nbsp;
        <button onClick={reset}>Reset</button>
        </div>
    )
}
Reactdom.createRoot(document.getElementById('root')).render(<Stopwatch></Stopwatch>)
