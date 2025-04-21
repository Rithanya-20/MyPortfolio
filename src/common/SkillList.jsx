import React from 'react'
import { useTheme } from './ThemeContext'

function SkillList({src, p}) {
  return (
   <span>
        <img src={src} alt="CheckMark icon" />
        <p>{p}</p>
    </span>
  )
}

export default SkillList