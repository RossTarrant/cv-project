import React, { Component } from "react";
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

class Settings extends Component{

    constructor(props) {
        super(props);

    }
    
    render() {
        return(
            <div className="settings">
                <h1>CV Creator</h1>
                <button>Preview CV</button>
            </div>
        )
    }

}

export default Settings;