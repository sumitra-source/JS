import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn:false
       }
     }
  render() {
      return this.state.isLoggedIn && <div>Welcome Sumitra</div>
     // return(
      //    this.state.isLoggedIn?(<div>Welcome Sumitra</div>):(<div>Welcome Guests</div>)
     // )
     /* let message
      if(this.state.isLoggedIn){
          message=<div>Welcome Sumitra</div>
      }else{
          message=<div>Welcome guest</div>
      }
      return <div>{message}</div>*/
     /* if(this.state.isLoggedIn){
          return(
              <div>
                  Welcome Sumitra
              </div>
          )
      }
      else{
          return(
              <div>
                  Welcome guests
              </div>
          )
      }*/
   /* return(
    <div>
      <div>Welcome Sumitra</div>
<div>Welcome Guests</div>
    </div>
    ) 
    */
  }
}

export default UserGreeting