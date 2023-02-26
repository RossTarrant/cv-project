import React, { useState, useEffect } from "react";
import '../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export default function Header(props){

    const [name, setName] = useState('Your name...');
    const [role, setRole] = useState('Enter your job role...');
    const [imageUrl, setImageUrl] = useState('');
    const [imageUrlInput, setImageUrlInput] = useState('');
    const [edit, setEdit] = useState(false);

    useEffect( () => {
        if(props.autofill){
            setName('Jonny Developer');
            setRole('Junior Web Developer');
            setImageUrl('https://www.lse.ac.uk/government/Assets/Images/People/Academic/dan-berliner-200x200.jpg');
           }
           else{
            setName('Your name...');
            setRole('Enter your job role...');
            setImageUrl('');
           }
    }, [props.autofill])

    const onClickEdit = () => {
        setEdit(!edit);
    }

    const onClickSubmit = () => {
        setEdit(!edit);
    }

    const onClickSubmitImage = () => {
        setImageUrl(imageUrlInput);
        setEdit(!edit);
    }

    const getHeaderNameRole = () => {
        if(!props.preview && edit){
            return(
                <div className="header-name-role">
                    <input value={name} onChange={e  => setName(e.target.value)}/>
                    <input value={role} onChange={e  => setRole(e.target.value)}/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className="header-name">{name}</div>
                    <div className="header-role">{role}</div>
                </div>
            );
        }
    }

    const getHeaderEdit = () => {
        if(!props.preview && edit){
            return(
                <div className="header-photo-edit">
                    <img className="dot" alt="" src={imageUrl}></img>
                    <div className="header-input-form">
                        <label>Image Url: </label>
                        <input value={imageUrlInput} onChange={e => setImageUrlInput(e.target.value)}/>
                        <button onClick={onClickSubmitImage}>Submit</button>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="header-photo">
                    <img className="dot" alt="" src={imageUrl}></img>
                </div>
            )
        }
    }

    return edit ? 
    <div className="header">
        {getHeaderEdit()}
        {getHeaderNameRole()}
        {props.preview? null 
        : <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={onClickSubmit}/>}
    </div> 
    : 
    <div className="header">
        {getHeaderEdit()}
        {getHeaderNameRole()}
        {props.preview? null 
        : <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={onClickEdit}/>}
    </div>;
}