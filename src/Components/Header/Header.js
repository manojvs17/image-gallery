import React, { useState, useEffect } from 'react';
import './header.css';
import data from '../Data/Data.json';

const Header = ({openPopup,randomNumber,name}) => {
    

    return (
        <>
            <section className='header navbar-container'>
                <div className='navbar-name'>
                    <img src={data.imageSrc} alt='icon' className='icon-image'></img>
                    <span>Hello, Good {name[randomNumber]} {data.name}!</span>
                </div>
                <div className='navbar-button-group'>
                    <button className="upload-button" onClick={openPopup}>
                        <span className="btn__icon">
                            <svg stroke-linejoin="round" stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                                <path d="M9 15l3 -3l3 3"></path>
                                <path d="M12 12l0 9"></path>
                            </svg>
                        </span>
                        <span className="btn__text">Upload</span>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Header;
