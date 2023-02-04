import github_white from '../icons/nav-icons/github_white.png'
import new_tab_icon from '../icons/nav-icons/new_tab_icon.png'
import { data } from '../../projectObjects';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function MainDescription({ name, screen }) {

    const [project] = data.filter(p => p.name === name);

    const [overflowHidden, setOverflowHidden] = useState(true);


    return (
        <div className="project" screen={screen}>

            <div className="project__title">
                <h1 className="project__title-title">{project.title}</h1>

                <a
                    className='project__title__link'
                    href={`https://www.github.com/ptoner1/${project.repo}`}
                    target='_blank'>
                    <img
                        className='project__title__link-icon'
                        src={github_white}
                        alt='github' />
                </a>
                {project.url
                    ? (
                        <a
                            className="project__title__link"
                            href={project.url}
                            target='_blank'>
                            <img
                                className='project__title__link-icon'
                                src={new_tab_icon}
                                alt='open project in new tab' />
                        </a>
                    )
                    : ''
                }
            </div>

            <div className="project__skills">
                <h4 className="project__skills-title">
                    {project.video ? 'Skills:' : 'Strengths:'}
                </h4>
                <div className="project__skills-list">
                    {project.skills.map((skill, i) => {
                        if (i === 0) return <span key={i}>{skill}</span>
                        return (
                            <div key={i}>
                                | <span>{skill}</span>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div
                onClick={() => setOverflowHidden(!overflowHidden)}
                className="project__description"
                style={overflowHidden ? {} : { display: 'block' }}>
                {project.Description()}
            </div>
        </div>
    )
}