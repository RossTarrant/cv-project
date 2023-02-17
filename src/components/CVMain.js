import React, { Component } from "react";
import EducationHistory from "./EducationHistory";
import WorkHistory from "./WorkHistory";

class CVMain extends Component{

    render(){
        return(
            <div className="cv-main">
                <EducationHistory />
                <WorkHistory />
            </div>
        )
    }
}

export default CVMain;