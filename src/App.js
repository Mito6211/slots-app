import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Spin from "./Spin"
import Rates from "./Rates"

import styles from "./App.module.css"

export default function App() {
    return (
        <div>
            <div className={styles.nav}>
                <Link to="/"><button className={styles.spinBtn}>Spin</button></Link>
                <Link to="/rates"><button className={styles.ratesBtn}>Rates</button></Link>
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