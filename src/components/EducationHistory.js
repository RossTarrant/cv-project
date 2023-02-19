import React, { Component } from "react";
import '../styles/Education.css'
import uniqid from "uniqid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareCheck, faTrash} from '@fortawesome/free-solid-svg-icons';

class EducationHistory extends Component{

    constructor(props){
        super(props);
        this.state = {
            edit: false,
            education: [],
            startDateInput: null,
            endDateInput: null,
            schoolInput: null,
            courseInput: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.autofill !== this.props.autofill) {
               if(this.props.autofill){
                this.setState({
                    education: [
                        {
                            id: uniqid(),
                            startDate: '2022',
                            endDate: 'Present',
                            school: 'The Odin Project',
                            course: 'Web Development',
                            edit: false,
                        },
                        {
                            id: uniqid(),
                            startDate: '2016',
                            endDate: '2019',
                            school: 'University of Golden Sunset',
                            course: 'Computer Science (BSc)',
                            edit: false,
                        },
                        {
                            id: uniqid(),
                            startDate: '2014',
                            endDate: '2016',
                            school: 'Green Grass Sixth Form',
                            course: 'English, Maths, Science (A-Levels)',
                            edit: false,
                        },
                        {
                            id: uniqid(),
                            startDate: '2012',
                            endDate: '2014',
                            school: 'Blue Sky Secondary School',
                            course: 'English, Maths, Science, French (GCSEs)',
                            edit: false,
                        }
                    ]
                })
               }
               else{
                this.setState({
                    education: []
                })
               }
        }
    }

    getEducation(){
        // Possibly sort education based upon date
        const educationHistory = this.state.education.map(edu => 
            <div key={edu.id} className={this.props.preview? "edu-card-preview" : "edu-card"}>
                {edu.edit? 
                <div className="edu-details">
                    <input value={this.state.schoolInput} onChange={e  => this.setState({schoolInput: e.target.value})} className="edu-school"/>
                    <div className="edu-edit-details">
                        <input value={this.state.startDateInput} onChange={e  => this.setState({startDateInput: e.target.value})} className="edu-course"/>
                        <input value={this.state.endDateInput} onChange={e  => this.setState({endDateInput: e.target.value})} className="edu-course"/>
                    </div>
                    <input value={this.state.courseInput} onChange={e  => this.setState({courseInput: e.target.value})} className="edu-course"/>
                </div>
                :
                <div className="edu-details">
                    <div className="edu-school">{edu.school}</div>
                    <div className="edu-dates">{edu.startDate} - {edu.endDate}</div>
                    <div className="edu-course">{edu.course}</div>
                </div>
                }
                
                <div className="edu-edit">
                    {!this.props.preview? <FontAwesomeIcon className="icon" icon={edu.edit? faSquareCheck : faPenToSquare} size="lg" onClick={ () => this.onClickEditEducation(edu.id)}/> : null}
                    {!this.props.preview? <FontAwesomeIcon className="icon" icon={faTrash} size="lg" onClick={ () => this.onClickDeleteEducation(edu.id)}/> : null}
                </div>
            </div>
            )
        return educationHistory;
    }

    checkFilledForm(){
        if(this.state.startDateInput===null){
            return false
        }
        else if(this.state.endDateInput===null){
            return false
        }
        else if(this.state.schoolInput===null){
            return false
        }
        else if(this.state.courseInput===null){
            return false
        }
        else{
            return true
        }
    }

    addEducation(){
        if(this.checkFilledForm()){
            const newEducation = {
                id: uniqid(),
                startDate: this.state.startDateInput,
                endDate: this.state.endDateInput,
                school: this.state.schoolInput,
                course: this.state.courseInput,
                edit: false,
            }
            this.setState({
                education: this.state.education.concat(newEducation),
                edit: !(this.state.edit),
                startDateInput: null,
                endDateInput: null,
                schoolInput: null,
                courseInput: null,
            })
        }
    }

    onClickEdit(){
        this.setState({
        edit: (!this.state.edit),
        });
    }

    onClickDeleteEducation(id){
        const filteredSkills = this.state.education.filter( edu => edu.id !== id);
        this.setState({
            education : filteredSkills,
        });
    }

    onClickEditEducation(id){
        let index = 0;
        let updatedEducation = [...this.state.education];
        for(let i = 0; i < this.state.education.length; i++){
            if(this.state.education[i].id===id){
                index = i;
            }
            else if(this.state.education[i].edit===true){
                let currentEducation = {...updatedEducation[i]};
                currentEducation.edit = false;
                updatedEducation[i] = currentEducation;
            }
        }
        let education = {...updatedEducation[index]};
        this.setState({
            startDateInput: education.startDate,
            endDateInput: education.endDate,
            schoolInput: education.school,
            courseInput: education.course,
        })
        if(education.edit){
            education.startDate = this.state.startDateInput;
            education.endDate = this.state.endDateInput;
            education.school = this.state.schoolInput;
            education.course = this.state.courseInput;
        }
        education.edit = !education.edit;
        updatedEducation[index] = education;
        this.setState({education: updatedEducation});
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
        if(!this.props.preview){
            if(this.state.edit){
                return(
                    <div className="edu-add-container">
                        <div className="edu-add">
                            <h3>Add Education</h3>
                            <label>Start Year:</label>
                            <input onChange={e => this.setState({startDateInput: e.target.value})}/>
                            <label>End Year:</label>
                            <input onChange={e => this.setState({endDateInput: e.target.value})}/>
                            <label>School Name:</label>
                            <input onChange={e => this.setState({schoolInput: e.target.value})}/>
                            <label>Course Title:</label>
                            <input onChange={e => this.setState({courseInput: e.target.value})}/>
                            <button onClick={this.addEducation.bind(this)}>Add</button>
                        </div>
                    </div>
                )
            }
        }
    }

    render(){
        return(
            <div className="edu-history">
                <div className="edu-header">
                    <h2>Education History</h2>
                    {this.getIcon()}
                </div>
                {this.getInputForm()}
                 <div className="edu-cards">
                    {this.getEducation()}
                 </div>
            </div>
        )
    }
}

export default EducationHistory;