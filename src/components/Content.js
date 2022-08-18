import React from 'react';
import Alarm from './Alarm';
import Calculator from './Calculator';
import Clock from './Clock';
import styles from './Content.module.css'
import Countdown from './Countdown';
import Weather from './Weather';
import Crypto from './Crypto';
import Todo from './Todo';
import Note from './Note.js'
import Covid from './Covid';

const Content = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>    
                <Clock/>
                <Covid/>
                <Crypto/>
                <Alarm/>
                <Calculator/>
                <Todo/>
                <Weather/>
                <Note/>
                <Countdown/>
            </div>
        </div>
    );
};

export default Content;