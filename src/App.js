import React, { Component } from 'react'
import './App.css';
import Form from './Components/Form';
import Menu from './Components/Menu';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        userInput : "",
        condiments : []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addCondiment = this.addCondiment.bind(this);
    this.deleteCondiment = this.deleteCondiment.bind(this);
}

handleChange(e) {
    this.setState({
        userInput : e.target.value
    });
}

addCondiment(e) {
    e.preventDefault();
  
    this.setState({
    condiments : [...this.state.condiments, this.state.userInput],
    userInput : ""
    })
}

deleteCondiment(index) {
    const deleteItem = [...this.state.condiments];
    deleteItem.splice(index, 1);

    this.setState({
      condiments : deleteItem
    });
}


  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header__title">
            COMPOSE MY KEKAB
          </h1>
        </header>
        <section>
          <div className="app__main">
            <Form handleChange={this.handleChange} addCondiment={this.addCondiment} userInput={this.state.userInput} />
            <Menu condiments={this.state.condiments} deleteCondiment={this.deleteCondiment} />
          </div>
        </section>
      </div>
    );
  }
}


// function App() {
  
//   return (
//     <div className="App">
//       <header>
//         <h1 className="header__title">
//           COMPOSE MY KEKAB
//         </h1>
//       </header>
//       <section>
//         <div className="app__main">
//           <Form />
//           <Menu />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;
