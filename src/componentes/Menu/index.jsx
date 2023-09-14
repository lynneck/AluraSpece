import React from 'react'
import styles from'./Menu.module.scss'
import Icone from './Icone'
import icones from './icones.json'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
        {icones.map(icone => 
        (<Icone 
            key={icone.id}
            icone={icone} 
            styles={styles}
        />))}
        </ul>
    </nav>

  )
}
