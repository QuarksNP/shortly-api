import ButtonGetStarted from '../common/btnGetStarted/btnGetStarted'
import styles from './GetStarted.module.css'

export default function GetStarted(){
    return(
        <section className={styles.section}>
            <div className={styles.background}></div>
            <article className={styles.container}>
                <h2 className={styles.title}>Boost your links today</h2>
                <ButtonGetStarted />
            </article>
        </section>
    )
}