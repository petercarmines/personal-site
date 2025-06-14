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
        test
      </div>
    )
  }
}

export default App;
