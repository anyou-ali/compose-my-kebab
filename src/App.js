 import React from 'react';
import './App.css';
import Form from './Components/Form';
import Menu from './Components/Menu/Menu';

function App() {
  
  return (
    <div className="App">
      <header>
        <h1 className="header__title">
          COMPOSE MY KEKAB
        </h1>
      </header>
      <section>
        <div className="app__main">
          <Form />
          {/* <Menu /> */}
        </div>
      </section>
    </div>
  );
}

export default App;
