'use client'

import { useState, useRef } from 'react'
import styles from './URL.module.css'

export default function URL({original_link, short_link}){
    
    const [isCopied, setIsCopied] = useState(false);
    let copied = useRef()

    function handleCopyLink() {
        navigator.clipboard.writeText(short_link);
        setIsCopied(true);
        copied.current.classList.add(styles.isCopied)
        setTimeout(() => {
        setIsCopied(false)
        copied.current.classList.remove(styles.isCopied)
    }, 2000);
    };

    
    return(
        <article className={styles.container}>

            <p className={styles.originalLink}>{original_link}</p>
            <div className={styles.copyContainer}>
                <span>{short_link}</span>
                <button className={styles.btnCopy} ref={copied} type="button" onClick={handleCopyLink}>
                    {isCopied ? "Copied!" : "Copy"}
                </button>
            </div>
        </article>
    )
}