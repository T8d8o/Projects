import React from 'react';
import ReactDOM from 'react-dom';

const Heading = (props) => {
  return ( 
    <h1>Hello, my name is <span>{props.name}</span>
    </h1>
  );
};

const Hobbies = (props) => {
  return (
    <div>
      <h2>My hobbies:</h2>
      <ol>
        <li>My favorite hobby is {props.best}</li>
        <li>My second-favorite hobby is {props.outdoor}</li>
        <li>I also like {props.indoor}</li>
      </ol>
    </div>
  );
};

const Contact = (props) => {
  return(
    <div>
    <h3>{props.greeting}</h3>
    <button>{props.callToAction}</button>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Heading name="Sarah Smith" />
      <Hobbies best="Kayaking" outdoor="Running" indoor="Chess" />
      <Contact greeting = "Contact me" callToAction = "Schedule a meeting"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
export { Heading, Hobbies, Contact };