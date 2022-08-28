import {useState} from 'react'
import './App.css';


// useState Functional Update -------- Why useState doesn't update immediately?

// function App() {

// const [number, setNumber] = useState(0)


// const increase = () =>{
//   setNumber(number + 1)
// }

// const increaseAsync = () =>{
//   setTimeout(() => {
//     setNumber((currentNumber) => currentNumber + 1)
//   }, 2000)
// }

//   return (
//       <div className="App">
//         <button onClick={increase}>Increase</button>
//         <button onClick={increaseAsync}>Increase Async</button>
//         <h1>{number}</h1>
//       </div>
//   )
// }





//React useState white screen problem fixed ?
function App() {

  //State
    const [input, setInput] = useState("")
    const [user, setUser] = useState({
      name: "Silapakan",
      email: "silapakan@hotmail.com",
      images:[
        'kan.png','kon.png'
      ]
    })



    const changeUser = () => {
        setUser(prev=>({...prev, name: input}))
    }

    return (
        <div className="App" >
          <h2>User:</h2>

          
          <input onChange={e=>setInput(e.target.value)} placeholder="name" />
          <button onClick={changeUser}>Change username</button>


          <span style={{display: 'flex'}}>Username is: {user.name}</span>
        </div>
    )
  }
  

export default App;
