import Image from 'next/image'
import styles from "../../styles/Technologies.module.scss";

const height =  40;
const width = 40;

const technologies = [
    {
        src: '/Technologies/javascript.svg',
        alt: 'JavaScript'
    },
    {
        src: '/Technologies/typescript.svg',
        alt: 'TypeScript'
    },
    {
        src: '/Technologies/c.svg',
        alt: 'C++'
    },
    {
        src: '/Technologies/html.svg',
        alt: 'HTML'
    },
    {
        src: '/Technologies/css.svg',
        alt: 'CSS'
    },
    {
        src: '/Technologies/react.svg',
        alt: 'ReactJS'
    },
    {
        src:'/Technologies/sass.svg',
        alt:'SASS'
    },
    {
        src:'/Technologies/node-js.svg',
        alt:'NodeJS'
    },
    {
        src:'/Technologies/express.svg',
        alt:'ExpressJS'
    },
    {
        src:'/Technologies/git.svg',
        alt:'Git'
    },
    {
        src:'/Technologies/mysql.svg',
        alt:'MySQL'
    },
    {
        src:'/Technologies/postgresql.svg',
        alt:'PostgreSQL'
    },
    {
        src:'/Technologies/mongodb.svg',
        alt:'MongoDB'
    },
    {
        src:'/Technologies/visual-studio-code.svg',
        alt:'VSCode'
    },
    {
        src:'/Technologies/webstorm.svg',
        alt:'Web Storm'
    }
]

export default function TechnologiesList() {
    return <div className={styles.technologyList}>
        {
            technologies.map((tech,index) => <div key={index}>
                    <Image
                        src={tech.src}
                        alt={tech.alt}
                        height={height}
                        width={width}
                        className={styles.image}
                    />
                    <p>{tech.alt}</p>
                </div>
            )
        }
    </div>
}