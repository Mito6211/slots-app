import React, { useState, useContext } from "react";
import styles from "./Rates.module.css";

import RatesData from "./RatesData";
import RatesTiers from "./RatesTiers";

import useForm from "./hooks/useForm";

import { MainContext } from "./MainContext";

const Rates = ({ data: { totalPercentage, setTiers } }) => {
    const [selectedTier, setSelectedTier] = useState(0);

    const [itemData, setItemData, handleItemChange] = useForm("");
    const [items, setItems] = useState([]);

    const tiers = useContext(MainContext);

    const itemAdd = (e) => {
        if (itemData.length > 0) {
            setItems((prevItems) => [...prevItems, itemData]);
        }
        setItemData("");

        const updatedTiers = [...tiers];
        updatedTiers[selectedTier] = {
            ...updatedTiers[selectedTier],
            items: [...updatedTiers[selectedTier].items, itemData],
        };
        setTiers(updatedTiers);
        localStorage.setItem("tiers", JSON.stringify(updatedTiers));

        e.preventDefault();
    };

    const selectTier = (e) => {
        const selTier = e.target.attributes.id.value;
        setSelectedTier(selTier);
    };

    const removeTier = (i) => {
        setTiers(tiers.filter((tier) => tier !== tiers[i]));
    };

    return (
        <div className={styles.container}>
            <RatesTiers
                data={{
                    setTiers,
                    selectedTier,
                    selectTier,
                    removeTier,
                    totalPercentage,
                    setItems
                }}
            />
            <RatesData
                data={{
                    setTiers,
                    selectedTier,
                    itemData,
                    setItemData,
                    handleItemChange,
                    items,
                    setItems,
                    itemAdd,
                }}
            />
        </div>
    );
};

export default Rates;
