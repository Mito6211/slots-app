import React, { useState, useEffect } from 'react'
import { Link, Switch, Route, useLocation } from 'react-router-dom'

import Spin from "./Spin"
import Rates from "./Rates"

import styles from "./App.module.css"

export default function App() {

    const location = useLocation();
    const currentPath = location.pathname;



    const [tiers, setTiers] = useState(
        JSON.parse(localStorage.getItem("tiers")) ||
        [
            {
                tier: "Smaller Prizes",
                percent: "80",
                perSelected: false,
                items: [
                    "1 month of Discord Nitro Classic",
                    "common item #82",
                    "lorem ispum",
                    "example"
                ]
            }, {
                tier: "Rare",
                percent: "15",
                perSelected: false,
                items: [
                    "3 months of Spotify Premium",
                    "rare item",
                    "something that's rare"
                ]
            }, {
                tier: "Gift Cards",
                percent: "5",
                perSelected: false,
                items: [
                    "$50 Amazon Card",
                    "$40 Visa Card",
                    "$60 Steam Credit",
                    "$25 Starbucks Card"
                ]
            }
        ]);


    const totalPercentage = tiers.reduce((total, item) => total + parseInt(item.percent), 0)


    useEffect(() => {
        localStorage.setItem("tiers", JSON.stringify(tiers));
    }, [tiers])


    return (
        <div>
            <div className={styles.nav}>
                <Link to="/">
                    <button
                        className={styles.spinBtn}
                        style={{ textDecoration: currentPath === "/" ? "underline" : "none" }}
                    >
                        Spin
                    </button>
                </Link>
                <Link to="/rates">
                    <button
                        className={styles.ratesBtn}
                        style={{ textDecoration: currentPath === "/rates" ? "underline" : "none" }}
                    >
                        Rates
                    </button>
                </Link>
            </div>

            <Switch>
                <Route exact path="/">
                    <Spin data={{ totalPercentage, tiers }} />
                </Route>
                <Route exact path="/rates">
                    <Rates data={{ totalPercentage, tiers, setTiers }} />
                </Route>
            </Switch>
        </div>
    )
}