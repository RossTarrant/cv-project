import React, { Component } from "react";
import '../styles/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Contact Details</h2>
                    <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl"/>
                </div>
                <div className="contact">
                    <div className="contact-data">
                        <FontAwesomeIcon icon={faPhone} size="xl"/>
                        <p>01234567891</p>
                    </div>
                    <div className="contact-data">
                        <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                        <p>anEmail@email.com</p>
                    </div>
                    <div className="contact-data">
                        Address
                    </div>
                    <div className="contact-data">
                        Link/URL
                    </div>
                </div>
            </div>
        )
    }

}

export default Sidebar;