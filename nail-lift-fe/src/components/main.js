import React from 'react';
import puddles from '../images/pexels-photo-906023.jpeg';
import group1 from '../images/top-left.png';
import group2 from '../images/top-right.png';
import group3 from '../images/bot-left.png';
import group4 from '../images/bot-right.png';

function Main() {
    return (
        <div className="main-wrapper">
            <h1>A brand-new, innovative solution for ingrown toenails.</h1>
            <div className="img-wrapper">
                <img className="puddle-image" src={puddles} alt="puddles" />
            </div>
            <div className="main-text">
                <p>
                    NailLift provides a simple and effective solution for
                    correcting painful ingrown toenails. By gently lifting the
                    edges of the toenail, NailLift relieves ingrown pain and
                    straightens curved nails.
                </p>
                <p>
                    Easily applied at home or by salon professionals, NailLift
                    products are comfortable to wear and easy to remove.
                </p>
                <p>
                    Developed by a japanese physician, NailLift is
                    revolutionizing ingrown toenail care.
                </p>
            </div>
            <div className="group-photo-wrapper">
                <img src={group1} alt="group1" />
                <img src={group2} alt="group2" />

                <img src={group3} alt="group3" />

                <img src={group4} alt="group4" />
            </div>
        </div>
    );
}

export default Main;
