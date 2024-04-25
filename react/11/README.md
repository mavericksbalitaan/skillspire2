Part 1:

Let’s test your understanding of the useState Hook.


Problem
You are given the following object, defined using the useState Hook:

  const [address, setAddress] = useState({
    phoneNumber: "978-435-1780",
    address:{
      houseNumber: "E-142/10",
      street: "Street 50",
      district: "Garden Town",
      city: "Karachi",
    },
In the code snippet below, write code to update the state. After updating, your object should look like this:

{
  phoneNumber: "978-435-1780",
  address:{
    houseNumber: "R-214",
    street: "Napier Road",
    district: "North Karachi",
    city: "Karachi",
}
import React, { useState } from 'react';

const App = () => {

  const [address, setAddress] = useState({

    phoneNumber: "978-435-1780",

    address:{

      houseNumber: "E-142/10",

      street: "Street 50",

      district: "Garden Town",

      city: "Karachi",

    },

  });

  const changeAddressState = () => {

    // Write your code here

    // Your code ends here

  }

  return (

    <div>

      <button onClick={ changeAddressState }>Update state</button>

      <div>State: {JSON.stringify(address)}</div>

    </div>

  );

};

export default App;

Part 2:

Let’s test your understanding of the useEffect Hook.


Problem
Use a conditional if statement within the useEffect Hook in the code snippet below to ensure that the document title is not null. Remember to comply with Hook’s rules.

import React, { useState, useEffect } from 'react';

const App = () => {

  const [title, setTitle] = useState(0);

  // Write your code here



  useEffect(() => {

    document.title = title;

  }, [title]);

  // Your code ends here

  return (

    <div>

      Condition used inside a Hook

      <button onClick={() => setTitle(title + 1)}>+1</button>

    </div>

  );

};

export default App;
