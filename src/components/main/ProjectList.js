import { data } from '../../projectObjects';

export default function ProjectList({ screen, setProject, currentProject }) {

    function copy(e) {
        const email = e.target.innerText;
        navigator.clipboard.writeText(email);
        e.target.className += ' contact__copied'
        setTimeout(() => {
            e.target.className = 'contact'
        }, 2800)
    }

    return (
        <div className="project-list" screen={screen}>
            <h3 className="project-list__title">
                Projects
            </h3>
            <div className="flex">
                <div className="project-list__vertical-gradient" />
                <ul className="project-list__ul">
                    {data.map(project => {
                        const { name, title } = project;
                        if (currentProject === name) return;
                        return (
                            <button onClick={() => setProject(name)} className="project-list__item" key={project.id}>
                                <div className="project-list__item__name">
                                    {name}
                                </div>
                                <div className="project-list__item__underline" />
                            </button>
                        )
                    }
                    )}
                </ul>
            </div>
            <button onClick={copy} className='contact'>
                paul@paulyprograms.com
            </button>
        </div>
    )

}