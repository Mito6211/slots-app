import React, { useState, useEffect } from 'react';
import styles from './Rates.module.css';
import useForm from './hooks/useForm';

// [
//     {
//         tier: "TierName1",
//         percent: 26,
//         items: [
//             "Tier1Item1",
//             "Another Item",
//             "qqwertysdf",
//             "zxcvbe"
//         ]
//     }, {
//         tier: "TierName2",
//         percent: 594,
//         items: [
//             "abcdefg",
//             "TIER #2 IS SELECTED",
//             "zxcv"
//         ]
//     }, {
//         tier: "Another Example Tier",
//         percent: 1,
//         items: [
//             "Tier3",
//             "You have selected the 3rd tier",
//             "3rd tier item",
//             "example",
//             "demo"
//         ]
//     }]

const RatesData = ({ data: { tiers, selectedTier } }) => {
    const [items, setItems] = useState(tiers[0].items);
    const [itemData, setItemData, handleItemChange] = useForm('');

    const itemAdd = (e) => {
        if (itemData.length > 0) {
            setItems(prevItems => ([
                ...prevItems,
                itemData
            ]));
        }
        setItemData('');
        e.preventDefault();
    }

    useEffect(() => {
        setItems(tiers.find(element => element.tier === selectedTier).items)
    }, [tiers, selectedTier])

    return (
        <div className={styles.rightContainer}>
            <div className={styles.rightData}>
                <ul className={styles.items}>
                    {items.map(item => <li key={Math.random() * 10000}>{item}</li>)}
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
    )
}

export default RatesData;