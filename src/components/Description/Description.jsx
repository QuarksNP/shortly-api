import Image from "next/image"
import ilustration from "../../../public/images/illustration-working.svg"
import GetStarted from "../common/btnGetStarted/btnGetStarted"
import styles from "./Description.module.css"

export default function Description() {
    return (
        <section className={styles.section}>
            <Image src={ilustration} width={600} height={600} alt="working-ilustration"/>
            <div className={styles.article}>
                <article>
                    <h1 className={styles.title}>More than just shorter links</h1>
                    <p className={styles.description}>
                        Build your brand is recognition and get detailed insight on how your
                            links are performing.
                    </p>
                </article>
                <GetStarted />
            </div>
        </section>
    );
};
