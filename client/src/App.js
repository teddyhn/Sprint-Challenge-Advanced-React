import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import DarkModeSlider from './components/DarkModeSlider';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => this.setState({ data: response.data }))
  }

  render() {
    const { data } = this.state;
    
    return (
      <div className="App">
        <h1>Sprint Challenge: Advanced React</h1>
        <DarkModeSlider />
        <div className="card-list">
          {data.map(item => (
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <p>{item.country}</p>
                  <p>Number of searches: {item.searches}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
