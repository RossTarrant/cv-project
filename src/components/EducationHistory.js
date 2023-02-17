import React, { Component } from "react";
import '../styles/Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

class EducationHistory extends Component{

    constructor(){
        super();
        this.state = {
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
            <div className="edu-history">
                <div className="edu-header">
                <h2>Education History</h2>
                    {this.state.edit? 
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={this.onClickEdit.bind(this)}/>
                    :
                    <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={this.onClickEdit.bind(this)}/>
                    }
                </div>
                {this.state.edit? 
                    <div className="edu-add">
                        <h3>Add Education</h3>
                        <label>Start Date:</label>
                        <input type={'date'}/>
                        <label>End Date:</label>
                        <input type={'date'}/>
                        <label>School Name:</label>
                        <input />
                        <label>Course Title:</label>
                        <input />
                        <button>Add</button>
                    </div>
                 : null}
            </div>
        )
    }
}

export default EducationHistory;