import styles from '../styles/Home.module.css'

const Footer = () => {
return(
<div className={styles.global}>
<div className={styles.first}>
    <div className={styles.info}>
        <span>Conditions générales d'utilisation</span><br/>
        <span>Contact</span><br/>
        <span>A propos</span>
    </div>
    <div className={styles.socials}>
        <span>Réseaux sociaux</span>
        <ul>
        <li><a href=''><img src='instagram.png'/></a></li>
        <li><a href=''><img src='linkedin.png'/></a></li>
        </ul>
    </div>
    </div>
    <div className={styles.second}>
    <div className={styles.copyright}>
        <span>© 2021 A-Recruit / Tous droits réservés</span>
    </div>
    </div>
</div>
)
}

export default Footer