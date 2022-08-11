import React, { useState } from 'react';
import styles from './Note.module.css'

const Note = () => {

    const [content, setContent] = useState('')

    const contentHandler = (event) => {
        setContent(prevContent => prevContent = event.target.value)
        wordCounter()
    }

    const wordCounter = () => {
        let words = content.split(/\s+/g)
        if (words[words.length - 1] == '') {
            words.pop()
        }
        if (words[0] == '') {
            words.shift()
        }
        return words.length
    }


    return (
        <div className={styles.note}>
            <textarea type={'text'} onChange={contentHandler} value={content} placeholder='You can write something here'></textarea>
            <div className={`${styles.infoGroup} ${content ? '' : styles.deactiveContent}`}>
                 <p>Number of words: <span>{wordCounter()}</span></p>
                 <a href={URL.createObjectURL(new Blob([content], {type: 'text/plain'}))} download="filename"><i className="fa-solid fa-file-arrow-down"></i></a>
            </div>
        </div>
    );
};

export default Note;