import React, { useState, useEffect } from "react";
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash , faSquareCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import uniqid from "uniqid";

export default function Skills(props){

    const [skillInput, setSkillInput] = useState('');
    const [starsInput, setStarsInput] = useState(5);
    const [skills, setSkills] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect( () => {
        if(props.autofill){
            setSkills([
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
        ])
           }
           else{
            setSkills([]);
           }
    }, [props.autofill])

    const compareStars = (a, b) => {
        if ( a.stars < b.stars ){
            return 1;
          }
          if ( a.stars > b.stars ){
            return -1;
          }
          return 0;
    }

    const getSkills = () => {
        const sortedSkills = skills.sort(compareStars)
        const formattedSkills = sortedSkills.map( skill => (
        <div key={skill.id} className={props.preview? "skill-preview" : "skill"}>
            {skill.edit? <input value={skillInput} onChange={e  => (setSkillInput(e.target.value))}/> : <li>{skill.skill}</li>}
            {skill.edit? 
                <select defaultValue={skill.stars} onChange={e  => setStarsInput(Number(e.target.value))}>
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
                {props.preview? null 
                : <FontAwesomeIcon className="icon" icon={skill.edit? faSquareCheck: faPenToSquare} size="sm" onClick={ () => onClickEditSkill(skill.id)}/>}
                {props.preview? null 
                : <FontAwesomeIcon className="icon" icon={faTrash} size="sm" onClick={ () => onClickDeleteSkill(skill.id)}/>}
            </div>
        </div>
        ))
        return formattedSkills;
    }

    const addSkill = () => {
        if(skillInput.length > 0){
            const skill = {
                id: uniqid(),
                skill: skillInput,
                stars: starsInput,
            }
            setSkills(skills.concat(skill));
            setEdit(!edit);
            setSkillInput('');
            setStarsInput(5);
        }
    }

    const onClickEditSkill = (id) => {
        let index = 0;
        let updatedSkills = [...skills];
        for(let i = 0; i < skills.length; i++){
            if(skills[i].id===id){
                index = i;
            }
            else if(skills[i].edit===true){
                let currentSkill = {...updatedSkills[i]};
                currentSkill.edit = false;
                updatedSkills[i] = currentSkill;
            }
        }
        let skill = {...updatedSkills[index]};
        setSkillInput(skill.skill);
        setStarsInput(skill.stars);
        if(skill.edit){
            skill.skill = skillInput
            skill.stars = starsInput;
        }
        skill.edit = !skill.edit;
        updatedSkills[index] = skill;
        setSkills(updatedSkills);
    }

    const onClickDeleteSkill = (id) => {
        const filteredSkills = skills.filter( skill => skill.id !== id);
        setSkills(filteredSkills);
    }

    const onClickEdit = () => {
        setEdit(!edit);
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
        if(!props.preview){
            if(edit){
                return(
                    <div className="skill-add-container">
                        <div className="skill-add">
                            <label>Skill Name:</label>
                            <input onChange={e  => setSkillInput(e.target.value)}/>
                            <label>Stars:</label>
                            <select onChange={e  => setStarsInput(Number(e.target.value))}>
                                <option value={5}>5</option>
                                <option value={4}>4</option>
                                <option value={3}>3</option>
                                <option value={2}>2</option>
                                <option value={1}>1</option>
                            </select>
                            <button onClick={addSkill}>Add</button>
                        </div>
                    </div>
                )
            }
        }
    }

    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Skills</h2>
                {getIcon()}
            </div>
            {getInputForm()}
            <div>
                {getSkills()}
            </div>
        </div>
    )
}