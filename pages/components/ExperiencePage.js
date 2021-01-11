import styles from "../../styles/Experience.module.scss";
import ExperienceList from "./ExperienceList";


export default function ExperiencePage() {
    return <section className={styles.experience}>
        <div>
            <h1 className={styles.heading}>Experience</h1>
        </div>
        <ExperienceList/>
    </section>
}