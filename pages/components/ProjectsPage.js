import styles from "../../styles/Projects.module.scss";
import ProjectList from "./ProjectList";


export default function ProjectsPage() {
    return <section className={styles.projects}>
        <div>
            <h1 className={styles.heading}>Projects</h1>
        </div>
        <ProjectList/>
    </section>
}