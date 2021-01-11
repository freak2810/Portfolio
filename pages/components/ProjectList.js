import styles from "../../styles/Projects.module.scss";

const projects = [
    {
        name: 'ACM MVSR Website',
        link: 'https://github.com/AdityaManikanth2810/ACM-Main-Page',
        tags: [
            'javascript',
            'react',
            'nextjs',
        ],
        highlights: [
            'Designed and developed a website using JavaScript & React.js',
            'Created a Content Management System (Headless CMS) using\n Sanity.io',
            'Made performance improvements like lazy load and image optimization.',
            'Used various GitHub tools to ensure the quality and performance'
        ]
    },
    {
        name: 'E - Commerce Application',
        link: 'https://github.com/AdityaManikanth2810/NodeJS',
        tags: [
            'javascript',
            'html',
            'css',
            'ejs',
            'nodejs',
            'expressjs',
            'mongodb'
        ],
        highlights: [
            'Developed a backend application using NodeJS, ExpressJS and MongoDB',
            'User can authenticate and add products and view the products',
            'User can place the order which redirects to a dummy gateway created by StripeJS',
            'Build the views using HTML and EJS Templating Engine'
        ]
    }
]

export default function EducationList() {
    return <div className={styles.projectList}>
        {
            projects.map(project => <div className={styles.project}>
                <a href={project.link}>
                    <h1>{project.name}</h1>
                </a>
                <div className={styles.tags}>
                    {
                        project.tags.map(tag => <span>{tag}</span>)
                    }
                </div>
                <ul>
                    {
                        project.highlights.map(element => <li>{element}</li>)
                    }
                </ul>
            </div>)
        }
    </div>
}