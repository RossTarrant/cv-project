import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faLink, faPenToSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

export default function ContactDetails(props){

    const [phone, setPhone] = useState('Enter your phone number...');
    const [email, setEmail] = useState('Enter your email...');
    const [address, setAddress] = useState('Enter your address...');
    const [link, setLink] = useState('Add a link...');
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if(props.autofill){
            setPhone('+447123456789');
            setEmail('web.developer@gmail.com');
            setAddress('32 Developer Lane, London, UK');
            setLink('Github.com/RossTarrant');
           }
           else{
            setPhone('Enter your phone number...');
            setEmail('Enter your email...');
            setAddress('Enter your address...');
            setLink('Add a link...');
           }
    }, [props.autofill])

    const onClickEdit = () => {
        setEdit(!edit);
    }

    const getContactSection = () => {
        if(!props.preview && edit){
            return(
                <div className="contact">
                    <FontAwesomeIcon className="icon" icon={faPhone} size="xl"/>
                    <input value={phone} onChange={e  => setPhone(e.target.value)}/>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl"/>
                    <input value={email} onChange={e  => setEmail(e.target.value)}/>
                    <FontAwesomeIcon className="icon" icon={faLocationDot} size="2xl"/>
                    <textarea value={address} onChange={e  => setAddress(e.target.value)}/>
                    <FontAwesomeIcon className="icon" icon={faLink} size="xl"/>
                    <input value={link} onChange={e  => setLink(e.target.value)}/>
                </div>
            )
        }
        else{
            return(
                <div className="contact">
                    <FontAwesomeIcon className="icon" icon={faPhone} size="xl"/>
                    <p>{phone}</p>
                    <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl"/>
                    <p>{email}</p>
                    <FontAwesomeIcon className="icon" icon={faLocationDot} size="2xl"/>
                    <p>{address}</p>
                    <FontAwesomeIcon className="icon" icon={faLink} size="xl"/>
                    <p>{link}</p>
                </div>
            )
        }
    }

    return(
        !edit ? 
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Contact Details</h2>
                {!props.preview? 
                <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={onClickEdit}/>
                : null}
            </div>
            {getContactSection()}
        </div>
        :
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Contact Details</h2>
                {!props.preview? 
                <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={onClickEdit}/>
                : null}
            </div>
            {getContactSection()}   
        </div>
    )
}