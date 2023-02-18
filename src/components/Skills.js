import React, { Component } from "react";
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash , faSquareCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import uniqid from "uniqid";

class Skills extends Component{

    constructor(props){
        super(props)

        this.state = {
            skillInput: '',
            starsInput: 5,
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

    compareStars(a, b){
        if ( a.stars < b.stars ){
            return 1;
          }
          if ( a.stars > b.stars ){
            return -1;
          }
          return 0;
    }

    getSkills(){
        const sortedSkills = this.state.skills.sort(this.compareStars)
        const skills = sortedSkills.map( skill => (
        <div key={skill.id} className="skill">
            <li>{skill.skill}</li>
            <div className="stars">
                {skill.stars > 0 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                {skill.stars > 1 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                {skill.stars > 2 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                {skill.stars > 3 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                {skill.stars > 4 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
            </div>
            <div className="skills-edit">
                {this.props.preview? null 
                : <FontAwesomeIcon className="icon" icon={faPenToSquare} size="sm" />}
                {this.props.preview? null 
                : <FontAwesomeIcon className="icon" icon={faTrash} size="sm" onClick={ () => this.onClickDeleteSkill(skill.id)}/>}
            </div>
        </div>
        ))
        return skills;
    }

    addSkill(){
        if(this.state.skillInput.length > 0){
            const skill = {
                id: uniqid(),
                skill: this.state.skillInput,
                stars: this.state.starsInput,
            }
            this.setState({
                skills: this.state.skills.concat(skill),
                edit: !(this.state.edit),
                skillInput: '',
                starsInput: 5,
            })
        }
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

    render(){
        return(
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Skills</h2>
                    {this.getIcon()}
                </div>
                {this.state.edit? 
                    <div className="skill-add-container">
                        <div className="skill-add">
                            <label>Skill Name:</label>
                            <input onChange={e  => this.setState({skillInput: e.target.value})}/>
                            <label>Stars:</label>
                            <select onChange={e  => this.setState({starsInput: Number(e.target.value)})}>
                                <option value={5}>5</option>
                                <option value={4}>4</option>
                                <option value={3}>3</option>
                                <option value={2}>2</option>
                                <option value={1}>1</option>
                            </select>
                            <button onClick={this.addSkill.bind(this)}>Add</button>
                        </div>
                    </div>
                 : null}
                <div>
                    {this.getSkills()}
                </div>
            </div>
        )
    }

}

export default Skills;