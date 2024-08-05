import React from 'react';
import Slider from 'react-slick';
import '../rover.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import roverimage1 from '../assets/rover1.png';
import roverimage2 from '../assets/rover1.png';
import roverimage3 from '../assets/rover1.png';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="custom-next-arrow" onClick={onClick}>
            <i className='bx bx-right-arrow'></i>
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="custom-prev-arrow" onClick={onClick}>
            <i className='bx bx-left-arrow'></i>
        </div>
    );
}

export default function Rover() {
    const settings = {
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
            <div className="rover-carousel-container">
                <Slider {...settings}>
                    <div className="rover-image">
                        <img src={roverimage1} alt="RoverImage1" />
                    </div>
                    <div className="rover-image">
                        <img src={roverimage2} alt="RoverImage2" />
                    </div>
                    <div className="rover-image">
                        <img src={roverimage3} alt="RoverImage3" />
                    </div>
                </Slider>
            </div>
        </>
    );
}
