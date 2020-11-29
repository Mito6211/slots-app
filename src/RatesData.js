import React, { useEffect } from "react";
import styles from "./RatesData.module.css";

const RatesData = ({
    data: {
        tiers,
        setTiers,
        selectedTier,
        itemData,
        setItemData,
        handleItemChange,
        items,
        setItems,
        itemAdd,
    },
}) => {
    console.log(items);
    console.log(JSON.parse(localStorage.getItem("tiers")));

    useEffect(() => {
        const tierItem = tiers[selectedTier];
        if (tierItem !== undefined) {
            setItems(tierItem.items);
        }
        console.log(1);
    }, [tiers, selectedTier, setItems]);

    return (
        <div className={styles.rightContainer}>
            <div className={styles.rightData}>
                <ul className={styles.items}>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.rightInputs}>
                <form onSubmit={itemAdd}>
                    <input
                        type="text"
                        value={itemData}
                        name="item"
                        onChange={handleItemChange}
                        placeholder="enter an item"
                    />
                    <button>ADD</button>
                </form>
            </div>
        </div>
    );
};

export default RatesData;
