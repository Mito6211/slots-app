import React, { useState } from "react";
import "animate.css";
import styles from "./Spin.module.css";

const Spin = ({ data: { totalPercentage, tiers } }) => {
    const [rarity, setRarity] = useState({ tier: "RARITY" });
    const [item, setItem] = useState("ITEM");

    const [thingSpinning, setThingSpinning] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const pickItem = () => {
        setIsSpinning(true);
        
        const allTiers = [];
        tiers.forEach((tier) => {
            for (let i = 0; i < parseInt(tier.percent); i++) {
                allTiers.push(tier);
            }
        });
        
        const randomTier =
            allTiers[Math.floor(Math.random() * allTiers.length)];
        
        setThingSpinning("rarity");

        for (let i = 1; i <= 10; i++) {
            const timer = (n) => {
                setTimeout(() => {
                    setRarity(
                        allTiers[Math.floor(Math.random() * allTiers.length)]
                    );
                }, 200 * n);
            };

            timer(i);

            setTimeout(() => {
                setRarity(randomTier);
                setThingSpinning(null);
            }, 2005);
        }



        setTimeout(() => {
            setThingSpinning("item");

            for (let i = 1; i <= 10; i++) {
                const timer = (n) => {
                    setTimeout(() => {
                        setItem(
                            randomTier.items[
                                Math.floor(
                                    Math.random() * randomTier.items.length
                                )
                            ]
                        );
                    }, 200 * n);
                };

                timer(i);

                setTimeout(() => {
                    setThingSpinning(null);
                    setIsSpinning(false);
                }, 2000);
            }

        }, 2100);
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
                    disabled={totalPercentage !== 100 || isSpinning}
                >
                    <span className="animate__animated animate__zoomIn">
                        SPIN!
                    </span>
                </button>
                <div
                    className={styles.outcome}
                    style={{ color: totalPercentage === 100 ? "green" : "red" }}
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
