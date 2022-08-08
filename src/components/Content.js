import React from 'react';
import Alarm from './Alarm';
import Calculator from './Calculator';
import Clock from './Clock';
import styles from './Content.module.css'
import Countdown from './Countdown';
import Weather from './Weather';
import Crypto from './Crypto';

const Content = () => {
    return (
        <div className={styles.container}>
            <Clock/>
            <div>world clock</div>
            <Crypto/>
            <Alarm/>
            <Calculator/>
            <div>todo</div>
            <Weather/>
            <div  className={styles.note}>
                <textarea type={'text'} placeholder='You can write something here'></textarea>
            </div>
            <Countdown/>
        </div>
    );
};

export default Content;