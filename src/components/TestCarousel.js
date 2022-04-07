import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class TestCarousel extends Component {

    

        setIndex = (selectedIndex) => {
            this.setState({index: selectedIndex})
        }

        setDirection = (direction) => {
            this.setState({direction: direction})
        }

        handleSelect = (selectedIndex, e) => {
            this.setIndex(selectedIndex);
            this.setDirection(e.direction);
        }

        constructor(props) {
            super(props);
            this.state = {
                index: 0,
                setIndex: 0,
                direction: null,
                setDirection: null
            };
        }

        render () {

        const { index, direction } = this.state;
        return (

            <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.gamersdecide.com/sites/default/files/styles/news_images/public/crafting_gear_intro_9.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://external-preview.redd.it/ApjXXkN2N_D9OSJlQ64twBp7kslASa9yVJBHmWiBw5A.jpg?auto=webp&s=ad97ad6c9dc1a3f67ee797ea19a3e8fc9b12a967"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.akamai.steamstatic.com/steam/apps/1592500/capsule_616x353.jpg?t=1621111778"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
        

    }
        
}
export default TestCarousel;