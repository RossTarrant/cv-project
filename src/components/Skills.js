import React, { Component } from "react";
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash , faSquareCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import uniqid from "uniqid";

class Skills extends Component{

    constructor(){
        super()

        this.state = {
            skillInput: '',
            skills: [
                {
                    id: uniqid(),
                    skill:"HTML",
                    stars: 5,
                }, 
                {
                    id: uniqid(),
                    skill: "CSS",
                    stars: 4,
                }
            ],
            edit: false,
        };
    }

    getSkills(){
        const skills = this.state.skills.map( skill => (
        <div className="skill">
            {this.state.edit? 
            <div className="skills-edit">
                <FontAwesomeIcon className="icon" icon={faPenToSquare} size="sm" />
                <FontAwesomeIcon className="icon" icon={faTrash} size="sm" onClick={ () => this.onClickDeleteSkill(skill.id)}/>
            </div>
            : null}
            <li>{skill.skill}</li>
            <div className="stars">
                {skill.stars > 0 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                {skill.stars > 1 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                {skill.stars > 2 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                {skill.stars > 3 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                {skill.stars > 4 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
            </div>
        </div>
        ))
        return skills;
    }

    addSkill(){
        const skill = {
            id: uniqid(),
            skill: this.state.skillInput,
            stars: 3,
        }
        this.setState({
            skills: this.state.skills.concat(skill)
        })
    }

    onClickDeleteSkill(id){
        const filteredSkills = this.state.skills.filter( skill => skill.id !== id);
        this.setState({
            skills : filteredSkills,
        });
    }

    onClickEdit(){
        this.setState({
        edit: (!this.state.edit),
        });
    }

    render(){
        return(
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Skills</h2>
                    {this.state.edit? 
                    <FontAwesomeIcon className="icon" icon={faSquareCheck} size="xl" onClick={this.onClickEdit.bind(this)}/>
                    :
                    <FontAwesomeIcon className="icon" icon={faPenToSquare} size="xl" onClick={this.onClickEdit.bind(this)}/>
                    }
                </div>
                {this.state.edit? 
                    <div className="skill-add">
                        <label>Skill Name:</label>
                        <input onChange={e  => this.setState({skillInput: e.target.value})}/>
                        <label>Stars:</label>
                        <select name="cars" id="cars">
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </select>
                        <button onClick={this.addSkill.bind(this)}>Add</button>
                    </div>
                 : null}
                <ul>
                    {this.getSkills()}
                </ul>
            </div>
        )
    }

}

export default Skills;