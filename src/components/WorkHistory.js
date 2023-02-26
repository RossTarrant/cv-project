import React, { useState, useEffect } from "react";
import '../styles/Work.css';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function WorkHistory(props){

    const [edit, setEdit] = useState(false);
    const [work, setWork] = useState([]);
    const [startDateInput, setStartDateInput] = useState(null);
    const [endDateInput, setEndDateInput] = useState(null);
    const [workplaceInput, setWorkplaceInput] = useState(null);
    const [roleInput, setRoleInput] = useState(null);
    const [descriptionInput, setDescriptionInput] = useState(null);

    useEffect( () => {
        if(props.autofill){
            setWork([
                {
                    id: uniqid(),
                    startDate: '2022',
                    endDate: 'Present',
                    workplace: 'Blue Sky Industries',
                    role: 'Senior Manager',
                    description: 'This is the description of the role of Senior Manager which involes lots of managing and making sure that everything is working as it should be. If it is not working then it will be fixed in a very short amount of time...',
                    edit: false,
                },
                {
                    id: uniqid(),
                    startDate: '2021',
                    endDate: '2022',
                    workplace: 'Sunny Hill Technologies',
                    role: 'Manager',
                    description: 'This is the description of the role of Manager which involes lots of managing and making sure that everything is working as it should be. If it is not working then it will be fixed in a very short amount of time...',
                    edit: false,
                },
                {
                    id: uniqid(),
                    startDate: '2019',
                    endDate: '2021',
                    workplace: 'Green Meadow Inventions',
                    role: 'Junior Manager',
                    description: 'This is the description of the role of Junior Manager which involes lots of managing and making sure that everything is working as it should be. If it is not working then it will be fixed in a very short amount of time...',
                    edit: false,
                }
                ])
           }
           else{
            setWork([]);
           }
    }, [props.autofill])

    const onClickEdit = () => {
        setEdit(!edit);
    }

    const onClickDeleteWork = (id) => {
        const filteredWork = work.filter( work => work.id !== id);
        setWork(filteredWork);
    }

    const onClickEditWork = (id) => {
        let index = 0;
        let updatedWork = [...work];
        for(let i = 0; i < work.length; i++){
            if(work[i].id===id){
                index = i;
            }
            else if(work[i].edit===true){
                let currentWork = {...updatedWork[i]};
                currentWork.edit = false;
                updatedWork[i] = currentWork;
            }
        }
        let newWork = {...updatedWork[index]};
        setStartDateInput(newWork.startDate);
        setEndDateInput(newWork.endDate);
        setWorkplaceInput(newWork.workplace);
        setRoleInput(newWork.role);
        setDescriptionInput(newWork.description);
        if(newWork.edit){
            newWork.startDate = startDateInput;
            newWork.endDate = endDateInput;
            newWork.workplace = workplaceInput;
            newWork.role = roleInput;
            newWork.description = descriptionInput;
        }
        newWork.edit = !newWork.edit;
        updatedWork[index] = newWork;
        setWork(updatedWork);
    }

    const getWork = () => {
        const workHistory = work.map(work => 
            <div key={work.id} className={props.preview? "work-card-preview" : "work-card"}>
                {work.edit? 
                <div className="work-details">
                    <input className={"work-title"} value={roleInput} onChange={e  => setRoleInput(e.target.value)}/>
                    <div className="work-subtitle">
                        <div className="work-edit-details">
                            <input className="work-workplace" value={workplaceInput} onChange={e  => setWorkplaceInput(e.target.value)}/>
                            <div className="work-edit-dates">
                                <input className="work-dates" value={startDateInput} onChange={e  => setStartDateInput(e.target.value)}/>
                                <input className="work-dates" value={endDateInput} onChange={e  => setEndDateInput(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <textarea value={descriptionInput} onChange={e  => setDescriptionInput(e.target.value)} className="work-title"/>
                </div>
                :
                <div className="work-details">
                    <div className="work-title">{work.role}</div>
                    <div className="work-subtitle">
                        <div className="work-workplace">{work.workplace}</div>
                        <div className="work-dates">{work.startDate} - {work.endDate}</div>
                    </div>
                    <div className="work-description">{work.description}</div>
                </div>
                }
                
                <div className="work-edit">
                {!props.preview? <FontAwesomeIcon className="icon" icon={work.edit? faSquareCheck : faPenToSquare} size="lg" onClick={ () => onClickEditWork(work.id)}/> : null}
                    {!props.preview? <FontAwesomeIcon className="icon" icon={faTrash} size="lg" onClick={ () => onClickDeleteWork(work.id)}/> : null}
                </div>
            </div>
            )
        return workHistory;
    }

    const addWork = () => {
        if(checkFilledForm()){
            const newWork = {
                id: uniqid(),
                startDate: startDateInput,
                endDate: endDateInput,
                workplace: workplaceInput,
                role: roleInput,
                description: descriptionInput,
                edit: false,
            }
            setWork(work.concat(newWork));
            setEdit(!edit);
            setStartDateInput(null);
            setEndDateInput(null);
            setWorkplaceInput(null);
            setRoleInput(null);
            setDescriptionInput(null);
        }
    }

    const checkFilledForm = () => {
        if(startDateInput===null){
            return false
        }
        else if(endDateInput===null){
            return false
        }
        else if(workplaceInput===null){
            return false
        }
        else if(roleInput===null){
            return false
        }
        else if(descriptionInput===null){
            return false
        }
        else{
            return true
        }
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
        if(!props.preview && edit){
            return(
                <div className="work-add-container">
                    <div className="work-add">
                        <h3>Add Work</h3>
                        <label>Start Year:</label>
                        <input onChange={e => setStartDateInput(e.target.value)}/>
                        <label>End Year:</label>
                        <input onChange={e => setEndDateInput(e.target.value)}/>
                        <label>Place of Work:</label>
                        <input onChange={e => setWorkplaceInput(e.target.value)}/>
                        <label>Role:</label>
                        <input onChange={e => setRoleInput(e.target.value)}/>
                        <label>Description (250 chars):</label>
                        <textarea maxLength={250} onChange={e => setDescriptionInput(e.target.value)}/>
                        <button onClick={addWork}>Add</button>
                    </div>
                </div>
            )
        }
    }
    return(
        <div className="work-history">
            <div className="work-header">
            <h2>Work History</h2>
                {getIcon()}
            </div>
            {getInputForm()}
                <div className="work-cards">
                {getWork()}
                </div>
        </div>
    )
}