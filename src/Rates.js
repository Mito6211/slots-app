import React, {useState} from 'react';
import styles from "./Rates.module.css";

import RatesData from "./RatesData";
import RatesTiers from "./RatesTiers";

const Rates = () => {
    const [tiers, setTiers] = useState(
        [
            {
                tier: "TierName1",
                percent: 26,
                items: [
                    "Tier1Item1",
                    "Another Item",
                    "qqwertysdf",
                    "zxcvbe"
                ]
            }, {
                tier: "TierName2",
                percent: 594,
                items: [
                    "abcdefg",
                    "TIER #2 IS SELECTED",
                    "zxcv"
                ]
            }, {
                tier: "Another Example Tier",
                percent: 1,
                items: [
                    "Tier3",
                    "You have selected the 3rd tier",
                    "3rd tier item",
                    "example",
                    "demo"
                ]
            }
        ]);


        const [selectedTier, setSelectedTier] = useState(tiers[0].tier);

        const selectTier = (e) => {
            setSelectedTier(e.target.childNodes[0].textContent);
        }


    return (
        <div className={styles.container}>
            <RatesTiers data={{tiers, setTiers, selectedTier, selectTier}} />
            <RatesData data={{tiers, selectedTier}} />
        </div>
    )
}

export default Rates;
