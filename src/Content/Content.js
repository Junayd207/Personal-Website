import React from 'react'

import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

import './Content.css'
import Data from "../Data"
import Header from "../Header/Header"
import Email from "../Email/Email"

export default function Content() {
    const projectElements = Data.map(data => (
        <div className="project-container" key={data.id}>
            <h1 className="project-title">{data.title}</h1>
            <img className="project-image" src={data.src}/>
            <p className="project-description">{data.description}</p>
            <a className="project-url" target="_blank" href={data.url}>Link</a>
        </div>
    ))

	return(
        <div className="main-content">
            <Header/>
            <div className="flex">
                <div className="left-sidebar">
                    <h1 className="title-text">Hey, I'm <br/>Junayd</h1>
                    <div className="icons-container">
                        <a className="link" href="https://github.com/Junayd207/" target="_blank">                    
                            <BsGithub/>
                        </a>   
                        <a className="link" href="http://www.linkedin.com/in/junayd-hussain-32392b214/" target="_blank">
                            <BsLinkedin/>
                        </a>    
                    </div>
                    <Email/>
                </div>
                <div className="right-sidebar">
                    <h1 className="projects-title">Projects</h1>
                    {projectElements}
                    <div className="empty-div"/>
                </div>
            </div>
        </div>
    )
}

