import React, { useState } from 'react'
import "animate.css";
import styles from "./Spin.module.css"

const Spin = ({ data: { totalPercentage, tiers } }) => {

    const [rarity, setRarity] = useState({ tier: "RARITY" })
    const [item, setItem] = useState("ITEM")


    const pickItem = () => {
        const allTiers = [];
        tiers.forEach(tier => {
            for (let i = 0; i < parseInt(tier.percent); i++) {
                allTiers.push(tier);
            }
        })

        const randomTier = allTiers[Math.floor(Math.random() * allTiers.length)];

        setRarity(randomTier);
        console.log(randomTier);
        // there will be an animation here
        // then it wait for a few seconds

        setItem(randomTier.items[Math.floor(Math.random() * randomTier.items.length)])

    }

    return (
        <>
            <div className={styles.spinMainContext}>
                <div className={styles.dataBox}><span className="animate__animated animate__zoomIn">{rarity.tier}</span></div>
                <div className={styles.dataBox}><span className="animate__animated animate__zoomIn">{item}</span></div>
            </div>
            <div className={styles.otherData}>
                <button className={styles.spinBtn} onClick={pickItem} disabled={totalPercentage !== 100}>
                    <span className="animate__animated animate__zoomIn">SPIN!</span>
                </button>
                <div className={styles.outcome} style={{ color: totalPercentage === 100 ? "green" : "red" }}>
                    <span className="animate__animated animate__zoomIn">The outcome is at {totalPercentage}%!</span>
                </div>
            </div>
        </>
    )
}

export default Spin;