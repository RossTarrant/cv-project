import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import '../styles/Header.css'

class Settings extends Component{

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
    
    render() {
        return(
            <div className="settings">
                <h1>CV Creator</h1>
                <div className="settings-buttons">
                    <button onClick={this.onAutofillClick.bind(this)}>{this.state.autofill? 'Reset Details' : 'Autofill Details'}</button>
                    <button onClick={this.onPreviewClick.bind(this)}>{this.state.preview? 'Edit CV' : 'Preview CV'}</button>
                </div>
            </div>
        )
    }

}

export default Settings;