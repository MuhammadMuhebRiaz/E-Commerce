import React, { useState, useEffect } from 'react';
import '../../App.css';
import img1 from "../images/Frame 694.png"
export default function MusicPromoCard(){
    
    const [timeLeft, setTimeLeft] = useState({
        days: 5,
        hours: 23,
        minutes: 59,
        seconds: 35,
    });

    useEffect(() => {
        const countdownDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = countdownDate - now;

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days < 10 ? `0${days}` : days,
                hours: hours < 10 ? `0${hours}` : hours,
                minutes: minutes < 10 ? `0${minutes}` : minutes,
                seconds: seconds < 10 ? `0${seconds}` : seconds,
            });

            if (timeRemaining < 0) {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="Music-proma">
            <div className="promo-text">
                <p className="category">Categories</p>
                <h1>Enhance Your <br/> Music Experience</h1>
                <div className="countdown">
                    <div className="countdown-item hours">
                        <span>{timeLeft.hours}</span>
                        <p>Hours</p>
                    </div>
                    <div className="countdown-item days">
                        <span>{timeLeft.days}</span>
                        <p>Days</p>
                    </div>
                    <div className="countdown-item min">
                        <span>{timeLeft.minutes}</span>
                        <p>Minutes</p>
                    </div>
                    <div className="countdown-item sec">
                        <span>{timeLeft.seconds}</span>
                        <p>Seconds</p>
                    </div>
                </div>
                <button className="btn">Buy Now!</button>
            </div>
            <div className="promo-image">
                <img src={img1} alt="Product" />
            </div>
        </div>
    );
};
