import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Covid.module.css'
import Loading from './Loading';

const Covid = () => {
    
    const [population, setPopulation] = useState()
    const [data, setData] = useState(false)
    const [input, setInput] = useState('')
    const [options, setOptions] = useState({
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        params: {country: 'iran'},
        headers: {
          'X-RapidAPI-Key': '2101aa69c4mshac9c85a32530adcp182b4fjsn03470bc5105f',
          'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    })
    
    const submitHandler = () => {
        if (input) {
            options.params.country = input
            setOptions(prevOptions => ({
                ...prevOptions
            }))
        } 
        axios.request(options).then(function (response) {
            dataHandler(response)
        }).catch(function (error) {
            console.error(error);
        });
        setInput('')
    }

    useEffect(() => {
        axios.request(options).then(function (response) {
              dataHandler(response)
        }).catch(function (error) {
              console.error(error);
        });
    },[])

    const dataHandler = (response) => {
        response = response.data.response[0]
        setPopulation(response.population)
        setData(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputArea}>
                <input onChange={event => setInput(event.target.value)} value={input} type='text' placeholder='country ...'></input>
                <button onClick={submitHandler} >Submit</button>
            </div>
            {data?
            <div className={styles.dataArea}>
                <p>{population}</p>
            </div>:
            <Loading/>
            }
        </div>
    );
};

export default Covid;