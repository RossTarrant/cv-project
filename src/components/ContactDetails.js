import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faLink, faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

class ContactDetails extends Component{

    constructor(props){
        super(props)

        this.state = {
            phone: 'Enter your phone number...',
            email: 'Enter your email...',
            address: 'Enter your address...',
            link: 'Add a link...',
            edit: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.autofill !== this.props.autofill) {
               if(this.props.autofill){
                this.setState({
                    phone: '+447123456789',
                    email: 'web.developer@gmail.com',
                    address: '32 Developer Lane, London, UK',
                    link: 'Github.com/RossTarrant',
                })
               }
               else{
                this.setState({
                    phone: 'Enter your phone number...',
                    email: 'Enter your email...',
                    address: 'Enter your address...',
                    link: 'Add a link...',
                })
               }
        }
    }

    onClickEdit(){
        this.setState({
        edit: (!this.state.edit),
        });
    }

    getContactSection(){
        if(!this.props.preview && this.state.edit){
            return(
                <div className="contact">
                    <FontAwesomeIcon className="icon" icon={faPhone} size="xl"/>
                    <input value={this.state.phone} onChange={e  => this.setState({phone: e.target.value})}/>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl"/>
                    <input value={this.state.email} onChange={e  => this.setState({email: e.target.value})}/>
                    <FontAwesomeIcon className="icon" icon={faLocationDot} size="2xl"/>
                    <textarea value={this.state.address} onChange={e  => this.setState({address: e.target.value})}/>
                    <FontAwesomeIcon className="icon" icon={faLink} size="xl"/>
                    <input value={this.state.link} onChange={e  => this.setState({link: e.target.value})}/>
                </div>
            )
        }
        else{
            return(
                <div className="contact">
                    <FontAwesomeIcon className="icon" icon={faPhone} size="xl"/>
                    <p>{this.state.phone}</p>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl"/>
                    <p>{this.state.email}</p>
                    <FontAwesomeIcon className="icon" icon={faLocationDot} size="2xl"/>
                    <p>{this.state.address}</p>
                    <FontAwesomeIcon className="icon" icon={faLink} size="xl"/>
                    <p>{this.state.link}</p>
                </div>
            )
        }
    }

    render(){
        return(
            !this.state.edit ? 
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Contact Details</h2>
                    {!this.props.preview? 
                    <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={this.onClickEdit.bind(this)}/>
                    : null}
                </div>
                {this.getContactSection()}
            </div>
            :
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Contact Details</h2>
                    {!this.props.preview? 
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={this.onClickEdit.bind(this)}/>
                    : null}
                </div>
                {this.getContactSection()}   
            </div>
        )
    }

}

export default ContactDetails;