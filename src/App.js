
import "./App.css";
import Sidebar from "./Components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { Component } from "react";
import Postfacebook from './Components/Post-facebook';

class App extends Component{
  state= { render: false }
  add = () => {
    this.setState({render : !this.state.render})
  }
  render(){
    return(
      <div className="App">
        <div className="App">
          <div className="header">
            <div className="facebook">
                <button className="btn btn-primary" onClick={()=>this.add()}> Connect with Facebook</button>
                { this.state.render &&
                    <Postfacebook/>
                }
            </div>
            <Header/>
          </div>
          <Sidebar/>
        </div>
      </div>
    )
  }
}

export default App;
