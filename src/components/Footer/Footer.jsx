import Logo from '../common/Logo/Logo'
import { BsInstagram, BsPinterest, BsTwitter, BsFacebook } from 'react-icons/bs'
import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <Logo color={"#ddd"}/>
            <div className={styles.container}>
                <ul className={styles.listContainer}>
                    <h5 className={styles.title}>Features</h5>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
                
                <ul className={styles.listContainer}>
                <h5 className={styles.title}>Resources</h5>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
                
                <ul className={styles.listContainer}>
                <h5 className={styles.title}>Company</h5>
                    <li>About</li>
                    <li>Our Teams</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            
            <ul className={styles.iconsContainer}>
                <a href=""><li className={styles.icons}><BsFacebook /></li></a>
                <a href=""><li className={styles.icons}><BsTwitter /></li></a>
                <a href=""><li className={styles.icons}><BsPinterest /></li></a>
                <a href=""><li className={styles.icons}><BsInstagram /> </li></a>
            </ul>
        </footer>
    )
}