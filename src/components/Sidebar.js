import React, { Component } from "react";
import '../styles/Sidebar.css'
import ContactDetails from "./ContactDetails";
import Skills from "./Skills";

class Sidebar extends Component{

    render(){
        return(
            <div className="sidebar">
                <ContactDetails />
                <Skills />
            </div>
        )
    }
}

export default Sidebar;