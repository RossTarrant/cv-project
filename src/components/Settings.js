import React, { Component } from "react";
import '../styles/Header.css'

class Settings extends Component{

    constructor(props) {
        super(props);

        this.state = {
            preview: false,
        }

    }

    onPreviewClick(){
        this.setState({
            preview: !this.state.preview,
        })
    }
    
    render() {
        return(
            <div className="settings">
                <h1>CV Creator</h1>
                <div className="settings-buttons">
                    <button>Autofill Detail</button>
                    <button onClick={this.onPreviewClick.bind(this)}>{this.state.preview? 'Edit CV' : 'Preview CV'}</button>
                </div>
                
            </div>
        )
    }

}

export default Settings;