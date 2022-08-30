import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Covid.module.css'
import Loading from './Loading';



const Covid = () => {
    
    const [country, setCountry] = useState()
    const [flags, setFlag] = useState()
    const [population, setPopulation] = useState()
    const [totalCases, setTotalCases] = useState()
    const [totalDeaths, setTotalDeaths] = useState()
    const [totalRecovered, setTotalRecovered] = useState()
    const [todayCases, setTodayCases] = useState()
    const [todayDeaths, setTodayDeaths] = useState()
    const [todayRecovered, setTodayRecovered] = useState()



    const [data, setData] = useState(false)
    const [input, setInput] = useState('')
    const [options, setOptions] = useState({
        method: 'get',
        url: 'https://disease.sh/v3/covid-19/countries/iran?strict=true',
        headers: {}
    })
    
    const submitHandler = () => {
        if (input) {
            options.url = `https://disease.sh/v3/covid-19/countries/${input}?strict=true`
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
        response = response.data
        setCountry(response.countryInfo.iso3)
        setFlag(response.countryInfo.flag)
        setPopulation(response.population)
        setTotalCases(response.cases)
        setTotalDeaths(response.deaths)
        setTotalRecovered(response.recovered)
        setTodayCases(response.todayCases)
        setTodayDeaths(response.todayDeaths)
        setTodayRecovered(response.todayRecovered)
        setData(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputArea}>
                <input onChange={event => setInput(event.target.value)} value={input} type='text' placeholder='country ...'></input>
                <div><i onClick={submitHandler} className="fa-solid fa-virus-covid"></i></div>
            </div>
            {data?
            <div className={styles.dataArea}>
                <div className={styles.countrySec}>
                    <div>
                        <img src={flags}></img>
                        <b>{country}</b>
                    </div>
                    <p>Population: {(population/1000000).toFixed(2)} million</p>
                </div>
                <div className={styles.todaySec}>
                    <div>
                        <div>
                            <i className="fa-solid fa-virus-covid"></i>
                            <span> Today Cases: <b>{todayCases}</b></span>
                        </div>
                    </div>
                    <div className={styles.today}>
                        <div>
                            <i className="fa-solid fa-skull"></i>
                            <span> Today Deaths: <b>{todayDeaths}</b></span>
                        </div>
                        <div>
                            <i className="fa-solid fa-syringe"></i>
                            <span> Today Recovered: <b>{todayRecovered}</b></span>
                        </div>
                    </div>
                </div>
                <div className={styles.totalSec}>
                    <div className={styles.dataRow}>
                        <div>
                            <div>
                                <i className="fa-solid fa-virus-covid"></i>
                                <span> Total Cases:</span>
                            </div>
                            <b>{totalCases}</b>
                        </div>
                        <div className={styles.graphSet}>
                            <b>{((totalCases*100)/population).toFixed(2)}%</b>
                            <div className={styles.graph}>
                                <div style={{width: `${(totalCases*100)/population}%`}}></div>
                                <p>of the population</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dataRow}>
                        <div>
                            <div>
                                <i className="fa-solid fa-skull"></i>
                                <span> Total Deaths:</span>
                            </div>
                            <b>{totalDeaths}</b>
                        </div>
                        <div className={styles.graphSet}>
                            <b>{((totalDeaths*100)/totalCases).toFixed(2)}%</b>
                            <div className={styles.graph}>
                                <div style={{width: `${(totalDeaths*100)/totalCases}%`}}></div>
                                <p>of the cases</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dataRow}>
                        <div>
                            <div>
                                <i className="fa-solid fa-syringe"></i>
                                <span> Total Recovered:</span>
                            </div>
                            <b>{totalRecovered}</b>
                        </div>
                        <div className={styles.graphSet}>
                            <b>{((totalRecovered*100)/totalCases).toFixed(2)}%</b>
                            <div className={styles.graph}>
                                <div style={{width: `${(totalRecovered*100)/totalCases}%`}}></div>
                                <p>of the cases</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:
            <Loading/>
            }
        </div>
    );
};

export default Covid;