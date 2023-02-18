import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CVMain from "./components/CVMain";
import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        preview: false,
        autofill: false,
    }
  }

  onPreviewClick(){
      this.setState({
          preview: !this.state.preview,
      })
  }

  onAutofillClick(){
      this.setState({
          autofill: !this.state.autofill,
      })
  }

  onClickEdit(){
    this.setState({
    edit: (!this.state.edit),
    });
  }

  render() {
    return (
      <div className="content">
        <div className="settings">
          <h1>CV Creator</h1>
          <div className="settings-buttons">
              <button onClick={this.onAutofillClick.bind(this)}>{this.state.autofill? 'Reset Details' : 'Autofill Details'}</button>
              <button onClick={this.onPreviewClick.bind(this)}>{this.state.preview? 'Edit CV' : 'Preview CV'}</button>
          </div>
        </div>
        <div className="cv">
          <Header className="header" autofill={this.state.autofill} preview={this.state.preview}/>
          <Sidebar className="sidebar" autofill={this.state.autofill} preview={this.state.preview}/>
          <CVMain  autofill={this.state.autofill} preview={this.state.preview}/>
        </div>
        
      </div>
      );
  }

}

export default App;