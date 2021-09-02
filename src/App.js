import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import Menu from './Components/Menu';

function App() {
  const [inputText, setInputText] = useState("");
  const [condiments, setCondiments] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>
          COMPOSE MY KEKAB
        </h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} condiments={condiments} setCondiments={setCondiments} />
      <Menu condiments={condiments} setCondiments={setCondiments} />
    </div>
  );
}

export default App;
