import React, { useState } from 'react';
import styles from './Countdown.module.css'

const Countdown = () => {

    const [hour, setHour] = useState(0)
    const [minute, seMinute] = useState(0)
    const [second, setSecond] = useState(0)

    const hourUpArrowHandler = () => {
        
    }

    const hourDownArrowHandler = () => {

    }

    const minuteUpArrowHandler = () => {
        
    }

    const minuteDownArrowHandler = () => {

    }

    const secondUpArrowHandler = () => {
        
    }

    const secondDownArrowHandler = () => {

    }


    return (
        <div className={styles.container}>
            <div className={styles.countdown}>
                    <div className={styles.counterArea}>
                        <div className={styles.counterCol}>
                            <div onClick={hourUpArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-up"></i></div>
                            <span className={styles.hour}>00</span>
                            <div onClick={hourDownArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-down"></i></div>
                        </div>
                        <span className={styles.colon}>:</span>
                        <div className={styles.counterCol}>
                            <div onClick={minuteUpArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-up"></i></div>
                            <span className={styles.minute}>00</span>
                            <div onClick={minuteDownArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-down"></i></div>
                        </div>
                        <span className={styles.colon}>:</span>
                        <div className={styles.counterCol}>
                            <div onClick={secondUpArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-up"></i></div>
                            <span className={styles.second}>00</span>
                            <div onClick={secondDownArrowHandler}><i id={styles['arrow']} className="fa-solid fa-caret-down"></i></div>
                        </div>
                    </div>
                    <div className={styles.buttonArea}>
                        <div className={styles.buttonHide}><i id={styles['button']} class="fa-solid fa-play"></i></div>
                        <div className={styles.buttonHide}><i id={styles['button']} class="fa-solid fa-stop"></i></div>
                    </div>
            </div>
        </div>
    );
};

export default Countdown;