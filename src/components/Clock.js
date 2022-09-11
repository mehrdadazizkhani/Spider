import React, { useState } from 'react';
import styles from './Clock.module.css'

const Clock = () => {

    const [seconsd, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)

    const numbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

    const getTime = () => {
        const date = new Date()
        setSecond(prevSecond => prevSecond = date.getSeconds() * 6)
        setMinute(prevMinute => prevMinute = date.getMinutes() * 6)
        setHour(prevHour => prevHour = date.getHours() * 30)

    }
 
    setInterval(getTime,1000)

    return (
        <div className={styles.container}>
            <div className={styles.clock}>
                {numbers.map((value, index) => <div key={index} className={styles.numbers} style={{transform: `rotate(${360/12*(index+1)}deg)`}}><div style={{transform: `rotate(-${360/12*(index+1)}deg)`}}>{value}</div></div>)}
                <div style={{transform: `rotate(${hour}deg)`}} className={styles.hourHandle}></div>
                <div style={{transform: `rotate(${minute}deg)`}} className={styles.minuteHandle}></div>
                <div style={{transform: `rotate(${seconsd}deg)`}} className={styles.secondHandle}></div>
            </div>
        </div>
    );
};

export default Clock;