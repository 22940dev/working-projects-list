import React from 'react'
import projectsList from './projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faReact, faJs, faHtml5, faCss3Alt, faSass, faBootstrap, faNodeJs } from '@fortawesome/free-brands-svg-icons'

function ProjectComponent() {

    const projects = projectsList.map(prod => 
        <div id="prod1"  className="cStudy" key={prod.name}>
            <img className="cSimg" src={prod.img} alt="site 1" />
            <img id="active" src={prod.img2} alt="website" />
             <div className="project-description-box"></div>
                <div  id="codeBox" className="langLogo" >  
                    <FontAwesomeIcon icon={prod.react ? faReact : ''} id="react" size="2x" />
                    <FontAwesomeIcon icon={prod.jsLogo ? faJs : ''} id="jsLogo" size="2x"/>
                    <FontAwesomeIcon icon={prod.htmlLogo ? faHtml5 : ''} id="htmlLogo" size="2x"/>
                    <FontAwesomeIcon icon={prod.cssLogo ? faCss3Alt : ''} id="cssLogo" size="2x"/>
                    <FontAwesomeIcon icon={prod.sass ? faSass : ''} id="sass" size="2x"/>
                    <FontAwesomeIcon icon={prod.b4Logo ? faBootstrap : ''} id="b4Logo" size="2x"/>
                    <FontAwesomeIcon icon={prod.node ? faNodeJs : ''} id="node" size="2x"/>
                </div>
                <div className="project-description">
                    <h2 id="charWord">{prod.name}</h2><p  id="description" style={{color: "whitesmoke"}}>{prod.description}</p>
                </div>
                <div className="code-btn">
                    <a id="live" href={prod.live}  target="_blank" rel="noopener noreferrer">Live Site</a>
                 { prod.sample &&   <a id="sample" href={prod.sample}  target="_blank" rel="noopener noreferrer">Code Sample</a> }
                </div> 
            </div>  
        )
       
    return (
        <div>
              {projects}  
        </div>
        
    )
}



export default ProjectComponent
