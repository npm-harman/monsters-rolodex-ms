import './App.css';
import { Component } from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state ={
      monsters: [],
      searchString: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users=> this.setState({monsters: users}));
}

handleChange = (e) =>{
  this.setState({searchString: e.target.value});
}

  render(){
    const {monsters, searchString} = this.state;
    const filteredMonsters= monsters.filter(
      monster => monster.name.toLowerCase().includes(searchString.toLocaleLowerCase()));
    return (
      <div className="App">
        <h1 className='title'>Monsters Rolodex</h1>
        <SearchBox placeholder='Enter keyword' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
