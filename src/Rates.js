import React, { useState } from 'react';
import styles from "./Rates.module.css";

import RatesData from "./RatesData";
import RatesTiers from "./RatesTiers";

const Rates = ({ data: { totalPercentage, tiers, setTiers } }) => {

    const [selectedTier, setSelectedTier] = useState(0);

    const selectTier = (e) => {
        setSelectedTier(e.target.attributes.id.value);
    }

    const removeTier = (i) => {
        setTiers(tiers.filter(tier => tier !== tiers[i]))
    }

    return (
        <div className={styles.container}>
            <RatesTiers data={{ tiers, setTiers, selectedTier, selectTier, removeTier, totalPercentage }} />
            <RatesData data={{ tiers, selectedTier }} />
        </div>
    )
}

export default Rates;
