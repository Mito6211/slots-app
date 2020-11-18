import React, { useState, useEffect } from 'react';
import styles from './RatesData.module.css';
import useForm from './hooks/useForm';

const RatesData = ({ data: { tiers, selectedTier } }) => {
    const [items, setItems] = useState([]);
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
        const tierItem = tiers[selectedTier];
        if (tierItem !== undefined) {
            setItems(tierItem.items)
        }
    }, [tiers, selectedTier])

    return (
        <div className={styles.rightContainer}>
            <div className={styles.rightData}>
                <ul className={styles.items}>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
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