import '../about.css'
import aboutpic from '../assets/about.jpg'
export default function About(){
    return (
        <>
            <div className="box">
            <div className="about1">
            <div className="atext">ABOUT US</div>
                <div className='horizon-image'>
                    <img src={aboutpic} alt="Horizon Team" />
                    <div className='about-text'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores doloribus laborum minima esse officiis rem animi harum nisi tempora libero praesentium earum odio iure labore voluptatibus, eligendi sed quibusdam?
                            Doloremque voluptates nemo perferendis quae reprehenderit adipisci, aperiam voluptatem vitae rem culpa pariatur amet eveniet at excepturi, tempora fugiat facilis nesciunt ducimus placeat ex minima! Recusandae nulla eaque ullam architecto!
                            Esse minima, cupiditate aliquid molestiae laudantium alias soluta doloribus debitis perspiciatis deserunt blanditiis quis laborum facilis accusantium, doloremque hic vero, obcaecati officia minus molestias dolorum error dignissimos! Eum, ducimus culpa?
                    </div>
                </div>
                <div className='world-achivement'>
                    <div className='world-achivement-box'>
                        <h1>19</h1>
                        <p>World Rank Representing India<br/>European Rover Challenge 23</p>
                    </div>
                    <div className='world-achivement-box middle'>
                        <h1>#1</h1>
                        <p>Only Team from<br/>South India for ERC 23</p>
                    </div>
                    <div className='world-achivement-box'>
                        <h1>#2</h1>
                        <p>Second rank in India<br/>ERC’23 World Finals</p>
                    </div>
                    
                </div>
            </div>      
        </div>
        </>
    );
}