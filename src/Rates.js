import React from 'react';
import styles from "./Rates.module.css";

import RatesData from "./RatesData";
import RatesTiers from "./RatesTiers";

const Rates = () => (
    <div className={styles.container}>
        <RatesTiers />
        <RatesData />
    </div>
)

export default Rates;
