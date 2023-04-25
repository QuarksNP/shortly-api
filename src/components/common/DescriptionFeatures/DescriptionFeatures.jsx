'use client'

import { useRef, useEffect } from 'react'
import styles from './DescriptionFeatures.module.css'

export default function DescriptionFeatures({ desc, title, icon, position }) {
    const cardRef = useRef(null);
    
    useEffect(() => {
        if(cardRef.current){
            cardRef.current.classList.add(position)
        }
    }, [])
    
    return(
        <article className={styles.features} ref={cardRef}>
            {icon}
            <h3 className={styles.featuresTitle}>{title}</h3>
            <p>{desc}</p>
        </article>
    )
}