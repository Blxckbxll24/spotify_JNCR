import {Component, React} from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../initializers/firebase';
export default class Loggo extends Component{
  constructor(props){
     this. login = this. login.bind(this);
  }
  login(){
     let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result=>{
       console. log(result);
  })
}
  render(){
     return(
       <div>
         <Button variant="contained" onClick={this. login} />
      </div>
     );
  }
}
