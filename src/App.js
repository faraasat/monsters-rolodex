import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// We can also use classes instead of function
// by using class we can get access to state
// first we have to import { Component } from react and then write code
class App extends Component {
  // unlike class components function components donot ave access to life-cycle and state methodss
  constructor() {
    super(); // super(); calls constructor() on Component and give us access to state property
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // When our component is mounted (rendered) on the page first time it calls the block of code in render()
    fetch("https://jsonplaceholder.typicode.com/users") // It makes API request and returns a promise which gives us a respose
      .then((response) => response.json()) // response.json will return response in json format as a promise
      .then((users) => this.setState({ monsters: users }))
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    // Arrow function unlike normal function allows to set this without using bind and it automatially binds where (in which context) the arrow function is defined in first place
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state; // const { } is used for destructuring and by this we are pulling the values from state and putting it in our constants and it is equivalent of const monsters = this.state.monsters
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ); // This filter method creates a new array

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
