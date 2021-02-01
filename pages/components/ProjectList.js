import styles from "../../styles/Projects.module.scss";
import Image from "next/image";

const projects = [
    {
        name: 'ACM MVSR Website',
        link: 'https://github.com/AdityaManikanth2810/ACM-Main-Page',
        site: 'https://mvsr.acm.org/',
        tags: [
            'javascript',
            'reactjs',
            'sanity.io',
            'css'
        ],
        description: 'A Front End application build in JavaScript and React for ACM MVSR Student Chapter. This application uses Sanity.io as a headless CMS.'
    },
    {
        name: 'E - Commerce Application',
        link: 'https://github.com/AdityaManikanth2810/NodeJS',
        site:'https://node-js-git.herokuapp.com/',
        tags: [
            'javascript',
            'html',
            'css',
            'ejs',
            'nodejs',
            'expressjs',
            'mongodb'
        ],
        description:'A NodeJS E-Commerce application which does all the basic crud operations along with authentication and authorization.'
    },
    {
        name:'Story Books Application',
        link:'https://github.com/AdityaManikanth2810/Story-Books',
        tags:[
            'javascript',
            'html',
            'css',
            'handlebars',
            'nodejs',
            'expressjs',
            'mongodb',
            'passportjs'
        ],
        description: `A NodeJS Application which allows user to write stories, view other's stories, edit or delete a story. The application also uses passport to enable google authentication.`
    }


]

export default function EducationList() {
    return <div className={styles.projectList}>
        {
            projects.map((project, index) => <div key={index} className={styles.project}>
                <h1>{project.name}</h1>
                <div className={styles.tags}>
                    {
                        project.tags.map(tag => <span>{tag}</span>)
                    }
                </div>
                <p>{project.description}</p>
                <div className={styles.links}>
                    {
                        !project.link ? null :
                        <a href={project.link}
                           aria-roledescription='Link'
                           title="GitHub Repo"
                           target='blank'
                        >
                            <Image
                                className={styles.eachIcon}
                                src="/Links/github.svg"
                                alt="GitHub Link"
                                width={30}
                                height={30}
                            />
                        </a>
                    }
                    {
                        !project.site ? null :
                        <a href={project.site}
                           aria-roledescription='Link'
                           title="Host Link"
                           target='blank'
                        >
                            <Image
                                className={styles.eachIcon}
                                src="/Links/web.svg"
                                alt="Website Link"
                                width={30}
                                height={30}
                            />
                        </a>
                    }
                </div>

            </div>)
        }
    </div>
}