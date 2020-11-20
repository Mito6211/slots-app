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
                    perSelected: false,
                    items: []
                }
            ]));
        }
        setTierData('');
        setPercentageData('');
        e.preventDefault();
    }

    const changePercentage = (index) => {
        const updatedTiers = [...tiers]
        updatedTiers[index] = {
            ...updatedTiers[index],
            perSelected: !updatedTiers[index].perSelected
        }

        setTiers(updatedTiers)
    }

    const handlePercentageUpdate = ({ value }, index) => {
        const updatedTiers = [...tiers];
        const keystroke = value[value.length - 1];
        let percentValue = (isNaN(parseInt(value)) && keystroke !== '.') ? "" : value;

        if (keystroke === '.' && parseInt(tiers[index].percent) % 1 !== 0) {
            percentValue = value;
        }

        updatedTiers[index] = {
            ...updatedTiers[index],
            percent: percentValue
        }

        setTiers(updatedTiers);
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
                                {tiers[index].tier}
                            </span>
                            <span className={styles.percentage}>
                                <span onClick={() => changePercentage(index)}>
                                    {tierData.perSelected ?
                                        <form onSubmit={(e) => {
                                            changePercentage(index);
                                            e.preventDefault();
                                        }}>
                                            <input
                                                type="text"
                                                value={tierData.percent}
                                                onChange={(e) => handlePercentageUpdate(e.target, index)}
                                                autoFocus={true}
                                                className={styles.percentageUpdateInput}
                                            />
                                        </form> :
                                        tierData.percent}%
                                </span>
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