import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(['tomas', 'roma', 'juan', 'pablo'])

  const handClick = () => {
    setUser([...user, 'isma']);
  }

  return (
    <div className="App">
      <header className="App-header">

        <a>
          Learn React
        </a>
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