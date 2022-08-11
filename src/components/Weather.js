import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css'
import Loading from './Loading.js'
import axios from 'axios';



const Weather = () => {

    const [content, setContent] = useState('')
    const [city, setCity] = useState('tehran')
    const [temp, setTemp] = useState(0)
    const [icon, setIcon] = useState()
    const [cityName, setCityName] = useState()

    const apiKey = "ab939675fd2424a38982c7662d33d8af"
   
    // `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`

    
    const submitHandler = () => {
        let finalCity = content ? content : city 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${finalCity}&appid=${apiKey}&units=metric`)
        .then(response => {
            setTemp(prevTemp => prevTemp = response.data.main.temp)
            setIcon(preIcon => preIcon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${response.data.weather[0]["icon"]}.svg`)
            setCityName(prevCityName => prevCityName = response.data.name)
        })
        setContent('')
    }



    return (
        <div className={styles.container}>
            {/* <Loading/> */}
            <div className={styles.inputGroup}>
                <input className={styles.input} onChange={event => setContent(event.target.value)} type='text' value={content} placeholder='Search for a city'></input>
                <button className={styles.key} onClick={submitHandler}>Submit</button>
            </div>
            <div className={styles.dataContainer}>
                <h2>{cityName}</h2>
                <h3>{`${temp} °c`}</h3>
                <img src={icon}></img>
            </div>
        </div>
    );
    
};

export default Weather;