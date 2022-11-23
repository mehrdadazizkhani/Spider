import React, { useState } from 'react'
import styles from './Countdown.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Countdown = () => {

    const [hour, setHour] = useState("00")
    const [minute, setMinute] = useState("00")
    const [second, setSecond] = useState("00")

    const [button, setButton] = useState(false)
    const [display, setDisplay] = useState('00:00:00')

    const [totalsecond, setTotalsecond] = useState(0)
    const intervalRef = React.useRef(null);
    const audio = new Audio('https://assets.mixkit.co/sfx/download/mixkit-rooster-crowing-in-the-morning-2462.wav')

    const hourUpArrowHandler = () => {
        setHour(prevHour => prevHour < 9 ? `0${+prevHour + 1}` : +prevHour + 1)
        setTotalsecond(prevTotalsecond => prevTotalsecond + 3600)
    }

    const hourDownArrowHandler = () => {
        if (hour > 0) {
            setHour(prevHour => prevHour < 11 ? `0${+prevHour - 1}` : +prevHour - 1)
            setTotalsecond(prevTotalsecond => prevTotalsecond - 3600)
        }
    }

    const minuteUpArrowHandler = () => {
        if (minute < 59) {
            setMinute(prevMinute => prevMinute < 9 ? `0${+prevMinute + 1}` : +prevMinute + 1)
            setTotalsecond(prevTotalsecond => prevTotalsecond + 60)
        }
    }

    const minuteDownArrowHandler = () => {
        if (minute > 0) {
            setMinute(prevMinute => prevMinute < 11 ? `0${+prevMinute - 1}` : +prevMinute - 1)
            setTotalsecond(prevTotalsecond => prevTotalsecond - 60)
        }
    }

    const secondUpArrowHandler = () => {
        if (second < 59) {
            setSecond(prevSecond => prevSecond < 9 ? `0${+prevSecond + 1}` : +prevSecond + 1)
            setTotalsecond(prevTotalsecond => prevTotalsecond + 1)
        }
    }

    const secondDownArrowHandler = () => {
        if (second > 0) {
            setSecond(prevSecond => prevSecond < 11 ? `0${+prevSecond - 1}` : +prevSecond - 1)
            setTotalsecond(prevTotalsecond => prevTotalsecond - 1)
        }
    }

    const startCounter = () => {
        const currentTime = new Date()
        const startSeconds = (currentTime.getHours()*60*60)+(currentTime.getMinutes()*60)+currentTime.getSeconds()
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setButton(true)
            const currentTime = new Date()
            const currentSeconds = (currentTime.getHours()*60*60)+(currentTime.getMinutes()*60)+currentTime.getSeconds()
            const finalTime = (totalsecond+startSeconds)-currentSeconds
            setDisplay(`${Math.floor(finalTime/60/60).toString().padStart(2,'0')}:${Math.floor(finalTime%3600/60).toString().padStart(2,'0')}:${Math.floor(finalTime%60).toString().padStart(2,'0')}`)
            if (finalTime < 1) {
                audio.play()
                setTotalsecond(0)
                clearInterval(intervalRef.current)
                setHour('00')
                setMinute('00')
                setSecond('00')
                setButton(false)
                intervalRef.current = null;
            }
        }, 1000);  
    }

    const stopCounter = () => {
        setHour('00')
        setMinute('00')
        setSecond('00')
        setButton(false)
        setTotalsecond(0)
        clearInterval(intervalRef.current);
        setDisplay('00:00:00')
        intervalRef.current = null;
    }


    return (
        <div className={styles.container}>
            <div className={styles.countdown}>
                    <p className={`${button ? '' : styles.arrowHide} ${styles.display}`}>{display}</p>
                    <div className={`${button ? styles.arrowHide : ''} ${styles.counterArea}`}>
                        <div className={styles.counterCol}>
                            <div onMouseDown={hourUpArrowHandler}><FontAwesomeIcon id={styles['arrow']} icon={solid("caret-up")}/></div>
                            <span className={styles.hour}>{hour}</span>
                            <div className={+hour ? '' : styles.buttonDeactive} onClick={hourDownArrowHandler}><FontAwesomeIcon id={styles['arrow']} icon={solid("caret-down")}/></div>
                        </div>
                        <span className={styles.colon}>:</span>
                        <div className={styles.counterCol}>
                            <div className={+minute == 59 ? styles.buttonDeactive : ''} onClick={minuteUpArrowHandler}><FontAwesomeIcon id={styles['arrow']} icon={solid("caret-up")}/></div>
                            <span className={styles.minute}>{minute}</span>
                            <div className={+minute ? '' : styles.buttonDeactive} onClick={minuteDownArrowHandler}><FontAwesomeIcon id={styles['arrow']} icon={solid("caret-down")}/></div>
                        </div>
                        <span className={styles.colon}>:</span>
                        <div className={styles.counterCol}>
                            <div className={+second == 59 ? styles.buttonDeactive : ''} onClick={secondUpArrowHandler}><FontAwesomeIcon id={styles['arrow']} icon={solid("caret-up")}/></div>
                            <span className={styles.second}>{second}</span>
                            <div className={+second ? '' : styles.buttonDeactive} onClick={secondDownArrowHandler}><FontAwesomeIcon id={styles['arrow']} icon={solid("caret-down")}/></div>
                        </div>
                    </div>
                    <div className={styles.buttonArea}>
                        <div className={button ? styles.buttonHide : ''}><FontAwesomeIcon onClick={startCounter} id={styles['button']} icon={solid("play")}/></div>
                        <div className={button ? '' : styles.buttonHide}><FontAwesomeIcon onClick={stopCounter} id={styles['button']} icon={solid("stop")}/></div>
                    </div>
            </div>
        </div>
    );
};

export default Countdown;