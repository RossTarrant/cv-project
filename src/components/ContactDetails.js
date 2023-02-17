import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faLink, faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

class ContactDetails extends Component{

    constructor(){
        super()

        this.state = {
            phone: 'Enter your phone number...',
            email: 'Enter your email...',
            address: 'Enter your address...',
            link: 'Add a link...',
            edit: false,
        };
    }

    onClickEdit(){
        this.setState({
        edit: (!this.state.edit),
        });
    }

    render(){
        return(
            !this.state.edit ? 
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Contact Details</h2>
                    <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={this.onClickEdit.bind(this)}/>
                </div>
                <div className="contact">
                    <div className="contact-data">
                        <FontAwesomeIcon className="icon" icon={faPhone} size="xl"/>
                        <p>{this.state.phone}</p>
                    </div>
                    <div className="contact-data">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl"/>
                        <p>{this.state.email}</p>
                    </div>
                    <div className="contact-data">
                        <FontAwesomeIcon className="icon" icon={faLocationDot} size="2xl"/>
                        <p>{this.state.address}</p>
                    </div>
                    <div className="contact-data">
                        <FontAwesomeIcon className="icon" icon={faLink} size="xl"/>
                        <p>{this.state.link}</p>
                    </div>
                </div>
            </div>
            :
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Contact Details</h2>
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={this.onClickEdit.bind(this)}/>
                </div>
                <div className="contact">
                    <div className="contact-data">
                        <FontAwesomeIcon className="icon" icon={faPhone} size="xl"/>
                        <input value={this.state.phone} onChange={e  => this.setState({phone: e.target.value})}/>
                    </div>
                    <div className="contact-data">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl"/>
                        <input value={this.state.email} onChange={e  => this.setState({email: e.target.value})}/>
                    </div>
                    <div className="contact-data">
                        <FontAwesomeIcon className="icon" icon={faLocationDot} size="2xl"/>
                        <textarea value={this.state.address} onChange={e  => this.setState({address: e.target.value})}/>
                    </div>
                    <div className="contact-data">
                        <FontAwesomeIcon className="icon" icon={faLink} size="xl"/>
                        <input value={this.state.link} onChange={e  => this.setState({link: e.target.value})}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default ContactDetails;