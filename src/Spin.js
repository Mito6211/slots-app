import React from 'react'

import styles from "./Spin.module.css"

function Spin() {
    return (
        <>
            <div className={styles.spinMainContext}>
                <div className={styles.dataBox}><span>RARITY</span></div>
                <div className={styles.dataBox}><span>SERVICE_NAME</span></div>
            </div>
            <div className={styles.otherData}>
                <button className={styles.spinBtn}>SPIN!</button>
                <div className={styles.outcome}>
                    The outcome is at x%!
                </div>
            </div>
        </>
    )
}

export default Spin
