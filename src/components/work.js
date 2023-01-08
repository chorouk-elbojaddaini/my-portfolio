import '../styles/work.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projet from '../assets/projet.png';
import projet2 from '../assets/projet2.png';
import projet3 from '../assets/projet3.jpg';
function Work() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='work-section' id='work'>
            <span className='work-title'>Work</span>
            <Carousel responsive={responsive}>
                <div className='card one'>
                    <img src={projet2} alt="projectImg" className='project-one' />
                    <div className='project-details'>
                        <span>Project Shifae</span>
                        <div className="details">Projet de reservation des rendez vous , avec un espace medecin et un espace patient dans lequel il peut avoir son dossier medical
                        </div>
                        <a href="#"><button className='btn-code'>Code</button></a>
                    </div>
                </div>
                <div className='card one'>
                    <img src={projet} alt="projectImg" className='project-one' />
                    <div className='project-details'>
                        <span>Project Shifae</span>
                        <div className="details">Projet de reservation des rendez vous , avec un espace medecin et un espace patient dans lequel il peut avoir son dossier medical
                        </div>
                        <a href="#"><button className='btn-code'>Code</button></a>
                    </div>
                </div>
                <div className='card one'>
                    <img src={projet3} alt="projectImg" className='project-one' />
                    <div className='project-details'>
                        <span>Project Shifae</span>
                        <div className="details">Projet de reservation des rendez vous , avec un espace medecin et un espace patient dans lequel il peut avoir son dossier medical
                        </div>
                        <a href="#"><button className='btn-code'>Code</button></a>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Work
