/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './item.module.css'
const Item = ({foodItems}) => {
  
  return (
  <li className={`${styles['kg-item']}`}><span className={styles["kg-span"]}>{foodItems}</span></li>
  )
}

export default Item
