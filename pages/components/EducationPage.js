import styles from "../../styles/Education.module.scss";
import EducationList from "./EducationList";


export default function EducationPage() {
    return <section className={styles.education}>
        <div>
            <h1 className={styles.heading}>Education</h1>
        </div>
        <EducationList/>
    </section>
}