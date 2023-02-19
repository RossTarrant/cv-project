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
            skills: [],
            edit: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.autofill !== this.props.autofill) {
               if(this.props.autofill){
                this.setState({
                    skills: [
                        {
                        id: uniqid(),
                        skill:"HTML",
                        stars: 3,
                        edit: false,
                    }, 
                    {
                        id: uniqid(),
                        skill: "CSS",
                        stars: 3,
                        edit: false,
                    },
                    {
                        id: uniqid(),
                        skill: "React.js",
                        stars: 5,
                        edit: false,
                    },
                    {
                        id: uniqid(),
                        skill: "Javascript",
                        stars: 5,
                        edit: false,
                    },
                    {
                        id: uniqid(),
                        skill: "Python",
                        stars: 2,
                        edit: false,
                    }
                ]
                })
               }
               else{
                this.setState({
                    skills: []
                })
               }
        }
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
        <div key={skill.id} className={this.props.preview? "skill-preview" : "skill"}>
            {skill.edit? <input value={this.state.skillInput} onChange={e  => this.setState({skillInput: e.target.value})}/> : <li>{skill.skill}</li>}
            {skill.edit? 
                <select defaultValue={skill.stars} onChange={e  => this.setState({starsInput: Number(e.target.value)})}>
                    <option value={5}>5</option>
                    <option value={4}>4</option>
                    <option value={3}>3</option>
                    <option value={2}>2</option>
                    <option value={1}>1</option>
                </select>
            : 
                <div className="stars">
                    {skill.stars > 0 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                    {skill.stars > 1 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                    {skill.stars > 2 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                    {skill.stars > 3 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                    {skill.stars > 4 ? <FontAwesomeIcon icon={faStar} size="sm" /> : null}
                </div>
            }
            <div className="skills-edit">
                {this.props.preview? null 
                : <FontAwesomeIcon className="icon" icon={skill.edit? faSquareCheck: faPenToSquare} size="sm" onClick={ () => this.onClickEditSkill(skill.id)}/>}
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

    onClickEditSkill(id){
        let index = 0;
        let updatedSkills = [...this.state.skills];
        for(let i = 0; i < this.state.skills.length; i++){
            if(this.state.skills[i].id===id){
                index = i;
            }
            else if(this.state.skills[i].edit===true){
                console.log(this.state.skills)
                let currentSkill = {...updatedSkills[i]};
                currentSkill.edit = false;
                updatedSkills[i] = currentSkill;
            }
        }
        let skill = {...updatedSkills[index]};
        this.setState({
            skillInput: skill.skill,
            starsInput: skill.stars
        })
        if(skill.edit){
            skill.skill = this.state.skillInput
            skill.stars = this.state.starsInput;
        }
        skill.edit = !skill.edit;
        updatedSkills[index] = skill;
        this.setState({skills: updatedSkills});
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

    getInputForm(){
        if(!this.props.preview){
            if(this.state.edit){
                return(
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
                )
            }
        }
    }

    render(){
        return(
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Skills</h2>
                    {this.getIcon()}
                </div>
                {this.getInputForm()}
                <div>
                    {this.getSkills()}
                </div>
            </div>
        )
    }

}

export default Skills;