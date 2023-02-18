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
                    role: 'Teacher of Computing',
                    description: 'This is an example of a potential job description that may be placed in this exact location. There are lots of different details I could write about but I will ignore them and just leave it around about here...',
                },
                {
                    id: uniqid(),
                    startDate: '2022',
                    endDate: 'Present',
                    workplace: 'George Spencer Academy',
                    role: 'Teacher of Computing',
                    description: 'This is an example of a potential job description that may be placed in this exact location. There are lots of different details I could write about but I will ignore them and just leave it around about here...',
                },
                {
                    id: uniqid(),
                    startDate: '2022',
                    endDate: 'Present',
                    workplace: 'Tudor Grange Academy',
                    role: 'Teacher (Maternity Cover)',
                    description: 'This is an example of a potential job description that may be placed in this exact location. There are lots of different details I could write about but I will ignore them and just leave it around about here...',
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
            <div key={work.id} className={this.props.preview? "work-card-preview" : "work-card"}>
                <div className="work-details">
                    <div className="work-title">{work.role}</div>
                    <div className="work-subtitle">
                        <div className="work-workplace">{work.workplace}</div>
                        <div className="work-dates">{work.startDate} - {work.endDate}</div>
                    </div>
                    <div className="work-description">{work.description}</div>
                </div>
                <div className="work-edit">
                    {!this.props.preview? <FontAwesomeIcon className="icon" icon={faPenToSquare} size="lg" /> : null}
                    {!this.props.preview? <FontAwesomeIcon className="icon" icon={faTrash} size="lg" onClick={ () => this.onClickDeleteWork(work.id)}/> : null}
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
                description: this.state.descriptionInput,
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

    getIcon(){
        if(!this.props.preview){
            if(this.state.edit){
                return <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={this.onClickEdit.bind(this)}/>
            }
            else{
                return <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={this.onClickEdit.bind(this)}/>
            }
        }
        else{
            return null
        }
    }

    render(){
        return(
            <div className="work-history">
                <div className="work-header">
                <h2>Work History</h2>
                    {this.getIcon()}
                </div>
                {this.state.edit? 
                    <div className="work-add-container">
                        <div className="work-add">
                            <h3>Add Work</h3>
                            <label>Start Year:</label>
                            <input onChange={e => this.setState({startDateInput: e.target.value})}/>
                            <label>End Year:</label>
                            <input onChange={e => this.setState({endDateInput: e.target.value})}/>
                            <label>Place of Work:</label>
                            <input onChange={e => this.setState({workplaceInput: e.target.value})}/>
                            <label>Role:</label>
                            <input onChange={e => this.setState({roleInput: e.target.value})}/>
                            <label>Description (250 chars):</label>
                            <textarea maxLength={250} onChange={e => this.setState({descriptionInput: e.target.value})}/>
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