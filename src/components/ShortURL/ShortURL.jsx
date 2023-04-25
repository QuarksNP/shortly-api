'use client'

import Features from '../Features/Features'
import URL from '../common/URL/URL'
import Main  from '../Main/Main'
import useHandleSubmitLink from '@/hooks/useHandleSubmitLink/useHandleSubmitLink'
import styles from './ShortURL.module.css'

export default function ShortURL() {
    
    const {handleSubmit, linksData, error} = useHandleSubmitLink()
    
    return (    
        <>
            <Main onSubmit={handleSubmit} error={error}/>
            
            <section className={styles.mainFeatures}>  
                <div className={styles.linksContainer}>
                    {linksData.map((storageData, index) => {
    
                        return(
                            <URL key={index} original_link={storageData.original_link} short_link={storageData.short_link} />
                        )
                    })}
                </div>
                <Features />
            </section>
        </>
    )
}
