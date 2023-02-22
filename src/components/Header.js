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
            imageUrl: '',
            imageUrlInput: '',
            edit: false,
            preview: props.preview,
            autofill: props.autofill,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.autofill !== this.props.autofill) {
               if(this.props.autofill){
                this.setState({
                    name: 'Jonny Developer',
                    role: 'Junior Web Developer',
                    imageUrl: 'https://www.lse.ac.uk/government/Assets/Images/People/Academic/dan-berliner-200x200.jpg',
                })
               }
               else{
                this.setState({
                    name: 'Your name...',
                    role: 'Enter your job role...',
                    imageUrl: '',
                })
               }
        }
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

    onClickSubmitImage(){
        this.setState({
            imageUrl: this.state.imageUrlInput,
            edit: (!this.state.edit),
        });
    }

    getHeaderNameRole(){
        if(!this.props.preview && this.state.edit){
            return(
                <div className="header-name-role">
                    <input value={this.state.name} onChange={e  => this.setState({name: e.target.value})}/>
                    <input value={this.state.role} onChange={e  => this.setState({role: e.target.value})}/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className="header-name">{this.state.name}</div>
                    <div className="header-role">{this.state.role}</div>
                </div>
            );
        }
    }

    getHeaderEdit(){
        if(!this.props.preview && this.state.edit){
            return(
                <div className="header-photo-edit">
                    <img className="dot" alt="" src={this.state.imageUrl}></img>
                    <div className="header-input-form">
                        <label>Image Url: </label>
                        <input value={this.state.imageUrlInput} onChange={e => this.setState({imageUrlInput: e.target.value})}/>
                        <button onClick={this.onClickSubmitImage.bind(this)}>Submit</button>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="header-photo">
                    <img className="dot" alt="" src={this.state.imageUrl}></img>
                </div>
            )
        }
    }
    
    render() {
        return this.state.edit ? 
        <div className="header">
            {this.getHeaderEdit()}
            {this.getHeaderNameRole()}
            {this.props.preview? null 
            : <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={this.onClickSubmit.bind(this)}/>}
        </div> 
        : 
        <div className="header">
            {this.getHeaderEdit()}
            {this.getHeaderNameRole()}
            {this.props.preview? null 
            : <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={this.onClickEdit.bind(this)}/>}
        </div>;
    }

}

export default Header;