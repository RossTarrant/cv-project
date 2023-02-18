import React, { Component } from "react";
import '../styles/Work.css';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

class WorkHistory extends Component{

    constructor(){
        super();
        this.state = {
            edit: false,
            work: [
                {
                    id: uniqid(),
                    startDate: '2022',
                    endDate: 'Present',
                    workplace: 'The West Bridgford School',
                    role: 'Computing',
                    description: 'A description',
                },
                {
                    id: uniqid(),
                    startDate: '2022',
                    endDate: 'Present',
                    workplace: 'The West Bridgford School',
                    role: 'Computing',
                    description: 'A description',
                },
                {
                    id: uniqid(),
                    startDate: '2022',
                    endDate: 'Present',
                    workplace: 'The West Bridgford School',
                    role: 'Computing',
                    description: 'A description',
                }
            ],
            startDateInput: null,
            endDateInput: null,
            workplaceInput: null,
            roleInput: null,
            descriptionInput: null,
        };
    }

    onClickEdit(){
        this.setState({
        edit: (!this.state.edit),
        });
    }

    onClickDeleteWork(id){
        const filteredWork = this.state.work.filter( work => work.id !== id);
        this.setState({
            work : filteredWork,
        });
    }

    getWork(){
        // Possibly sort work based upon date
        const workHistory = this.state.work.map(work => 
            <div key={work.id} className="edu-card">
                <div className="work-details">
                    <div className="work-school">{work.school}</div>
                    <div className="work-dates">{work.startDate} - {work.endDate}</div>
                    <div className="work-workplace">{work.workplace}</div>
                    <div className="work-role">{work.role}</div>
                    <div className="work-description">{work.description}</div>
                </div>
                <div className="work-edit">
                    <FontAwesomeIcon className="icon" icon={faPenToSquare} size="lg" />
                    <FontAwesomeIcon className="icon" icon={faTrash} size="lg" onClick={ () => this.onClickDeleteWork(work.id)}/>
                </div>
            </div>
            )
        return workHistory;
    }

    addWork(){
        if(1===1){
            const newWork = {
                id: uniqid(),
                startDate: this.state.startDateInput,
                endDate: this.state.endDateInput,
                workplace: this.state.workplaceInput,
                role: this.state.roleInput,
            }
            this.setState({
                work: this.state.work.concat(newWork),
                edit: !(this.state.edit),
                startDateInput: null,
                endDateInput: null,
                workplaceInput: null,
                roleInput: null,
                descriptionInput: null,
            })
        }
    }

    render(){
        return(
            <div className="work-history">
                <div className="work-header">
                <h2>Work History</h2>
                    {this.state.edit? 
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={this.onClickEdit.bind(this)}/>
                    :
                    <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={this.onClickEdit.bind(this)}/>
                    }
                </div>
                {this.state.edit? 
                    <div className="work-add-container">
                        <div className="work-add">
                            <h3>Add Work</h3>
                            <label>Start Year:</label>
                            <input onChange={e => this.setState({startDateInput: e.target.value})}/>
                            <label>End Year:</label>
                            <input onChange={e => this.setState({endDateInput: e.target.value})}/>
                            <label>School Name:</label>
                            <input onChange={e => this.setState({workplaceInput: e.target.value})}/>
                            <label>Course Title:</label>
                            <input onChange={e => this.setState({roleInput: e.target.value})}/>
                            <button onClick={this.addWork.bind(this)}>Add</button>
                        </div>
                    </div>
                 : null}
                 <div className="work-cards">
                    {this.getWork()}
                 </div>
            </div>
        )
    }
}

export default WorkHistory;