import React, { useState } from 'react'

import useForm from './hooks/useForm'
import styles from "./Rates.module.css"

function Rates() {

    const [items, setItems] = useState(["Item 1", "Item2", "Item-3"]);
    const [itemData, setItemData, handleChange] = useForm();

    const testingAdd = (e) => {
        setItems(prevItems => ([
            ...prevItems,
            itemData
        ]));
        setItemData('')
        e.preventDefault();
    }



    return (
        <div className={styles.container}>
            <div className={styles.ratesMainContext}>
                <div className={styles.mainContent}>

                    <div className={styles.dataBox}>
                        <span className={styles.tierName}>
                            TIER_NAME 1<span className={styles.percentage}>x%</span>
                        </span>
                    </div>

                    <div className={styles.dataBox}>
                        <span className={styles.tierName}>
                            TIER_NAME 2<span className={styles.percentage}>x%</span>
                        </span>
                    </div>

                    <div className={styles.dataBox}>
                        <span className={styles.tierName}>
                            TIER_NAME 3<span className={styles.percentage}>x%</span>
                        </span>
                    </div>

                    <div className={styles.dataBox}>
                        <span className={styles.tierName}>
                            TIER_NAME 4<span className={styles.percentage}>x%</span>
                        </span>
                    </div>

                    <button className={styles.spinBtn}>ADD</button>
                </div>

            </div>
            <div className={styles.rightContainer}>
                <div className={styles.rightData}>
                    <ul className={styles.items}>
                        {items.map(item => <li key={Math.random()*10000}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.rightInputs}>
                    <form onSubmit={testingAdd}>
                        <input type="text" value={itemData} name="item" onChange={handleChange} />
                        <button>ADD</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Rates
