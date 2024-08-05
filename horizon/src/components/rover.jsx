import React from 'react';
import Slider from 'react-slick';
import '../rover.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import roverimage from '../assets/rover.png';
import roverimage2 from '../assets/rover.png';
import roverimage3 from '../assets/rover.png';

export default function Rover() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="atext">ROVER</div>
            <div className='rover-carousel'>
                <Slider {...settings}>
                    <div className='rover-image'>
                        <img src={roverimage} alt="RoverImage1" />
                    </div>
                    <div className='rover-image'>
                        <img src={roverimage2} alt="RoverImage2" />
                    </div>
                    <div className='rover-image'>
                        <img src={roverimage3} alt="RoverImage3" />
                    </div>
                </Slider>
            </div>
        </>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black' }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black' }}
            onClick={onClick}
        />
    );
}
