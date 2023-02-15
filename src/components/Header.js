import React, { Component } from "react";
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

class Header extends Component{

    constructor(props) {
        super(props);

        this.state = {
            name: 'Your name...',
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
            <input value={this.state.name} onChange={e  => this.setState({name: e.target.value})}/>
            <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={this.onClickSubmit.bind(this)}/>
        </div> 
        : 
        <div className="header">
            <h1>{this.state.name}</h1>
            <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={this.onClickEdit.bind(this)}/>
        </div>;
    }

}

export default Header;