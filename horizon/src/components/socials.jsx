import '../socials.css'
import LIFTlogo from '../assets/LIFTlogo.svg'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

export default function Socials(){
    return(
        <>
            <div className='socials'>
                <div className='social-box-1'>

                </div>
                <div className='social-details'>
                    <div className='lift-logo'>
                        <img src={LIFTlogo} alt="LIFTlogo" />
                    </div>  
                    <div className='social-detail-text'>
                        <div className='location'>
                            <IoLocationSharp color='white'/>
                            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
                        </div>
                        <div className='phoneandmail'>
                            <div className='phone'>
                                <FaPhoneAlt />
                                <p>(123) 456-7890</p>
                            </div>
                            <div className='mail'>
                                <AiFillPrinter />
                                <p>(123) 456-7890</p>
                            </div>
                            
                        </div>
                        <div className='social-media'>
                                <p>Social Media</p>
                                <div className='social-media-icons'>
                                    <FaFacebookSquare />
                                    <FaXTwitter />
                                    <FaLinkedin />
                                    <FaYoutube />
                                    <FaInstagram />
                                    <IoLogoGoogleplus />
                                    <FaPinterest />
                                    <FaRss />       
                                </div>

                            </div>
                    </div>               
                </div>
                <div className='copyright-claim'>
                    <p>Copyright © 2018 • Lift Media Inc.</p>
                </div>
            </div>
        </>
    );
}