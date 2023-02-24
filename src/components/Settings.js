import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import '../styles/Header.css'

const Settings = props => {

    const [preview, setPreview] = useState(false);
    const [autofill, setAutofill] = useState(false);

    const onPreviewClick = () => {
        setPreview(!preview);
    }

    const onAutofillClick = () => {
        console.log(3);
        setAutofill(!autofill);
    }
    
    return(
        <div className="settings">
            <h1>CV Creator</h1>
            <div className="settings-buttons">
                <button onClick={onAutofillClick}>{autofill? 'Reset Details' : 'Autofill Details'}</button>
                <button onClick={onPreviewClick}>{preview? 'Edit CV' : 'Preview CV'}</button>
            </div>
        </div>
    )
}
export default Settings;