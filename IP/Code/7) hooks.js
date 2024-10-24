import React, { useState, useEffect } from 'react';
function App() {
const [firstName, setFirstName] = useState('Shreya');
const [lastName, setLastName] = useState('Kamath');
const [fullName, setFullName] = useState('');

useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
    }, [firstName, lastName]);
    return (
    <div>
    <h1>React Hooks</h1>
    <br></br>
    <div>
    <label>First Name: </label>
    <input
    type="text"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    />
    </div>
    <div>
    <label>Last Name: </label>
    <input
    type="text"
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    />
    </div>
    <div>
    <p><b>Full Name:</b> {fullName}</p>
    </div>
    </div>
    );
    }
    export default App;