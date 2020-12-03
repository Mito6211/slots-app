import React from "react";

function RatesTiersForm( {data: { styles, state, setState, handleChange, setTiers, numRegex } }) {

    const handleTierSubmit = (e) => {
        if (
            state.tierData.length > 0 &&
            state.percentageData.length > 0 &&
            numRegex.test(state.percentageData)
        ) {
            setTiers((prevTiers) => [
                ...prevTiers,
                {
                    tier: state.tierData,
                    percent: state.percentageData.replace("%", "").replace(',', '.'),
                    perSelected: false,
                    items: [],
                },
            ]);
        }
        setState({ tierData: "", percentageData: "" });
        e.preventDefault();
    };

    return (
        <form className={styles.tierForm} onSubmit={handleTierSubmit}>
            <input
                type="text"
                placeholder="tier"
                name="tierData"
                value={state.tierData}
                className={styles.tierItem}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="%"
                name="percentageData"
                value={state.percentageData}
                className={styles.tierPercentage}
                onChange={handleChange}
            />
            <button className={styles.tierAdd}>ADD</button>
        </form>
    );
}

export default RatesTiersForm;
