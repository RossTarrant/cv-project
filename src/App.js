import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";
import CVMain from "./components/CVMain";
import './styles/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  onClickEdit(){
    this.setState({
    edit: (!this.state.edit),
    });
  }

  render() {
    return (
      <div className="content">
        <Settings className="settings"/>
        <div className="cv">
          <Header className="header"/>
          <Sidebar className="sidebar"/>
          <CVMain />
        </div>
        
      </div>
      );
  }

}

export default App;