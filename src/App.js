import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './styles/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="content">
        <Header className="header"/>
        <Sidebar className="sidebar"/>
      </div>
      );
  }

}

export default App;