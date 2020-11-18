import React from 'react'

import useForm from './hooks/useForm'
import styles from "./RatesTiers.module.css"

const RatesTiers = ({ data: { tiers, setTiers, selectedTier, selectTier, removeTier } }) => {

    const [tierData, setTierData, handleTierChange] = useForm('');
    const [percentageData, setPercentageData, handlePercentageChange] = useForm('');



    const handleTierSubmit = (e) => {
        if (tierData.length > 0 && percentageData.length > 0) {
            setTiers(prevTiers => ([
                ...prevTiers,
                {
                    tier: tierData,
                    percent: percentageData.replace('%', ''),
                    items: []
                }
            ]));
        }
        setTierData('');
        setPercentageData('');
        e.preventDefault();
    }

    return (
        <div className={styles.ratesMainContext}>

            <div className={styles.mainContent}>

                {tiers.map((tierData, index) => (
                    <div key={index} className={styles.dataBox}>
                        <span className={styles.tierName}>
                            <span
                                className={styles.tierText}
                                onClick={selectTier}
                                style={{ fontWeight: index === parseInt(selectedTier) ? "bolder" : "normal" }}
                                id={index}
                            >
                                {tierData.tier}
                            </span>
                            <span className={styles.percentage}>
                                {tierData.percent}%
                                <span className={styles.removeIcon} onClick={() => removeTier(index)}>(X)</span>
                            </span>

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
    )
}

export default RatesTiers
