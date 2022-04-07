import './Haurchefant.css';
import NavigationBar from './../components/NavigationBar';

import Image from 'react-bootstrap/Image';

import His_Stare from './../images/His_Stare.webp';
import A_Smile from './../images/A_Smile.jpg';
import His_Face from './../images/His_Face.jpg';
import His_Shield from './../images/His_Shield.jpeg';
import { Component } from 'react';

class Haurchefant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            advice: "",
            oldRand: 7
        };

        this.grantAdvice = this.grantAdvice.bind(this);
    }


    openLink = () => {
        window.open("https://twitter.com/espressolala/status/1103870707702816769")
    }

    grantAdvice() {
        var max = 5;

        do {
            var rand = Math.floor(Math.random() * (max + 1));
        } while (rand === this.state.oldRand);
        
        switch(rand) {
            case 0:
                this.setState({advice: "A smile better suites a hero. :)"});
                break;
            case 1:
                this.setState({advice: "Wherever you go I'll always be with you."});
                break;
            case 2:
                this.setState({advice: "Don't be afraid, your heart lead you this far."});
                break;
            case 3:
                this.setState({advice: "We can't always do the right thing, but we can always try to do the right thing."});
                break;
            case 4:
                this.setState({advice: "I've never once doubted you. Do not doubt yourself."});
                break;
            case 5:
                this.setState({advice: "Take care of your friends and they will always take care of you."});
                break;
            default:
                this.setState({advice: "I'm at a loss for words!"});

        }

        this.setState({oldRand: rand});
    }
    
    render() {
        return (

            <div className="Haurchefant">
    
                <header>
                <NavigationBar />
                </header>

                <body className="Haurchefant-body">

                    <h1 className="text-center" >Seek Advice Weary Travler</h1> 
    
                    {/* <Image src={His_Stare} />*/} 
    
                    <button className="Haurchefant-Button" onClick={this.grantAdvice}>
                    <Image className="Haurchefant-Image" src={His_Face} />
                    </button>

                    <h1 className="text-center">{this.state.advice}</h1>


                </body>
    
                
                    
                
                
    
            </div>
    
            
        );
    }
    
}
export default Haurchefant;