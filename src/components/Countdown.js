import React, { useState } from 'react';
import styles from './Countdown.module.css'

const Countdown = () => {

    const [hour, setHour] = useState("00")
    const [minute, setMinute] = useState("00")
    const [second, setSecond] = useState("00")

    const [button, setButton] = useState(false)

    const [totalsecond, setTotalsecond] = useState(0)
    const intervalRef = React.useRef(null);

    const hourUpArrowHandler = () => {
        setHour(prevHour => +prevHour < 9 ? `0${+prevHour + 1}` : +prevHour + 1)
    }

    const hourDownArrowHandler = () => {
        if (hour > 0) {
            setHour(prevHour => +prevHour < 11 ? `0${+prevHour - 1}` : +prevHour - 1)
        }
    }

    const minuteUpArrowHandler = () => {
        if (minute < 59) {
            setMinute(prevMinute => +prevMinute < 9 ? `0${+prevMinute + 1}` : +prevMinute + 1)
        }
    }

    const minuteDownArrowHandler = () => {
        if (minute > 0) {
            setMinute(prevMinute => +prevMinute < 11 ? `0${+prevMinute - 1}` : +prevMinute - 1)
        }
    }

    const secondUpArrowHandler = () => {
        if (second < 59) {
            setSecond(prevSecond => +prevSecond < 9 ? `0${+prevSecond + 1}` : +prevSecond + 1)
        }
    }

    const secondDownArrowHandler = () => {
        if (second > 0) {
            setSecond(prevSecond => +prevSecond < 11 ? `0${+prevSecond - 1}` : +prevSecond - 1)
        }
    }


    

    const startCounter = () => {
        setButton(prevButton => true)
        let total = (hour*60*60+minute*60+(+second))
        
        setTotalsecond(prevTotalsecond => total)
        console.log(totalsecond)

        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
          setTotalsecond(prevTotalsecond => prevTotalsecond - 1);
          console.log(totalsecond)
        }, 1000);

        // const hour = Math.floor(totalSecond/60/60)
        // const minute = Math.floor(totalSecond/60)
        // const second = Math.floor(totalSecond%60)
        // console.log(minute)
        // console.log(`${hour}:${minute}:${second}`)
        
    }

    const stopCounter = () => {
        setHour(prevHour => '00')
        setMinute(prevMinute => '00')
        setSecond(prevSecond => '00')
        setButton(prevButton => false)
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.countdown}>
                    <div className={styles.counterArea}>
                        <div className={styles.counterCol}>
                            <div onMouseDown={hourUpArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-up"></i></div>
                            <span className={styles.hour}>{hour}</span>
                            <div className={+hour ? '' : styles.buttonDeactive} onClick={hourDownArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-down"></i></div>
                        </div>
                        <span className={styles.colon}>:</span>
                        <div className={styles.counterCol}>
                            <div className={+minute == 59 ? styles.buttonDeactive : ''} onClick={minuteUpArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-up"></i></div>
                            <span className={styles.minute}>{minute}</span>
                            <div className={+minute ? '' : styles.buttonDeactive} onClick={minuteDownArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-down"></i></div>
                        </div>
                        <span className={styles.colon}>:</span>
                        <div className={styles.counterCol}>
                            <div className={+second == 59 ? styles.buttonDeactive : ''} onClick={secondUpArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-up"></i></div>
                            <span className={styles.second}>{second}</span>
                            <div className={+second ? '' : styles.buttonDeactive} onClick={secondDownArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-down"></i></div>
                        </div>
                    </div>
                    <div className={styles.buttonArea}>
                        <div className={button ? styles.buttonHide : ''}><i onClick={startCounter} id={styles['button']} className="fa-solid fa-play"></i></div>
                        <div className={button ? '' : styles.buttonHide}><i onClick={stopCounter} id={styles['button']} className="fa-solid fa-stop"></i></div>
                    </div>
                    {/* <div className={styles.progress}>
                        <div className={styles.lines} style={{transform: `rotate(${255}deg)`}}></div>
                    </div> */}
            </div>
        </div>
    );
};

export default Countdown;