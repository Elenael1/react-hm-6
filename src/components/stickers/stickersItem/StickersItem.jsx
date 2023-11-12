import React from 'react'
import s from './stickersItem.module.css'

const StickersItem = ({img, label, onClick}) => {
  return (
   <li className={s.sticker}> 
    <img src={img} alt={label}/>
    <p onClick={onClick}>{label}</p>
   </li>
  )
}

export default StickersItem