import React from 'react'
import viberr from '../../assets/things.jpg';
import freshBurger from '../../assets/icecream.jpg'
import hipsster from '../../assets/Trip.jpg'
import fitlift from '../../assets/github.jpg'


import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id='projects' className={styles.container}>

     <h1 className="sectionTitle">Projects</h1>

     <div className={styles.projectsContainer}>
        
    <ProjectCard src={viberr} link={'https://rithanya-qkart-frontend.netlify.app/'} h3="QKart" p="ECommerce App"/>

    <ProjectCard src={freshBurger} link={'https://inourkitchen.netlify.app/'} h3="In our Kitchen" p="Recipe Blog"/>

    <ProjectCard src={hipsster} link={'https://rithanya-qtrip-dynamic.netlify.app/'} h3="Trip" p="Holiday Booking App"/>

    <ProjectCard src={fitlift} link={'https://github.com/Rithanya-20'} h3="Competitive Programs" p="Brain workout session"/>

    
    </div>   
    </section>
  )
}

export default Projects