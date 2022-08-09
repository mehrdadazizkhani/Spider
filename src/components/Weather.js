import React from 'react';
import stylse from './Weather.module.css'
import Loading from './Loading.js'

const Weather = () => {

    return (
        <div className={stylse.container}>
            <Loading/>
        </div>
    );
    
};

export default Weather;