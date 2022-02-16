import { useState } from 'react'
import {IAccording} from '../../interfaces' 
import styles from './according.module.css'

export const According = ({code, id, info, name, example}:IAccording) => {
        const [show, setShow] = useState(false)
        const handleClick = () => setShow(!show)
        return (
                <div id={id} className={styles.container}>
                        {code && <div className={styles.according} onClick={() => handleClick()}>Code: {code}</div>} 
                        {!code && name &&  <div className={styles.according} onClick={() =>  handleClick()}>Name: {name}</div>} 
                        {show && <div className={styles.according_info}>Название {name} Описание: {info}</div>}
                        {show && example && <div className={styles.according__example}>Пример : {example}</div>}
                </div>      
        )
} 