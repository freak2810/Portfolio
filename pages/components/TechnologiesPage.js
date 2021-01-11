import styles from "../../styles/Technologies.module.scss";
import TechnologiesList from "./TechnologiesList";

export default function TechnologiesPage() {
    return <section className={styles.technologies}>
        <div>
            <h1 className={styles.heading}>Technologies</h1>
        </div>
        <TechnologiesList/>
    </section>
}