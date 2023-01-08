import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import typescript from '../assets/type.png';
import php from '../assets/php.png';
import java from '../assets/javalogo.png';
import python from '../assets/python.png';
import clanguage from '../assets/c++.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import tailwind from '../assets/tailwind.jpg';
import git from '../assets/git.png';
import '../styles/skills.css';
import github from '../assets/github.png';
import mysql from '../assets/mysql.jpg';
import oracle from '../assets/oracle.png';
function Skills() {
    return (
        <div className='container' id='skills'>
        <span className='skills-title'> Skills</span>
        <div className='skills-section'>
            <div className='box web-dev'>
                <span className='title-box'>Web development</span>
                <div className='skill'>
                    <div className='skill-title'><img src={html} alt="htmlImg" className='html-img' /><span className='span-html'>HTML5</span></div>
                    <div className="progress-bar">
                        <div className="html-progress"><span className='pourc-html'>90%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={css} alt="htmlImg" className='html-img' /><span className='span-css'>CSS3</span></div>
                    <div className="progress-bar">
                        <div className="css-progress"><span className='pourc-css'>90%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={javascript} alt="htmlImg" className='html-img' /><span className='span-javascript'>Javascript</span></div>
                    <div className="progress-bar">
                        <div className="javascript-progress"><span className='pourc-javascript'>86%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={typescript} alt="htmlImg" className='html-img' /><span className='span-typescript'>Typescript</span></div>
                    <div className="progress-bar">
                        <div className="typescript-progress"><span className='pourc-typescript'>40%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={php} alt="htmlImg" className='html-img' /><span className='span-php'>PHP</span></div>
                    <div className="progress-bar">
                        <div className="php-progress"><span className='pourc-php'>65%</span></div>
                    </div>
                </div>
            </div>
            <div className='box programmation'>
            <span className='title-box'>Pragramming languages</span>
                <div className='skill'>
                    <div className='skill-title'><img src={python} alt="htmlImg" className='html-img' /><span className='span-python'>Python</span></div>
                    <div className="progress-bar">
                        <div className="python-progress"><span className='pourc-python'>65%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={java} alt="htmlImg" className='html-img' /><span className='span-java'>Java</span></div>
                    <div className="progress-bar">
                        <div className="java-progress"><span className='pourc-java'>60%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={clanguage} alt="htmlImg" className='html-img' /><span className='span-c'>C++</span></div>
                    <div className="progress-bar">
                        <div className="c-progress"><span className='pourc-c'>40%</span></div>
                    </div>
                </div>
               
            </div>
            <div className='box frameworks'>
            <span className='title-box'>Frameworks</span>
                <div className='skill'>
                    <div className='skill-title'><img src={angular} alt="htmlImg" className='html-img' /><span className='span-angular'>Angular</span></div>
                    <div className="progress-bar">
                        <div className="angular-progress"><span className='pourc-angular'>60%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={react} alt="htmlImg" className='html-img' /><span className='span-react'>ReactJs</span></div>
                    <div className="progress-bar">
                        <div className="react-progress"><span className='pourc-react'>45%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={tailwind} alt="htmlImg" className='html-img' /><span className='span-tailwind'>TailwindCSS</span></div>
                    <div className="progress-bar">
                        <div className="tailwind-progress"><span className='pourc-tailwind'>80%</span></div>
                    </div>
                </div>
            </div>
            <div className='box databases'>
            <span className='title-box'>DB & development platforms</span>
                <div className='skill'>
                    <div className='skill-title'><img src={mysql} alt="htmlImg" className='html-img' /><span className='span-mysql'>Mysql</span></div>
                    <div className="progress-bar">
                        <div className="mysql-progress"><span className='pourc-mysql'>92%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={oracle} alt="htmlImg" className='html-img' /><span className='span-oracle'>Oracle</span></div>
                    <div className="progress-bar">
                        <div className="oracle-progress"><span className='pourc-oracle'>70%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={github} alt="htmlImg" className='html-img' /><span className='span-github'>Github</span></div>
                    <div className="progress-bar">
                        <div className="github-progress"><span className='pourc-github'>80%</span></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className='skill-title'><img src={git} alt="htmlImg" className='html-img' /><span className='span-git'>Git</span></div>
                    <div className="progress-bar">
                        <div className="git-progress"><span className='pourc-git'>75%</span></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Skills
