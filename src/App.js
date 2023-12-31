import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(['tomas', 'roma', 'juan', 'pablo'])
  const [inputValue, setInputValue] = useState('');

  const handClick = () => {
    setUser([...user, (inputValue)]);
  }

  return (
    <div className="App">
      <header className="App-header">

        <a >
          Learn React
        </a>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handClick}> añadir texto </button>
        <ul>
          {user.map((usuario) => (
            <li key={usuario}>{usuario}</li>
          ))}
        </ul>


      </header>
    </div >
  );
}

export default App;
//() => (console.log(user))
// ... (es un operador spread)



