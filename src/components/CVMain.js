import React from "react";
import EducationHistory from "./EducationHistory";
import WorkHistory from "./WorkHistory";

export default function CVMain(props){
    return(
        <div className="cv-main">
            <EducationHistory autofill={props.autofill} preview={props.preview}/>
            <WorkHistory autofill={props.autofill} preview={props.preview}/>
        </div>
    )
}