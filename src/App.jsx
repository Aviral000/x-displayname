import React, { useState } from 'react'

export default function App() {
const [firstName, setFirstName] = useState("");
const [surname, setSurname] = useState("");
const [display, setDisplay] = useState(false);

const handleDisplay = () => {
    if (display == false && firstName != "" && surname != "") {
        setDisplay(true);
    } else {
        setDisplay(false);
    }
}

  return (
    <div>
      <h1>Full Name Display</h1>
      <form>
        <label htmlFor="first-name">First Name:</label>
        <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
        />
        </form>
        <form>
        <label htmlFor="surname">Last Name:</label>
        <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
        />
        </form>
      <button onClick={handleDisplay}>Submit</button>
      {display && (
        <p>Full Name: {firstName} {surname}</p>
      )}
    </div>
  )
}
