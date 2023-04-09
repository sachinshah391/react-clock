import React from 'react';
import "../style/Landing.css";

const Landing = ({currentTime})=>{
    
    return (
        <div className="main-landing">
            <div className='time-container'>{`${currentTime.toLocaleTimeString()}`}</div>
            <div className='date-container'>{`${currentTime.toDateString()}`}</div>
        </div>       
    )
}
export default Landing;