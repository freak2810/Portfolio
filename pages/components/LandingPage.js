import styles from "../../styles/Landing.module.scss"

const height = 40;
const width = 40;

export default function LandingPage() {
    const SocialLinks = () => {
        return <div className={styles.links}>
            <a href="mailto:adityamanikanthrao@gmail.com" target='blank'>
                <img
                    src="/Social/gmail.svg"
                    alt="Gmail Link"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://www.linkedin.com/in/aditya-manikanth-rao-11874819a/" target='blank'>
                <img
                    src="/Social/linkedin.svg"
                    alt="LinkedIn Link"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://twitter.com/rao_manikanth" target='blank'>
                <img
                    src="/Social/twitter.svg"
                    alt="@rao_manikanth"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://discord.gg/QGZVNsJZ" target='blank'>
                <img
                    src="/Social/discord.svg"
                    alt="Discord Link"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://www.instagram.com/aditya_theawsm1/" target='blank'>
                <img
                    src="/Social/instagram.svg"
                    alt="Instagram Link"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://github.com/AdityaManikanth2810" target='blank'>
                <img
                    src="/Social/github.svg"
                    alt="Github Link"
                    width={width}
                    height={height}
                />
            </a>
        </div>
    }

    return <section className={styles.landingPage}>
        <h1>Aditya{' '}
            <wbr/>
            Manikanth Rao
        </h1>
        <h2>Full Stack Developer</h2>
        <SocialLinks/>
    </section>
}