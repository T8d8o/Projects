import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Profile = () => {
 const [ username, setUsername ] = useState("h@xxorsMatey");
 const [ description, setDescription ] = useState("I'm just a simple programmer!");
 const [ status, setStatus ] = useState("Busy");
 const [ error, setError ] = useState("none");
 useEffect(()=>{
  let err = null;
  if (username.length < 5 || username.length > 25) err="Your username must be between 5 and 25 characters long.";
  setError(err);
 },[username]);
 return (
  <div>
   <h1>Update Profile</h1>
   <div className="form">
    <div className="form_row">
     <label for="username">Your username:</label>
     <input 
      id="username"
      type="text"
      value={username}
      onChange={(e)=> { setUsername(e.target.value) }}
     />
     {
      error != null && 
      <p className="error">{error}</p>
     }
    </div>
    <div className="form_row">
     <label for="description">Describe yourself:</label>
     <textarea 
      id="description"
      rows="5"
      value={description}
      onChange={(e)=>{ setDescription(e.target.value) }}
     />
    </div>
    <div className="form_row">
     <label for="status">Your status:</label>
     <select
      id="status"
      value={status}
      onChange={(e)=>{ setStatus(e.target.value) }}
     >
      <option value="Online">Online</option>
      <option value="Away">Away or AFK</option>
      <option value="Busy">Busy</option>
      <option value="Offline">Offline</option>
     </select>
    </div>
   </div>
  </div>
 );
}

ReactDOM.render(
 <Profile />,
 document.getElementById("root")
);

export default Profile;