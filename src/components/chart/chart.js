import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './chart.module.css';

const TYPES = {
    CONFIRMED: "Confirmed", 
    ACTIVE: "Active", 
    RECOVERED: "Recovered", 
    DEATHS: "Deaths", 
    DATE: "Date" 
};

export default function Chart({ chartData, state }) {
    if (!chartData) {
        return <div>...Loading</div>;
    }
    // ** using array.slice(start, end);
    // use 90 datas
    // all data need 
    // 1. active array
    // 2. recoverd array
    // 3. deaths array
    // 4. date array (label)
    // const activeDataArray = chartData;
    function getDataSet(type, size) {
        if (!chartData) { return; }
        const dataLength = chartData.length;
        const DataArray = dataLength < size ? chartData.map(data => data[type]) : chartData.map(data => data[type]).slice(dataLength - size, dataLength);
        return DataArray;
    }
    const activeDataArray = getDataSet(TYPES.ACTIVE, 30);
    const recoveredDataArray = getDataSet(TYPES.RECOVERED, 30);
    const dateDataArray = getDataSet(TYPES.DATE, 30);
    const deathsDataArray = getDataSet(TYPES.DEATHS, 30);
    const confirmedDataArray = getDataSet(TYPES.CONFIRMED, 30)
    return (
        <div className={styles["line-chart-container"]}>
            <Line
                options={{
                    title: {
                        display: true,
                        text: "COVID19"
                    }
                }} 
                data={{
                    labels: dateDataArray.map(date => new Date(date).toDateString()),
                    datasets: [
                        {
                            data: activeDataArray,
                            label: "Active",
                            borderColor: "#33f",
                            fill: true,
                        }, 
                        {
                            data: recoveredDataArray,
                            label: "Recovered",
                            borderColor: "lightgreen",
                            fill: true,
                        },
                        {
                            data: deathsDataArray,
                            label: "Deaths",
                            borderColor: "red",
                            fill: true,
                        },
                        {
                            data: confirmedDataArray,
                            label: "Confirmed",
                            borderColor: "yellow",
                            fill: true,
                        }
                    ]
                }}
            />
        </div>
    );
}