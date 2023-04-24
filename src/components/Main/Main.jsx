import styles from './Main.module.css'

export default function Main({onSubmit, error}){
    
    return (
        <main className={styles.main}>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.background}></div>
                <div className={styles.containerForm}>
                        <input 
                        className={styles.input}
                        type="text"
                        name='link'
                        minLength={1}
                        placeholder="Shorten a link here..."
                        />
                        <p className={styles.error}>{error}</p>
                </div>
                <button className={styles.button} type="summit" before=''>Shorten It!</button>
            </form>
        </main> 
        
    )
}
