import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    /*this.state = {
      string: 'Hello Francisco'
    }*/
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    return (
      <div className='App'>
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );

    /*return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={e => this.setState({searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );*/

    /*return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={e => {
            this.setState({searchField: e.target.value }, () =>
            console.log(this.state)
            );
            //console.log(this.state);
          }}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );*/
  }

  /*render() {
    return (
      <div classname='App'>
        <CardList name='Yihua'>
        </CardList>
        {
          this.state.monsters.map(monsters => (
            <h1 key={monsters.id}>{monsters.name}</h1>
          ))
        }
      </div>
    )
  }*/

  /*render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({string: 'Hello Mark'})}>
          Change Text
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }*/
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
