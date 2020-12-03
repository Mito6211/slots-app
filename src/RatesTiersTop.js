import React from 'react';

function RatesTiersTop({ data: { styles, state, totalPercentage, setTiers, setItems } }) {

    const removeAll = () => {
        setTiers([]);
        setItems([]);
    }

    return (
        <div className={styles.upperData}>
            <div style={{ color: totalPercentage === "100" ? "green" : "red", padding: "10px" }}>
                Total: {!isNaN(totalPercentage) ? totalPercentage : 0}%
                </div>
            <div className={styles.removeAll}>
                <span onClick={removeAll}>(Remove All)</span>
            </div>
        </div>
    )
}

export default RatesTiersTop;