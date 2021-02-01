import styles from "../../styles/Projects.module.scss";
import ProjectList from "./ProjectList";


export default function ProjectsPage() {
    return <section className={styles.projects}>
        <div className={styles.heading}>
            Projects
        </div>
        <ProjectList/>
    </section>
}