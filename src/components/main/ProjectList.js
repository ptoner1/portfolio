import { data } from '../../projectsData';

export default function ProjectList({ screen, setProject, currentProject }) {

    return (
        <div className="project-list" screen={screen}>
            <h3 className="project-list__title">
                Projects
            </h3>
            <div className="flex">
                <div className="project-list__vertical-gradient" />
                <ul className="project-list__ul">
                    {data.map(project => {
                        const { name } = project;
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
        </div>
    )

}