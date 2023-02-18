import React, { Component } from "react";
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

class Header extends Component{

    constructor(props) {
        super(props);

        this.state = {
            name: 'Your name...',
            role: 'Enter your job role...',
            edit: false,
        };

    }

    onClickEdit(){
        this.setState({
            edit: (!this.state.edit),
        });
    }

    onClickSubmit(){
        this.setState({
            edit: (!this.state.edit),
        });
    }
    
    render() {
        return this.state.edit ? 
        <div className="header">
            <div className="header-photo">
                <img className="dot" alt="error" src="https://www.lse.ac.uk/government/Assets/Images/People/Academic/dan-berliner-200x200.jpg"></img>
            </div>
            <div className="header-name-role">
                <input value={this.state.name} onChange={e  => this.setState({name: e.target.value})}/>
                <input value={this.state.role} onChange={e  => this.setState({role: e.target.value})}/>
            </div>
            <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={this.onClickSubmit.bind(this)}/>
        </div> 
        : 
        <div className="header">
            <div className="header-photo">
                <img className="dot" alt="error" src="https://www.lse.ac.uk/government/Assets/Images/People/Academic/dan-berliner-200x200.jpg"></img>
            </div>
            <div>
                <div className="header-name">{this.state.name}</div>
                <div className="header-role">{this.state.role}</div>
            </div>
            <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={this.onClickEdit.bind(this)}/>
        </div>;
    }

}

export default Header;