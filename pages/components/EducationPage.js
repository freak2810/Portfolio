import styles from "../../styles/Education.module.scss";
import EducationList from "./EducationList";


export default function EducationPage() {
    return <section className={styles.education}>
        <div className={styles.heading}>
            Education
        </div>
        <EducationList/>
    </section>
}