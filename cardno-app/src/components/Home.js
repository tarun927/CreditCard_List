import React, { useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { dataFun } from '../redux/actions/action';
import InputBox from './InputBox'
import ListValue from './ListValue';

export default function Home() {
    let Arr = new Array(4).fill(0);
    let dispatch = useDispatch();
    let CardList = useSelector(state => state.CardDataReducer)

    const handleSubmit = () => {
        let count = 0;
        if (CardList.length > 0) {
            count = CardList[CardList.length-1].u_id+1;
        }
        let singleCard = ''
        Arr.map((ele, idx) => {
            singleCard += document.getElementById(idx).value
            
        })
        if(singleCard.length==0 ) return

        document.getElementById('0').focus();
        dispatch(dataFun([...CardList, { u_id: count, value: singleCard }]))
    }

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleSubmit();
        }
    }

    const deleteFun=(x)=>{
         dispatch(dataFun(CardList.filter((ele)=>ele.u_id!=x)))
    }
    return (
        <div className={styles.HomeWrapper} onKeyDown={handleKeyDown}>
            <div className={styles.inputWrapper}>
                <span >Card Number*</span>
                {
                    Arr.map((ele, idx) => {
                        return <InputBox refprop={'ref' + idx} idx={idx} />
                    })
                }
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>Card Number</tr>
                    </thead>
                    <tbody>
                    {
                        CardList.map((ele) => {
                            return <ListValue key={ele.u_id} deleteFun={deleteFun} ele={ele} />
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
