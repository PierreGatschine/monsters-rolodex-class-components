import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monster: [
      {
        name: 'Linda'
      },
      {
        name: 'Frank'
      },
     {
        name: 'Jacky'
      },
     {
        name: 'Pedro'
      },
      ]
      
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.monster.map((monster) => {
          return <h1>{monster.name}</h1>
        }
        )}
      </div>
    )
  }
}


export default App;
