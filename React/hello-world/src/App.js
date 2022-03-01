import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';

class App extends Component {
  
 render(){
  return (

    <div className="App">
         <Message/>
     {/* <Greet name="Dixita" heroName='superman'>
      <p>This is children props</p></Greet>
      <Greet name="Shrinkhala" heroName='batman'>
      <button>Action</button>
</Greet>
      <Greet name ="Sarina" heroName='wonder women'/>

      <Welcome name="Dixita" heroName='superman'/>
      <Welcome name="Shrinkhala" heroName='batman'/>

      <Welcome name ="Sarina" heroName='wonder women'/>

     <Hello/>
     */}
  
    </div>
  );
}
}

export default App;
