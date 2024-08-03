import '../achievement.css'
import achivement1 from '../assets/achivement-1.png'
import achivement2 from '../assets/achivement-2.png'
import achivement3 from '../assets/achivement-3.png'
import arrowSVG from '../assets/arrow-right-up-line.svg' // Assuming the arrow is an SVG

export default function Achievement() {
    return (
        <>
            <div className="atext">ACHIEVEMENTS</div>
            <div className='achiv-container'>
                <div className='achivement-1'>
                    <div className='achivement-frame'>
                        <img className='achivement-img' src={achivement1} alt="achivement-1" />
                        <div className="achievement-svg-container">
                            <div className="achievement-svg-background">
                                <img src={arrowSVG} alt="arrow" className="achievement-svg" />
                            </div>
                        </div>
                    </div>
                    <div className='achiv-date'>
                        12-10-24
                    </div>
                    <div className='achiv-desc'>
                        Qualified for the European <br />Rover Challenge 23 with <br />World 21 st rank
                    </div>
                </div>
                <div className='achivement-1'>
                    <div className='achivement-frame'>
                        <img className='achivement-img' src={achivement2} alt="achivement-2" />
                        <div className="achievement-svg-container">
                            <div className="achievement-svg-background">
                                <img src={arrowSVG} alt="arrow" className="achievement-svg" />
                            </div>
                        </div>
                    </div>
                    <div className='achiv-date'>
                        12-10-24
                    </div>
                    <div className='achiv-desc'>
                        Qualified for the European <br />Rover Challenge 23 with <br />World 21 st rank
                    </div>
                </div>
                <div className='achivement-1'>
                    <div className='achivement-frame'>
                        <img className='achivement-img' src={achivement3} />
                        <div className="achievement-svg-container">
                            <div className="achievement-svg-background">
                                <img src={arrowSVG} alt="arrow" className="achievement-svg" />
                            </div>
                        </div>
                    </div>
                    <div className='achiv-date'>
                        12-10-24
                    </div>
                    <div className='achiv-desc'>
                        Qualified for the European <br />Rover Challenge 23 with <br />World 21 st rank
                    </div>
                </div>
            </div>
        </>
    );
}
