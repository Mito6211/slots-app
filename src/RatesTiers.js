import React, { useState } from 'react'

import styles from "./RatesTiers.module.css"

import RatesTiersTop from "./RatesTiersTop"
import RatesTiersCards from "./RatesTiersCards"
import RatesTiersForm from "./RatesTiersForm"

const RatesTiers = ({ data: { tiers, setTiers, selectedTier, selectTier, removeTier, totalPercentage, setItems } }) => {

    const numRegex = RegExp("^[0-9]?(,|\\.)?[0-9]*$");

    const [state, setState] = useState({
        tierData: "",
        percentageData: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "percentageData") {
            setState(prevState => ({
                ...prevState,
                [name]: numRegex.test(value) ? value : prevState[name]
            }))
        } else {
            setState(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
        console.log(state)
    }

    return (
        <div className={styles.ratesMainContext}>

            <RatesTiersTop data={{ styles, setTiers, totalPercentage, setItems }} />

            <div className={styles.mainContent}>
                <RatesTiersCards data={{ styles, setTiers, tiers, selectTier, selectedTier, removeTier }} />
                <RatesTiersForm data={{ styles, setTiers, state, setState, handleChange, numRegex }} />
            </div>

        </div>
    )
}

export default RatesTiers