import React, { Component } from "react";
import '../styles/Sidebar.css'
import ContactDetails from "./ContactDetails";
import Skills from "./Skills";

class Sidebar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="sidebar">
                <ContactDetails autofill={this.props.autofill} preview={this.props.preview}/>
                <Skills autofill={this.props.autofill} preview={this.props.preview}/>
            </div>
        )
    }
}

export default Sidebar;