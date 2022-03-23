import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from '../styles/Input.module.css'
export default function InputBox({ refprop, idx }) {
    const [num, setNum] = useState('')
    let CardList = useSelector(state => state.CardDataReducer)

    refprop = useRef();
    const handleChange = (e) => {
        const { value } = e.target
        if (value.length < 5) {
            setNum(value)
            if (value.length > 3 && value.length < 5 && idx < 3) document.getElementById(idx).nextElementSibling.focus();
        } else if (value.length > 5 && value.length < 17) {

            let pastedArr = value.match(/.{1,4}/g);

            pastedArr.map((ele, index) => {
                if (index == 0) {
                    setNum(ele)
                } else {
                    document.getElementById(index).value = ele;
                }

            })

            document.getElementById(3).focus();
        }

    }

    useEffect(() => {
        if(document.getElementById(0).value.length==0){
            document.getElementById(0).focus()
        }else if (num.length == 0 && idx > 0) {
            document.getElementById(idx).previousElementSibling.focus();
        }
    }, [num])

    useEffect(()=>{
      setNum("")
      console.log(document.getElementById(0).focus())
      document.getElementById(0).focus();
    },[CardList])
    
    return (
        <input className={styles.input} type="text" onChange={handleChange} value={num} ref={refprop} id={idx} />
    )
}
