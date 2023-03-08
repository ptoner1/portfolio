import { github_white, new_tab_icon } from '../icons/nav-icons';
import { Link } from 'react-router-dom';


export default function MainDescription({ screen, project }) {

    return (
        <div className="project" screen={screen}>

            <div className="project__title">
                <h1 className="project__title-title">{project.title}</h1>
                {project.repo
                    ? (

                        <a
                            className='project__title__link'
                            href={`https://www.github.com/ptoner1/${project.repo}`}
                            target='_blank'>
                            <img
                                className='project__title__link-icon'
                                src={github_white}
                                alt='github' />
                        </a>
                    ) : ''}
                {project.url
                    ? project.url !== '/scrollanimation'
                        ? (
                            <a
                                href={project.url}
                                className="project__title__link"
                                target='_blank'>
                                <img
                                    className='project__title__link-icon'
                                    src={new_tab_icon}
                                    alt='open project in new tab' />
                            </a>
                        ) : (
                            <Link
                                to={project.url}
                                className="project__title__link"
                                target='_blank'
                            >
                                <img
                                    className='project__title__link-icon'
                                    src={new_tab_icon}
                                    alt='open project in new tab' />

                            </Link>
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


            <div className="project__description">
                {project.Description()}
            </div>
        </div>
    )
}