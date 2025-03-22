import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        
        if (dataFetched) {
            animate();
            
        }
    }, [dataFetched]);

    async function fetchData() {
        
            const response = await axios.get('/header');
            console.log(response)
            setData(response.data);
            setDataFetched(true); 
        
    }

    function animate() {
        const tl = gsap.timeline()
        tl.from('.left h1', {
            opacity:0,
            y:-10,
            duration: 1,
        });
        tl.from('.left p',{
            opacity:0,
            duration:1
        })
    }

    function handleIconClick() {
        setCurrentIndex((currentIndex + 1) % data.length);
    }

    return (
        <div>
            <div>
                <Link to="/login" >Login</Link>
            </div>
            {data.length > 0 && (
                <div className='scroll'>
                    <div className='left'>
                        <h1>{data[currentIndex].title}</h1>
                        <p>{data[currentIndex].desc}</p>
                    </div>
                    <div className='right'>
                        <FontAwesomeIcon icon={faChevronRight} className='arrow' onClick={handleIconClick} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
