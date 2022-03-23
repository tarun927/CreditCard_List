import React from 'react'
import styles from '../styles/List.module.css'
export default function ListValue({ deleteFun, ele }) {
    let str = ele.value.match(/.{1,4}/g);
    return (
        <tr>
            <td>{str.map(d =>d+" ")}</td>
            <td className={styles.delete} onClick={() => deleteFun(ele.u_id)}>Delete</td>
        </tr>
    )
}
