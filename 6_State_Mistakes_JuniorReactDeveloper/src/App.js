import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //State
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    name: "Silapakan",
    email: "silapakan@hotmail.com",
  });

  const [disCount, setDisCount] = useState("");
  const [displayDiscountRate, setDisplayDisCountRate] = useState("");
  const [member, setMember] = useState("");

  const [order1, setOrder1] = useState(0);
  const [order2, setOrder2] = useState(0);
  const [order3, setOrder3] = useState(0);

  const [beforeDiscount, setBeforeDiscount] = useState(0);
  const [afterDiscount, setAfterDiscount] = useState(0);

  const changeUser = () => {
    setUser((prev) => ({ ...prev, name: input }));
  };

  const clearOrder = () => {
    setOrder1(0);
    setOrder2(0);
    setOrder3(0);
    setBeforeDiscount(0);
    setAfterDiscount(0);
  };

  const cheeckMemberInArray = () => {
    const memberArray = ["Karn", "Non", "Nut"];
    for (var i = 0; i < memberArray.length; i++) {
      if (input === memberArray[i]) {
        setMember("user: " + memberArray[i] + " is a member!");
        setDisplayDisCountRate(
          "Discount rate for user: " + memberArray[i] + " 10%"
        );
        break;
      } else {
        setMember("user: " + input + " Not a member!");
        setDisplayDisCountRate("");
      }
    }
  };

  const calcSum = (event) => {
    event.preventDefault();
    console.log(event);
    const PriceA = 50;
    const PriceB = 30;
    const PriceC = 75;

    let Add =
      parseInt(order1) * parseInt(PriceA) +
      parseInt(order2) * parseInt(PriceB) +
      parseInt(order3) * parseInt(PriceC);
    console.log(typeof Add);
    setBeforeDiscount(parseInt(Add));

    // when user is a member

    if (input === "Karn" || input === "Non" || input === "Nut") {
      console.log("🚀 ~ file: App.js:147 ~ calcSum ~ member:", input);
      const disCountRate = 0.1;
      let beforeDiscount =
        parseInt(order1) * parseInt(PriceA) +
        parseInt(order2) * parseInt(PriceB) +
        parseInt(order3) * parseInt(PriceC);
      let afterDiscount = parseInt(beforeDiscount) * disCountRate;
      setAfterDiscount(parseInt(beforeDiscount) - parseInt(afterDiscount));
    } else {
      let beforeDiscount =
        parseInt(order1) * parseInt(PriceA) +
        parseInt(order2) * parseInt(PriceB) +
        parseInt(order3) * parseInt(PriceC);
      setAfterDiscount(parseInt(beforeDiscount));
    }
  };

  return (
    <div className="App">
      <h3 style={{ marginTop: "50px" }}>
        Program Check Discount Rate for User
      </h3>

      <input onChange={(e) => setInput(e.target.value)} placeholder="name" />
      {/* <button onClick={changeUser}>Change username</button> */}
      <button onClick={cheeckMemberInArray}>Check Member</button>

      <div style={{ marginTop: "20px" }}>
        {/* <span style={{textAlign: 'center', color: 'red'}}>Username is: {user.name}</span> */}
        <span style={{ textAlign: "center", color: "red" }}>
          <h1>{member}</h1>
        </span>
        <span style={{ textAlign: "center", color: "red" }}>
          <h2>{displayDiscountRate}</h2>
        </span>
      </div>

      <div>
        <button
          class="button-19"
          role="button"
          onClick={() => setOrder1(order1 + 1)}
        >
          Order A : ( 50$ USD Per Item )
        </button>
        <button
          class="button-19"
          role="button"
          onClick={() => setOrder2(order2 + 1)}
        >
          Order B : ( 30$ USD Per Item )
        </button>
        <button
          class="button-19"
          role="button"
          onClick={() => setOrder3(order3 + 1)}
        >
          Order C : ( 75$ USD Per Item )
        </button>
      </div>

      <h3>
        Number of order items A is : <a style={{ color: "red" }}>{order1}</a>
      </h3>
      <h3>
        Number of order items B is : <a style={{ color: "red" }}>{order2}</a>
      </h3>
      <h3>
        Number of order items C is : <a style={{ color: "red" }}>{order3}</a>
      </h3>

      <div>
        <button class="button-38" onClick={calcSum}>
          Submit for Calculate
        </button>
      </div>

      <h2>
        Before discount : <a style={{ color: "red" }}>{beforeDiscount}$ USD</a>
      </h2>
      <h1 class='totalPrice'>
        Total price : <a style={{ color: "red" }}>{afterDiscount}$ USD</a>
      </h1>

      <div>
        <button class="button-38" onClick={clearOrder}>
          Clear
        </button>
      </div>

      
    </div>
  );
}

export default App;
