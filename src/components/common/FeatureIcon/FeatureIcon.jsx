import Image from 'next/image'
import styles from './FeatureIcon.module.css'

export default function({icon}) {
    return(
        <div className={styles.iconContainer}>
            <Image src={icon} width={40} height={40}/>
        </div>
    )
}