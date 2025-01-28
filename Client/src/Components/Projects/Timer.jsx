import React from "react";
import './ProjectsStyle/Timer.css'

const Timer = () => {
   return (
      <>
         <div className="timer">
            <div className="clock">
               <div className="clock_center">
                  <div className="hour"></div>
                  <div className="minute"></div>
                  <div className="seconds"></div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Timer;