import './App.css';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TestCarousel from './components/TestCarousel';
import NavigationBar from './components/NavigationBar';
//import BrowserRouter from 'react-router-dom';
//import Routes from 'react-router-dom';
//import Route from 'react-router-dom';
//import Link from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header>
      <NavigationBar />
      </header>
      
        <main>
        
        <Container>
          <Row className ="px-4 my-5"> 
            <Col>
              <TestCarousel />
            </Col>
            
          </Row>
          <Row>
          <Card className="text-center bg-secondary text-white my-5 py-4">
            <Card.Body>Please give me the wacky digits on the back.</Card.Body>
          </Card>
          </Row>
          <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
              variant="top"
              src="https://www.gamersdecide.com/sites/default/files/styles/news_images/public/crafting_gear_intro_9.jpg"
                />
              <Card.Body>
                <Card.Title>50 Easy Steps to Become an Omnicrafter</Card.Title>
                <Card.Text>
                  This guy wasted years of his life for a single stupid looking sword. Now you can too!
                </Card.Text>
                <Button variant="primary">Become Enlightened</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
              variant="top"
              src="https://external-preview.redd.it/ApjXXkN2N_D9OSJlQ64twBp7kslASa9yVJBHmWiBw5A.jpg?auto=webp&s=ad97ad6c9dc1a3f67ee797ea19a3e8fc9b12a967"
                />
              <Card.Body>
                <Card.Title>Tremble, Child of Man</Card.Title>
                <Card.Text>
                  Take the Great Serpent of Ronka Quiz! Are you worthy?
                </Card.Text>
                <Button variant="primary">Take Quiz!</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
              variant="top"
              src="https://cdn.akamai.steamstatic.com/steam/apps/1592500/capsule_616x353.jpg?t=1621111778"
                />
              <Card.Body>
                <Card.Title>don't leave me behind</Card.Title>
                <Card.Text>
                  please. i'm not caught up yet.
                  <Image
                  src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/loudly-crying-face.png"
                  height="20"
                  width="20"
                  ></Image>
                </Card.Text>
                <Button variant="primary">Boost Me</Button>
              </Card.Body>
            </Card>
            </Col>
          </Row>
          
        </Container>
        </main>
        <footer class="py-3 my-3 bg-dark">
          <Container className="px-4">
            <p class="text-center text-white">I don't own a single image on this website</p>
          </Container>
        </footer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      
      
    </div>
  );
}

function Home() {
  return (
    <div>
      <main> 
       <h2>
         
       </h2>
      </main>
    </div>
      
  );
}

function About() {
  return (
    <div>
      <main>
        <h2>
          
        </h2>
      </main>
    </div>
  );
}

export default App;
