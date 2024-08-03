import '../rover.css'
import roverimage from '../assets/rover.png'
export default function Rover(){
    return (
        <>
            <div className="atext">ROVER</div>
            <div className='rover-image'>
                <img src={roverimage} alt="RoverImage" />
                <div className='linebox'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                </div>
            </div>
        </>
    );
}