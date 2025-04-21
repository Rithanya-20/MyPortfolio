import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
const {theme, toggleTheme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;


  return (
    <section id='skills' className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} p={"JAVA"}/>
            <SkillList src={checkMarkIcon} p={"HTML"}/>

            <SkillList src={checkMarkIcon} p={"CSS"}/>

            <SkillList src={checkMarkIcon} p={"JavaScript"}/>

            <SkillList src={checkMarkIcon} p={"React"}/>

            <SkillList src={checkMarkIcon} p={"TailwindCSS"}/>
           
        </div>

        <hr/>
        <div className={styles.skillList}>
       
            <SkillList src={checkMarkIcon} p={"Node"}/>

            <SkillList src={checkMarkIcon} p={"Express.js"}/>

            <SkillList src={checkMarkIcon} p={"MongoDB"}/>


        </div>

        <hr/>
        <div className={styles.skillList}>
       
            <SkillList src={checkMarkIcon} p={"Oracle Responsys"}/>

            <SkillList src={checkMarkIcon} p={"SFMC"}/>

            <SkillList src={checkMarkIcon} p={"Bluecore"}/>
        </div>
            

    </section>
  )
}

export default Skills