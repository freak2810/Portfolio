import styles from "../../styles/Landing.module.scss"
import Image from "next/image";

const height = 40;
const width = 40;

export default function LandingPage() {
    const SocialLinks = () => {
        return <div className={styles.links}>
            <Image
                src="/Social/gmail.svg"
                alt="Gmail Link"
                width={width}
                height={height}
            />
            <Image
                src="/Social/linkedin.svg"
                alt="LinkedIn Link"
                width={width}
                height={height}
            />
            <Image
                src="/Social/twitter.svg"
                alt="Twitter Link"
                width={width}
                height={height}
            />
            <Image
                src="/Social/discord.svg"
                alt="Discord Link"
                width={width}
                height={height}
            />
            <Image
                src="/Social/instagram.svg"
                alt="Instagram Link"
                width={width}
                height={height}
            />
        </div>
    }

    return <section className={styles.landingPage}>
        <h1>Aditya Manikanth Rao</h1>
        <h2>Full Stack Developer</h2>
        <SocialLinks/>
    </section>
}