import React, { useState } from 'react';
import styles from './Alarm.module.css'

const Countdown = () => {

    const [hour, setHour] = useState(0)
    const [minute, seMinute] = useState(0)
    const [second, setSecond] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.countdown}>
                    <div className={styles.counterArea}>
                        <div className={styles.counterCol}>
                            <div className={styles.arrowHide}><i id={styles['arrow']} className="fa-solid fa-caret-up"></i></div>
                            <span className={styles.hour}>00</span>
                            <div className={styles.arrowHide}><i id={styles['arrow']} className="fa-solid fa-caret-down"></i></div>
                        </div>
                        <span className={styles.colon}>:</span>
                        <div className={styles.counterCol}>
                            <div className={styles.arrowHide}><i id={styles['arrow']} className="fa-solid fa-caret-up"></i></div>
                            <span className={styles.minute}>00</span>
                            <div className={styles.arrowHide}><i id={styles['arrow']} className="fa-solid fa-caret-down"></i></div>
                        </div>
                    </div>
                    <div className={styles.buttonArea}>
                        <div className={styles.buttonHide}><i id={styles['button']} className="fa-solid fa-bell"></i></div>
                        <div className={styles.buttonHide}><i id={styles['button']} className="fa-solid fa-bell-slash"></i></div>
                    </div>
            </div>
        </div>
    );
};

export default Countdown;