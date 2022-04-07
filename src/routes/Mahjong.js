import './Mahjong.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './../components/NavigationBar';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import Man1 from './../images/Man1.png';
import Man2 from './../images/Man2.png';
import Man3 from './../images/Man3.png';

export default function Mahjong() {

    let navigate = useNavigate();

    

    return (

        <div className="Mahjong">

            <header>
            <NavigationBar />
            </header>

            <main>
                <div>
                    
                        
                        <ButtonGroup aria-label="First group">
                            <Button variant="custom">
                                <Image className="Mahjong-Image" src={Man1} />
                            </Button>
                        
                            <Button variant="custom">
                                <img className="Mahjong-Image" src={Man2} />
                            </Button>
                            <Button variant="custom">
                                <Image className="Mahjong-Image" src={Man3} />
                            </Button>
                        </ButtonGroup>
                    
                </div>
                
            </main>

         </div>

        
    );
}