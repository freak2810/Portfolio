import styles from "../../styles/Experience.module.scss";

const experience = [
    {
        role: 'Web Development Intern',
        company: 'InCampus Ltd.',
        type:'Internship',
        duration: '06/2020 - 08/2020 (2 months)',
        tasks: [
            'Front End Development using JavaScript and React',
            'Worked on a blog using CSS and HTML'
        ]
    },
    {
        role: 'Junior Software Developer',
        company: 'MockTheta, Inc.',
        type:'Internship',
        duration: '08/2019 - 07/2020 (1 year)',
        tasks: [
            'Front End Development using TypeScript, React Native & GraphQL',
            'Built Reusable Components'
        ]
    },
]

export default function ExperienceList() {
    return <div className={styles.experienceList}>
        {
            experience.map(work => <div className={styles.place}>
                <h1>{work.role}</h1>
                <h3>{work.company}</h3>
                <p>{work.duration}</p>
                <p>{work.type}</p>
                <ul>
                    {
                        work.tasks.map(task => <li>{task}</li>)
                    }
                </ul>
            </div>)
        }

    </div>
}