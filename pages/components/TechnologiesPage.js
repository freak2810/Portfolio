import styles from "../../styles/Technologies.module.scss";
import TechnologiesList from "./TechnologiesList";

export default function TechnologiesPage() {
    return <section className={styles.technologies}>
        <div className={styles.heading}>
           Technologies
        </div>
        <TechnologiesList/>
    </section>
}