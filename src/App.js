import React from 'react';
import './App.css';
import { Button, Card, Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const nameArr = ['P', 'E', 'T', 'E', 'R', 'C', 'A', 'R', 'M', 'I', 'N', 'E', 'S']

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: false,
    };
  }

  styles = {
    letter: {
      margin: '15px',
      color: 'purple',
      textAlign: 'center',
      position: 'relative',
      right: 0,
    },
    clickedLetter: {
      margin: '15px',
      color: 'purple',
      position: 'relative',
      display: 'inline-block'
    },
    image: {
      width: "40px"
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="12">
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">petercarmines.com</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
    
                </Nav>
              </Navbar.Collapse>
              <div>
                <a href="https://www.linkedin.com/in/peter-carmines/" rel="noopener noreferrer" target="_blank"><img alt="" style={this.styles.image} src={"data:image/png;base64,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"} /></a>
                <a href="https://www.instagram.com/petercarmines/" rel="noopener noreferrer" target="_blank"><img alt="" style={this.styles.image} src={"https://image.similarpng.com/very-thumbnail/2020/06/Instagram-logo-transparent-PNG.png"} /></a>
              </div>
            </Navbar>
          </Col>
        </Row>

        <br />

        <Row>
          <Container>
            <Card>
              <Card.Body style={{margin: "auto"}}>
                <Card.Text>
                  This is the official website of the human being known as Peter McKinley Carmines!
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Row>
      </div>
    )
  }
}

export default App;
