import React, { useState } from 'react';
import styles from './Note.module.css'

const Note = () => {

    const [content, setContent] = useState('')

    const contenHandler = (event) => {
        setContent(prevContent => prevContent = event.target.value)
        wordCounter()
    }

    const wordCounter = () => {
        'salam'
    }

    return (
        <div className={styles.note}>
            <textarea type={'text'} onChange={contenHandler} value={content} placeholder='You can write something here'></textarea>
            <p className={`${styles.info} ${content ? '' : styles.deactiveContent}`}>words: <span>{wordCounter}</span></p>
        </div>
    );
};

export default Note;