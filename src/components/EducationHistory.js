import React, { useState, useEffect } from "react";
import '../styles/Education.css'
import uniqid from "uniqid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareCheck, faTrash} from '@fortawesome/free-solid-svg-icons';

export default function EducationHistory(props){

    const [edit, setEdit] = useState(false);
    const [education, setEducation] = useState([]);
    const [startDateInput, setStartDateInput] = useState(null);
    const [endDateInput, setEndDateInput] = useState(null);
    const [schoolInput, setSchoolInput] = useState(null);
    const [courseInput, setCourseInput] = useState(null);

    useEffect(() => {
        if(props.autofill){
            setEducation([
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
            ])
           }
           else{
            setEducation([])
           }
    },[props.autofill])

    const getEducation = () => {
        // Possibly sort education based upon date
        const educationHistory = education.map(edu => 
            <div key={edu.id} className={props.preview? "edu-card-preview" : "edu-card"}>
                {edu.edit? 
                <div className="edu-details">
                    <input value={schoolInput} onChange={e  => setSchoolInput(e.target.value)} className="edu-school"/>
                    <div className="edu-edit-details">
                        <input value={startDateInput} onChange={e  => setStartDateInput(e.target.value)} className="edu-course"/>
                        <input value={endDateInput} onChange={e  => setEndDateInput(e.target.value)} className="edu-course"/>
                    </div>
                    <input value={courseInput} onChange={e  => setCourseInput(e.target.value)} className="edu-course"/>
                </div>
                :
                <div className="edu-details">
                    <div className="edu-school">{edu.school}</div>
                    <div className="edu-dates">{edu.startDate} - {edu.endDate}</div>
                    <div className="edu-course">{edu.course}</div>
                </div>
                }
                
                <div className="edu-edit">
                    {!props.preview? <FontAwesomeIcon className="icon" icon={edu.edit? faSquareCheck : faPenToSquare} size="lg" onClick={() => {onClickEditEducation(edu.id)}}/> : null}
                    {!props.preview? <FontAwesomeIcon className="icon" icon={faTrash} size="lg" onClick={ () => {onClickDeleteEducation(edu.id)}}/> : null}
                </div>
            </div>
            )
        return educationHistory;
    }

    const checkFilledForm = () => {
        if(startDateInput===null){
            return false
        }
        else if(endDateInput===null){
            return false
        }
        else if(schoolInput===null){
            return false
        }
        else if(courseInput===null){
            return false
        }
        else{
            return true
        }
    }

    const addEducation = () => {
        if(checkFilledForm()){
            const newEducation = {
                id: uniqid(),
                startDate: startDateInput,
                endDate: endDateInput,
                school: schoolInput,
                course: courseInput,
                edit: false,
            }
            setEducation(education.concat(newEducation));
            setEdit(!edit);
            setStartDateInput(null);
            setEndDateInput(null);
            setSchoolInput(null);
            setCourseInput(null);
        }
    }

    const onClickEdit = () => { setEdit(!edit); }

    const onClickDeleteEducation = id => {
        const filteredSkills = education.filter( edu => edu.id !== id);
        setEducation(filteredSkills);
    }

    const onClickEditEducation = id =>{
        let index = 0;
        let updatedEducation = [...education];
        for(let i = 0; i < education.length; i++){
            if(education[i].id===id){
                index = i;
            }
            else if(education[i].edit===true){
                let currentEducation = {...updatedEducation[i]};
                currentEducation.edit = false;
                updatedEducation[i] = currentEducation;
            }
        }
        let newEducation = {...updatedEducation[index]};
        setStartDateInput(newEducation.startDate);
        setEndDateInput(newEducation.endDate);
        setSchoolInput(newEducation.school);
        setCourseInput(newEducation.course);

        if(education.edit){
            newEducation.startDate = startDateInput;
            newEducation.endDate = endDateInput;
            newEducation.school = schoolInput;
            newEducation.course = courseInput;
        }
        newEducation.edit = !newEducation.edit;
        updatedEducation[index] = newEducation;
        setEducation(updatedEducation);
    }

    const getIcon = () => {
        if(!props.preview){
            if(edit){
                return <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={onClickEdit}/>
            }
            else{
                return <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={onClickEdit}/>
            }
        }
        else{
            return null
        }
    }

    const getInputForm = () => {
        if(!props.preview){
            if(edit){
                return(
                    <div className="edu-add-container">
                        <div className="edu-add">
                            <h3>Add Education</h3>
                            <label>Start Year:</label>
                            <input onChange={e => setStartDateInput(e.target.value)}/>
                            <label>End Year:</label>
                            <input onChange={e => setEndDateInput(e.target.value)}/>
                            <label>School Name:</label>
                            <input onChange={e => setSchoolInput(e.target.value)}/>
                            <label>Course Title:</label>
                            <input onChange={e => setCourseInput(e.target.value)}/>
                            <button onClick={addEducation}>Add</button>
                        </div>
                    </div>
                )
            }
        }
    }
    return(
        <div className="edu-history">
            <div className="edu-header">
                <h2>Education History</h2>
                {getIcon()}
            </div>
            {getInputForm()}
                <div className="edu-cards">
                {getEducation()}
                </div>
        </div>
    )
}