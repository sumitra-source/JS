import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component {
  

  
 render(){
  return (

    <div className="App">
      <NameList/>
      <UserGreeting/>
     {/* <FunctionClick/>
         {/*
      <ParentComponent greetHandler={this.greetParent}/>
          <Message/>
         <Counter/>
         <ClassClick/>
            <EventBind/>*/}
      
     {/* <Greet name="Dixita" heroName='superman'>
      <p>This is children props</p></Greet>
      <button>Action</button>
</Greet>

      <Welcome name="Shrinkhala" heroName='batman'/>

      <Welcome name ="Sarina" heroName='wonder women'/>

     <Hello/>
       <Greet name="Shrinkhala" heroName='batman'>
  </Greet>
  <Welcome name="Dixita" heroName='superman'/>
     */}
    

    </div>
  );
}
}

export default App;
