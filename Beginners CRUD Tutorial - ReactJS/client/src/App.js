
import './App.css';
import {useState} from 'react';

function App() {

  const[name, setName] = useState('');
  const[Age, setAge] = useState(0);
  const[Country, setCountry] = useState('');
  const[Position, setPosition] = useState('');
  const[Wage, setWage] = useState(0);


  const displayinfo = () =>{
    console.log(name + Age + Country + Position + Wage)
  }

  return (
    <div className="App">
        <div class="information">
          <label>Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value) }/>
          <label>Age:</label>
          <input type="number" onChange={(e) => setAge(e.target.value)}/>
          <label>Country:</label>
          <input type="text" onChange={(e) => setCountry(e.target.value)}/>
          <label>Position:</label>
          <input type="text" onChange={(e) => setPosition(e.target.value)}/>
          <label>Wage (year):</label>
          <input type="number" onChange={(e) => setWage(e.target.value)}/>
          <button onClick={displayinfo}>Add Employee</button>
        </div>

    </div>
  );
}

export default App;
