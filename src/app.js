import React from 'react';
import { getApiUrl } from './utils/getApiUrl';
import { Card, Chart, CountryPicker } from './components';
import styles from './app.module.css';
import { fetchData } from './api';

const apiUrl = getApiUrl("summaryRoute", []);

class App extends React.Component {
    // contructor is created automatically at the backend
    state = {
        data: null,
        selectedData: null,
        country: "Global",
        chartData: null,
    }
    async componentDidMount() {
        const fetchedData = await fetchData(apiUrl);
        if (!fetchData) { return; }
        this.setState( { data: fetchedData, selectedData: fetchedData.Global });
    }
    async handleSelectedCountry(country_slug) {
        if (!this.state.data) { return; }
        // manipulate data for showing in card
        const { Countries, Global } = this.state.data;
        if (country_slug === "Global") {
            return this.setState({ selectedData: Global, chartData: null });
        }
        const selectedCountry = Countries.find(country => country.Slug === country_slug);
        // fetch data for chart
        if (country_slug === "united-states") {
            this.setState({ chartData: null, selectedData: selectedCountry, country: country_slug });
            return;
        }
        const chartData = await fetchData(getApiUrl("countryDayOneRoute", [country_slug]));
        this.setState({ chartData: chartData, selectedData: selectedCountry, country: country_slug });
    }
    render() {
        const { data, selectedData, chartData, country } = this.state;
        console.log(chartData);
        return (
            <div className={styles.container}>
                <CountryPicker country={country} handleSelectedCountry={this.handleSelectedCountry.bind(this)} countries={data && data.Countries} />
                <Card selectedData={selectedData} />
                <Chart chartData={chartData} state={this.state} />
            </div>
        );
    }
}

export default App;