import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css'
import Loading from './Loading.js'
import axios from 'axios';



const Weather = () => {
    const [data, setData] = useState(false)
    const [content, setContent] = useState('')
    const [city, setCity] = useState('tehran')
    const [cityName, setCityName] = useState()
    const [country, setCountry] = useState()
    const [flag, setFlag] = useState()
    const [temp, setTemp] = useState()
    const [icon, setIcon] = useState()
    const [descirption, setDescription] = useState()

    const apiKey = "ab939675fd2424a38982c7662d33d8af"
   
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            setHandler(response)
        })
    }, [])
    
    const submitHandler = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${content}&appid=${apiKey}&units=metric`)
        .then(response => {
            setHandler(response)
        })
        setContent('')
    }

    const setHandler = (response) => {
        setCityName(prevCityName => prevCityName = response.data.name)
        setCountry(prevCountry => prevCountry = response.data.sys.country)
        setFlag(prevFlag => prevFlag = `https://openweathermap.org/images/flags/${response.data.sys.country.toLowerCase()}.png`)
        setTemp(prevTemp => prevTemp = response.data.main.temp)
        setIcon(preIcon => preIcon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        setDescription(prevDescription => prevDescription = response.data.weather[0].description)
        setData(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputGroup}>
                <input className={styles.input} onChange={event => setContent(event.target.value)} type='text' value={content} placeholder='City ...'></input>
                <button className={styles.key} onClick={submitHandler}>Submit</button>
            </div>
                {
                data ?
                    <div className={styles.dataContainer}>
                    <h2>{cityName} <span>{country}</span> <img src={flag}></img></h2>
                    <h3>{`${temp} °c`}</h3>
                    <img src={icon}></img>
                    <p>{descirption}</p>
                </div>
                 :
                 <Loading/>
                }
        </div>
    );
    
};

export default Weather;