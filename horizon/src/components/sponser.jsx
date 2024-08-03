import '../sponser.css'
import sponser1 from '../assets/sponser1.png'
import sponser2 from '../assets/sponser2.png'
import sponser3 from '../assets/sponser3.png'
import sponser4 from '../assets/sponser4.png'
import sponser5 from '../assets/sponser5.png'
import sponser6 from '../assets/sponser6.png'
import sponser7 from '../assets/sponser7.png'
export default function Sponser(){
    return (
        <>
            <div className='sponser'>
                <div className="atext sponser-heading">SPONSER</div>
                <div className='sponser-list'>
                    <div className='sponser-list-row'>
                        <div className='sponser-box'>
                            <img src={sponser1} alt="" />
                        </div>
                        
                        <div className='sponser-box'>
                            <img src={sponser2} alt="" />
                        </div>
                        
                        <div className='sponser-box'>
                            <img src={sponser3} alt="" />
                        </div>
                        
                        <div className='sponser-box'>
                            <img src={sponser4} alt="" />
                        </div>
                        
                    </div>
                    <div className='sponser-list-row'>
                        <div className='sponser-box'>
                            <img src={sponser5} alt="" />
                        </div>
                        <div className='sponser-box'>
                            <img src={sponser6} alt="" />
                        </div>
                        <div className='sponser-box'>
                            <img src={sponser7} alt="" />
                        </div>
                    </div>
                </div>  
            </div>
        </> 
    );  
}