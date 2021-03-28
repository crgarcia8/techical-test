import React from 'react'
import './Header.css';
import { monthNames, weekdays } from '../../Constants.js';

export const Header = () => {
    const day = new Date().getDate();
    const dayName = weekdays[new Date().getDay()];
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return (
        <div className="wrapper">
            <div>{day}</div>
            <div>{monthNames[month]}</div>
            <div>{year}</div>
            <div>{dayName}</div>
        </div>
    )
}
