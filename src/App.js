import React from 'react'
import { Link, Switch, Route, useLocation } from 'react-router-dom'

import Spin from "./Spin"
import Rates from "./Rates"

import styles from "./App.module.css"

export default function App() {
    
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div>
            <div className={styles.nav}>
                <Link to="/">
                    <button
                        className={styles.spinBtn}
                        style={{textDecoration: currentPath === "/" ? "underline" : "none"}}
                    >
                        Spin
                    </button>
                </Link>
                <Link to="/rates">
                    <button
                        className={styles.ratesBtn}
                        style={{textDecoration: currentPath === "/rates" ? "underline" : "none"}}
                    >
                        Rates
                    </button>
                </Link>
            </div>

            <Switch>
                <Route exact path="/">
                    <Spin />
                </Route>
                <Route exact path="/rates">
                    <Rates />
                </Route>
            </Switch>
        </div>
    )
}