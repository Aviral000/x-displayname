import React, { useState } from 'react';

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() !== "" && surname.trim() !== "") {
      setFullName(`Full Name: ${firstName.trim()} ${surname.trim()}`);
    } else {
      setFullName("");
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="surname">Last Name:</label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>{fullName}</p>}
    </div>
  );
}