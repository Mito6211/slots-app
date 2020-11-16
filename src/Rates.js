import React, { useState } from 'react'

import useForm from './hooks/useForm'
import styles from "./Rates.module.css"

import RatesData from "./RatesData"

function Rates() {

    const [tiers, setTiers] = useState(
        [
            { tier: "TierName1", percent: 26 },
            { tier: "TierName2", percent: 594 },
            { tier: "Another Example Tier", percent: 1 }
        ]);

    const [tierData, setTierData, handleTierChange] = useForm('');
    const [percentageData, setPercentageData, handlePercentageChange] = useForm('');



    const handleTierSubmit = (e) => {
        if (tierData.length > 0 && percentageData.length > 0) {
            setTiers(prevTiers => ([
                ...prevTiers,
                { tier: tierData, percent: percentageData.replace('%', '') }
            ]));
        }
        setTierData('');
        setPercentageData('');
        e.preventDefault();
    }



    return (
        <div className={styles.container}>
            <div className={styles.ratesMainContext}>
                <div className={styles.mainContent}>

                    {tiers.map(tierData => (
                        <div className={styles.dataBox}>
                            <span className={styles.tierName}>
                                {tierData.tier}
                                <span className={styles.percentage}>{tierData.percent}%</span>
                            </span>
                        </div>
                    ))}

                    <form className={styles.tierForm} onSubmit={handleTierSubmit}>
                        <input
                            type="text"
                            placeholder="tier"
                            value={tierData}
                            className={styles.tierItem}
                            onChange={handleTierChange}
                        />
                        <input
                            type="text"
                            placeholder="%"
                            value={percentageData}
                            className={styles.tierPercentage}
                            onChange={handlePercentageChange}
                        />
                        <button className={styles.tierAdd}>ADD</button>
                    </form>

                </div>

            </div>

            <RatesData />

        </div>
    )
}

export default Rates
