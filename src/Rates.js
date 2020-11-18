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
                    "lorem ispum",
                    "example"
                ]
            }, {
                tier: "TierName2",
                percent: 594,
                items: [
                    "abcdefg",
                    "tier2 item",
                    "something"
                ]
            }, {
                tier: "Another Example Tier",
                percent: 1,
                items: [
                    "Tier3",
                    "something else",
                    "another example",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                    "ABC"
                ]
            }
        ]);


        const [selectedTier, setSelectedTier] = useState(0);

        const selectTier = (e) => {
            console.log(e.target.attributes.id.value)
            setSelectedTier(e.target.attributes.id.value);
        }

        const removeTier = (i) => {
            setTiers(tiers.filter(tier => tier !== tiers[i]))
        }


    return (
        <div className={styles.container}>
            <RatesTiers data={{tiers, setTiers, selectedTier, selectTier, removeTier}} />
            <RatesData data={{tiers, selectedTier}} />
        </div>
    )
}

export default Rates;
