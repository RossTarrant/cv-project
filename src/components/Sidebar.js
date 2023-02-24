import React, { Component } from "react";
import '../styles/Sidebar.css'
import ContactDetails from "./ContactDetails";
import Skills from "./Skills";

export default function Sidebar(props){
    return(
        <div className="sidebar">
            <ContactDetails autofill={props.autofill} preview={props.preview}/>
            <Skills autofill={props.autofill} preview={props.preview}/>
        </div>
    )
}