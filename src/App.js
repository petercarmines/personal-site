import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
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

    }
  }

  render() {
    return (
      <Row className="justify-content-md-center">
        <Col sm='5'></Col>
        <Col >
          <div id="simple_arc">

            {nameArr.map((letter, index) => {
              return (
                <span className={`w${index}`} onClick={() => this.setState({ position: !this.state.position })} style={this.state.position ? this.styles.letter : this.styles.clickedLetter}>
                  {letter}
                </span>
              )
            })
            }
          </div>

        </Col>

      </Row>

    )
  }
}

export default App;
