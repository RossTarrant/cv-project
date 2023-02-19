import React, { Component } from "react";
import '../styles/Work.css';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

class WorkHistory extends Component{

    constructor(props){
        super(props);
        this.state = {
            edit: false,
            work: [],
            startDateInput: null,
            endDateInput: null,
            workplaceInput: null,
            roleInput: null,
            descriptionInput: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.autofill !== this.props.autofill) {
               if(this.props.autofill){
                this.setState({
                    work: [
                        {
                            id: uniqid(),
                            startDate: '2022',
                            endDate: 'Present',
                            workplace: 'Blue Sky Industries',
                            role: 'Senior Manager',
                            description: 'This is the description of the role of Senior Manager which involes lots of managing and making sure that everything is working as it should be. If it is not working then it will be fixed in a very short amount of time...',
                        },
                        {
                            id: uniqid(),
                            startDate: '2021',
                            endDate: '2022',
                            workplace: 'Sunny Hill Technologies',
                            role: 'Manager',
                            description: 'This is the description of the role of Manager which involes lots of managing and making sure that everything is working as it should be. If it is not working then it will be fixed in a very short amount of time...',
                        },
                        {
                            id: uniqid(),
                            startDate: '2019',
                            endDate: '2021',
                            workplace: 'Green Meadow Inventions',
                            role: 'Junior Manager',
                            description: 'This is the description of the role of Junior Manager which involes lots of managing and making sure that everything is working as it should be. If it is not working then it will be fixed in a very short amount of time...',
                        }
                    ]
                })
               }
               else{
                this.setState({
                    work: []
                })
               }
        }
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
        if(this.checkFilledForm()){
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

    checkFilledForm(){
        if(this.state.startDateInput===null){
            return false
        }
        else if(this.state.endDateInput===null){
            return false
        }
        else if(this.state.workplaceInput===null){
            return false
        }
        else if(this.state.roleInput===null){
            return false
        }
        else if(this.state.descriptionInput===null){
            return false
        }
        else{
            return true
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

    getInputForm(){
        if(!this.props.preview && this.state.edit){
            return(
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
            )
        }
    }

    render(){
        return(
            <div className="work-history">
                <div className="work-header">
                <h2>Work History</h2>
                    {this.getIcon()}
                </div>
                {this.getInputForm()}
                 <div className="work-cards">
                    {this.getWork()}
                 </div>
            </div>
        )
    }
}

export default WorkHistory;