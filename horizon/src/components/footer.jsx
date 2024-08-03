import '../footer.css'
import Horizon from '../assets/horizon.png'
import Cusat from '../assets/cusat.png'

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-logo-text'>
                    <div className='footer-logo' id='horizon-logo'>
                        <img src={Horizon} alt="" />
                        <p className='team-name'>TEAM<br /> HORIZON</p>
                    </div>
                    <div className='footer-logo' id='cusat-logo'>
                        <img src={Cusat} alt="" />
                        <p className='college-name'>COCHIN <br />UNIVERSITY OF <br />SCIENCE AND <br />TECHNOLOGY</p>
                    </div>
                </div>
                <hr />
                <div className='footer-bar'>
                    <div className='navigation'>
                        <ul>
                            <li>ABOUT US</li>
                            <li>CONTACT US</li>
                            <li>HELP</li>
                            <li>PRIVACY POLICY</li>
                            <li>DISCLAMER</li>
                        </ul>
                    </div>
                    <div className='footer-copyright'>
                        Copyright © 2024 • Horizon Media Team.
                    </div>
                </div>
            </div>
        </>
    );

}