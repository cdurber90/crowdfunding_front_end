import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";


function HomePage() {
    const { projects } = useProjects();

    return (
        <div id="project-list">
            <h1>Help a Healthcare Hero!</h1>
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    );
}

export default HomePage