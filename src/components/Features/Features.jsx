import FeatureIcon from "../common/FeatureIcon/FeatureIcon"
import brand from "../../..//public/icons/icon-brand-recognition.svg"
import detailed from "../../..//public/icons/icon-detailed-records.svg"
import fully from "../../..//public/icons/icon-fully-customizable.svg"
import DescriptionFeatures from "../common/DescriptionFeatures/DescriptionFeatures"
import styles from "./Features.module.css"

export default function Features() {

    const brandText = `Boots your brand recognition with each click.
    Generic links don't mean a thing. Branded link
    help instil confidence in your content.`
    
    const detailedText = `Gain insights into who is clicking
    your links. Knowing when and
    where people engage with your
    content helps inform better
    decisions.`
    
    const fullyText = `improve brand awareness and
    content discoverability through
    customizable links, supercharging
    audience engagement.`
    
    
    return(
        <>
            <article className={styles.descriptionFeatures}>
                <h2 className={styles.mainTitle}>Advanced Statistics</h2>
                <p>Track how your links are perfoming across the web
                    with our advanced statistics dashboard.
                </p>
            </article>
            
            <div className={styles.containerFeatures}>
                <DescriptionFeatures 
                    desc={brandText} 
                    title='Brand Recognition'
                    icon={<FeatureIcon icon={brand} />}
                    line={styles.line}
                    position={styles.start}
                    
                />
                
                <DescriptionFeatures 
                    desc={detailedText} 
                    title='Detailed Records'
                    icon={<FeatureIcon icon={detailed} />}
                    line={styles.line}
                    position={styles.center}
                />
                
                <DescriptionFeatures 
                    desc={fullyText} 
                    title='Fully Customizable'
                    icon={<FeatureIcon icon={fully} />} 
                    position={styles.end}
                />
            </div>
        </>
    )
}
