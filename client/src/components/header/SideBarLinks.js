import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBarLinks({title,icon,path,style}) {
  return (
    <div>
        <span>{icon}</span>
        
        <NavLink to={path}><span className={style}>{title}</span></NavLink>

    </div>
  )
}

export default SideBarLinks