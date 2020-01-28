import React from 'react';
import puddles from '../images/pexels-photo-906023.jpeg';

function Main() {
    return (
        <div className="main-wrapper">
            <h1>A brand-new, innovative solution for ingrown toenails.</h1>
            <img className="puddle-image" src={puddles} alt="puddles" />
        </div>
    );
}

export default Main;
