import styles from "../../styles/Education.module.scss";

const education = [
    {
        class: 'Bachelor of Engineering (B.E), Computer Science',
        college: 'Maturi Venkata Subba Rao (MVSR) Engineering College',
        city: 'Hyderabad',
        duration: '08/2017 - Present (4 Years)',
        marks: '7.69 CGPA'
    },
    {
        class: 'XII (Senior Secondary)',
        college: 'Sri Chaitanya Junior Kalasala',
        city: 'Hyderabad',
        duration: '06/2015 - 05/2017 (2 Years)',
        marks: '96.5%'
    },
    {
        class: 'X (Secondary)',
        college: 'JSM High School',
        city: 'Warangal',
        duration: '05/2015',
        marks: '9.7 CGPA'
    }
]

export default function EducationList() {
    return <div className={styles.educationList}>
        {
            education.map(study => <div className={styles.place}>
                <h1>{study.class}</h1>
                <h3>{study.college} <span>{study.city}</span></h3>
                <p>{study.duration}</p>
                <p className={styles.marks}>{study.marks}</p>
            </div>)
        }

    </div>
}