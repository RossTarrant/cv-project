import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CVMain from "./components/CVMain";
import './styles/App.css';

export default function App(){

  const [preview, setPreview] = useState(false);
  const [autofill, setAutofill] = useState(false);

  const onPreviewClick = () => {
    setPreview(!preview);
  }

  const onAutofillClick = () => {
      setAutofill(!autofill);
  }

  return (
    <div className="content">
      <div className="settings">
        <h1>CV Builder</h1>
        <div className="settings-buttons">
            <button onClick={onAutofillClick}>{autofill? 'Reset Details' : 'Autofill Details'}</button>
            <button onClick={onPreviewClick}>{preview? 'Edit CV' : 'Preview CV'}</button>
        </div>
      </div>
      <div className="cv">
        <Header className="header" autofill={autofill} preview={preview}/>
        <Sidebar className="sidebar" autofill={autofill} preview={preview}/>
        <CVMain  autofill={autofill} preview={preview}/>
      </div>
      
    </div>
    );
}