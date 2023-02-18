import React, { Component } from "react";
import EducationHistory from "./EducationHistory";
import WorkHistory from "./WorkHistory";

class CVMain extends Component{

    render(){
        return(
            <div className="cv-main">
                <EducationHistory autofill={this.props.autofill} preview={this.props.preview}/>
                <WorkHistory autofill={this.props.autofill} preview={this.props.preview}/>
            </div>
        )
    }
}

export default CVMain;