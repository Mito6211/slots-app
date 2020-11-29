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

    useEffect(() => {
        const tierItem = tiers[selectedTier];
        if (tierItem !== undefined) {
            setItems(tierItem.items);
        }
    }, [tiers, selectedTier, setItems]);

    const removeDataItem = (index) => {
        const newItems = items.filter((item) => items[index] !== item)
        setItems(newItems);
        let updatedTiers = [...tiers];
        updatedTiers[selectedTier] = {
            ...updatedTiers[selectedTier],
            items: newItems,
        };
        setTiers(updatedTiers)
        // localStorage.setItem("tiers", JSON.stringify(updatedTiers));
    };

    return (
        <div className={styles.rightContainer}>
            <div className={styles.rightData}>
                <ul className={styles.items}>
                    {items.map((item, index) => (
                        <li key={index} style={{ display: "flex" }}>
                            <span
                                className={styles.removeIcon}
                                onClick={() => removeDataItem(index)}
                            >
                                (X)
                            </span>
                            {item}
                        </li>
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
