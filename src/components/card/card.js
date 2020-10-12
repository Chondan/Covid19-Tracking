import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';
import CountUp from 'react-countup';
import styles from './card.module.css';

function StatusCard({ type, data }) {
    const updated = data[0] && (<CountUp start={0} end={data[0]} duration={2.5} separator="," />);
    return (
        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles[`${type.toLowerCase()}`])}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{type}</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={data[1]} duration={2.5} separator="," />
                </Typography>
                <Typography variant="subtitle1">
                    { data[0] ? "+" : ""}{updated}
                </Typography>
                <Typography color="textSecondary">{data[2]}</Typography>
                <Typography variant="body2">Number of {type.toLowerCase()} cases of COVID-19</Typography>
            </CardContent>
        </Grid>
    );
}

const TYPES = {INFECTED: "INFECTED", RECOVERED: "RECOVERED", ACTIVE: "ACTIVE", DEATHS: "DEATHS"};

export default function Cards(props) {
    if (!props.selectedData) { return <div>...Loading</div>; }
    const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered } = props.selectedData;
    const today = new Date();
    const date = (props.selectedData.Date && new Date(props.selectedData.Date).toDateString()) || today.toDateString();
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {Object.keys(TYPES).map(type => {
                    let data = null;
                    switch (type) {
                        case TYPES.INFECTED:
                            data = [NewConfirmed, TotalConfirmed, date];
                            return <StatusCard key={TYPES.INFECTED} type={TYPES.INFECTED} data={data} />;
                        case TYPES.RECOVERED:
                            data = [NewRecovered, TotalRecovered, date];
                            return <StatusCard key={TYPES.RECOVERED} type={TYPES.RECOVERED} data={data} />;
                        case TYPES.DEATHS:
                            data = [NewDeaths, TotalDeaths, date];
                            return <StatusCard key={TYPES.DEATHS} type={TYPES.DEATHS} data={data} />;
                        case TYPES.ACTIVE:
                            data = [false, TotalConfirmed - TotalRecovered, date];
                            return <StatusCard key={TYPES.ACTIVE} type={TYPES.ACTIVE} data={data} />;
                        default:
                            return false;
                    }
                })}
            </Grid>
        </div>
    );
}