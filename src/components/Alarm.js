import React, { useState } from 'react';
import styles from './Alarm.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Countdown = () => {

    const [hour, setHour] = useState("00")
    const [minute, setMinute] = useState("00")
    
    const [totalminute, setTotalminute] = useState(0)

    const hourUpArrowHandler = () => {
        setHour(prevHour => prevHour < 9 ? `0${+prevHour + 1}` : +prevHour + 1)
        setTotalminute(prevTotalminute => prevTotalminute + 3600)
    }

    const hourDownArrowHandler = () => {
        if (hour > 0) {
            setHour(prevHour => prevHour < 11 ? `0${+prevHour - 1}` : +prevHour - 1)
            setTotalminute(prevTotalminute => prevTotalminute - 3600)
        }
    }

    const minuteUpArrowHandler = () => {
        if (minute < 59) {
            setMinute(prevMinute => prevMinute < 9 ? `0${+prevMinute + 1}` : +prevMinute + 1)
            setTotalminute(prevTotalminute => prevTotalminute + 60)
        }
    }

    const minuteDownArrowHandler = () => {
        if (minute > 0) {
            setMinute(prevMinute => prevMinute < 11 ? `0${+prevMinute - 1}` : +prevMinute - 1)
            setTotalminute(prevTotalminute => prevTotalminute - 60)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.countdown}>
                    <div className={styles.counterArea}>
                        <div className={styles.counterCol}>
                            <div className={styles.arrowHide}><FontAwesomeIcon onClick={hourUpArrowHandler} id={styles['arrow']} icon={solid("caret-up")}/></div>
                            <span className={styles.hour}>{hour}</span>
                            <div className={styles.arrowHide}><FontAwesomeIcon onClick={hourDownArrowHandler} id={styles['arrow']} icon={solid("caret-down")}/></div>
                        </div>
                        <span className={styles.colon}>:</span>
                        <div className={styles.counterCol}>
                            <div className={styles.arrowHide}><FontAwesomeIcon onClick={minuteUpArrowHandler} id={styles['arrow']} icon={solid("caret-up")}/></div>
                            <span className={styles.minute}>{minute}</span>
                            <div className={styles.arrowHide}><FontAwesomeIcon onClick={minuteDownArrowHandler} id={styles['arrow']} icon={solid("caret-down")}/></div>
                        </div>
                    </div>
                    <div className={styles.buttonArea}>
                        <div className={styles.buttonHide}><FontAwesomeIcon id={styles['button']} icon={solid("bell")}/></div>
                        <div className={styles.buttonHide}><FontAwesomeIcon id={styles['button']} icon={solid("bell-slash")}/></div>
                    </div>
            </div>
        </div>
    );
};

export default Countdown;