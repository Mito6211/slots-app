import React, { useState, useContext } from "react";
import "animate.css";
import styles from "./Spin.module.css";

import { MainContext } from "./MainContext";

const Spin = ({ data: { totalPercentage } }) => {
    const [rarity, setRarity] = useState({ tier: "RARITY" });
    const [item, setItem] = useState("ITEM");
    
    const [thingSpinning, setThingSpinning] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);
    
    const tiers = useContext(MainContext);

    const pickItem = () => {
        setIsSpinning(true);

        const allTiers = [];
        tiers.forEach((tier) => {
            // tenth of a percent accuracy (eg. 32.6% will have 326 out of 1000 entries in the array)
            for (let i = 0; i < parseInt(tier.percent.replace(',', '.') * 10); i++) {
                allTiers.push(tier);
            }
        });

        const randomTier =
            allTiers[Math.floor(Math.random() * allTiers.length)];

        setThingSpinning("rarity");

        let raritySpinnerCount = 0;
        const raritySpinnerID = setInterval(() => {
            if (raritySpinnerCount >= 9) {
                setRarity(randomTier);
                setThingSpinning(null);
                clearInterval(raritySpinnerID);
            } else {
                setRarity(
                    allTiers[Math.floor(Math.random() * allTiers.length)]
                );
                raritySpinnerCount++;
            }
        }, 200);

        setTimeout(() => {
            setThingSpinning("item");

            let itemSpinnerCount = 0;
            const itemSpinnerID = setInterval(() => {
                if (itemSpinnerCount >= 9) {
                    setThingSpinning(null);
                    setIsSpinning(false);
                    clearInterval(itemSpinnerID);
                } else {
                    setItem(
                        randomTier.items[
                        Math.floor(Math.random() * randomTier.items.length)
                        ]
                    );
                    itemSpinnerCount++;
                }
            }, 200);
        }, 2000)

    };


    return (
        <>
            <div className={styles.spinMainContext}>
                <div className={styles.dataBox}>
                    <span
                        className={
                            thingSpinning === "rarity" ? styles.spinner : ""
                        }
                    >
                        {rarity.tier}
                    </span>
                </div>
                <div className={styles.dataBox}>
                    <span
                        className={
                            thingSpinning === "item" ? styles.spinner : ""
                        }
                    >
                        {item}
                    </span>
                </div>
            </div>
            <div className={styles.otherData}>
                <button
                    className={styles.spinBtn}
                    onClick={pickItem}
                    disabled={(totalPercentage !== "100" && totalPercentage !== "100.00") || isSpinning}
                >
                    <span className="animate__animated animate__zoomIn">
                        SPIN!
                    </span>
                </button>
                <div
                    className={styles.outcome}
                    style={{
                        color: (totalPercentage === "100" || totalPercentage === "100.00") ? "green" : "red",
                    }}
                >
                    <span className="animate__animated animate__zoomIn">
                        The outcome is at {totalPercentage}%!
                    </span>
                </div>
            </div>
        </>
    );
};

export default Spin;
