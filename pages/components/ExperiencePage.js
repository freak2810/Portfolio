import styles from "../../styles/Experience.module.scss";
import ExperienceList from "./ExperienceList";


export default function ExperiencePage() {
    return <section className={styles.experience}>
        <div className={styles.heading}>
            Experience
        </div>
        <ExperienceList/>
    </section>
}