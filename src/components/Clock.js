import React, { useState } from 'react';
import styles from './Clock.module.css'

const Clock = () => {

    const [seconsd, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)

    const getTime = () => {
        const date = new Date()
        setSecond(prevSecond => date.getSeconds() * 6)
        setMinute(prevMinute => date.getMinutes() * 6)
        setHour(prevHour => date.getHours() * 6)
    }
    
    setInterval(getTime,1000)

    const clockNumbers = () => {
        for(let i = 0; i < 12; i++) {
            clockNumbers.push(
                <h1>salam</h1>
            )
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.clock}>
                <div style={{transform: `rotate(${hour}deg)`}} className={styles.hourHandle}></div>
                <div style={{transform: `rotate(${minute}deg)`}} className={styles.minuteHandle}></div>
                <div style={{transform: `rotate(${seconsd}deg)`}} className={styles.secondHandle}></div>
            </div>
        </div>
    );
};

export default Clock;