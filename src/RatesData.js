import React, { useState } from 'react';
import styles from './Rates.module.css';
import useForm from './hooks/useForm';

const RatesData = () => {
    const [items, setItems] = useState(["Item 1", "Item2", "Item-3"]);
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