import './Stopwatch.css';
import Card from "../Card/Card";
import Button from '../Button/Button';
// import { useState } from 'react';
import React, { useState, useEffect } from 'react';



function Stopwatch(){
    
        const[time,setTime]=useState({hr:0,min:0,sec:0,milli:0});
        const[status,setstatus]=useState();

        let updHr=time.hr;
        let updMin=time.min;
        let updSec=time.sec;
        let updMilli=time.milli;

        const start=()=>{
            Myfun();
            setstatus(setInterval(Myfun,10))
        }
        const stop=()=>{
          
            clearInterval(status)
        }
        const reset=()=>{
       
            clearInterval(status);
            setTime({hr:0,min:0,sec:0,milli:0})
        }

        const Myfun=()=>{
            if(updMilli===100){
                updMilli=0;
                updSec++;
                
            }
            if(updSec===60){
                updSec=0;
                updMin++
            }
            if(updMin===60){
                updMin=0;
                updHr++
            }
            updMilli++;
            return setTime({hr:updHr,min:updMin,sec:updSec,milli:updMilli})
        }
        const pad = (n) => String(n).padStart(2, "0");
    return(
       
        <Card>
           <div id='clock'>
           <h3>STOP CLOCK IN JAVASCRIPT</h3>
           <p>{pad(time.hr)+" : "+pad(time.min)+" : "+pad(time.sec)+" : "+pad(time.milli)}</p>
      
      
            <button class='a'onClick={()=>start()}>START</button>
            <button  class='b'onClick={()=>stop()}>STOP</button>
            <button class='c'onClick={()=>reset()}>RESET</button>
           </div>
        </Card>

     
    )
}
export default Stopwatch;