import Image from 'next/image'
import styles from "../../styles/Landing.module.scss"

const height = 40;
const width = 40;

export default function LandingPage() {
    const SocialLinks = () => {
        return <div className={styles.links}>
            <a href="mailto:adityamanikanthrao@gmail.com"
               aria-roledescription='Link'
               title="adityamanikanthrao@gmail.com"
               target='blank'>
                <Image
                    src="/Social/gmail.svg"
                    alt="adityamanikanthrao@gmail.com"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://github.com/AdityaManikanth2810"
               aria-roledescription='Link'
               title="AdityaManikanth2810"
               target='blank'>
                <Image
                    src="/Social/github.svg"
                    alt="AdityaManikanth2810"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://www.linkedin.com/in/aditya-manikanth-rao-11874819a/"
               title="Aditya Manikanth Rao"
               target='blank'>
                <Image
                    src="/Social/linkedin.svg"
                    alt="Aditya Manikanth Rao"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://twitter.com/rao_manikanth"
               title="@rao_manikanth"
               target='blank'>
                <Image
                    src="/Social/twitter.svg"
                    alt="@rao_manikanth"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://discord.gg"
               title="freak2810#9756"
               target='blank'>
                <Image
                    src="/Social/discord.svg"
                    alt="freak2810#9756"
                    width={width}
                    height={height}
                />
            </a>
            <a href="https://www.instagram.com/aditya_theawsm1/"
               title="aditya_theawsm1"
               target='blank'>
                <Image
                    src="/Social/instagram.svg"
                    alt="aditya_theawsm1"
                    width={width}
                    height={height}
                />
            </a>

        </div>
    }

    return <section className={styles.container}>
        <h1>Aditya Manikanth Rao</h1>
        <h2>Full Stack Developer</h2>
        <SocialLinks/>
    </section>
}