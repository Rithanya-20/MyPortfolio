import styles from './HeroStyles.module.css'
import heroImg from '../../assets/rithanya-dp.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githublight from '../../assets/github-light.svg';
import linkedinlight from '../../assets/linkedin-light.svg'
import githubdark from '../../assets/github-dark.svg';
import linkedindark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githublight : githubdark;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            
            <img className={styles.hero} src={heroImg} alt="Profile picture of Rithanya" />

            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" 
            onClick={toggleTheme}/>
        
        </div>
        <div className={styles.info}>
            <h1>Rithanya <br/> Srinivasan</h1>
            <h2>Frontend Developer</h2>
            <span>
                {/* <a href="https://twitter.com" target='_blank'>
                <img src={twitterIcon} alt="Twitter" /></a> */}

                <a href="https://github.com/Rithanya-20" target='_blank'>
                <img src={githubIcon} alt="Github" /></a>

                <a href="https://www.linkedin.com/in/rithanya" target='_blank'>
                <img src={linkedinIcon} alt="linkedinIcon" /></a>

              
            </span>
            <p className={styles.description}>With a passion for developing modern React web apps for commercial businesses</p>

            <a href={CV}>
                <button className='hover' download>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero