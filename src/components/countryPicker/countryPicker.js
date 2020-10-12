import React from 'react';
import styles from './countryPicker.module.css';
import { FormControl, Select, MenuItem } from '@material-ui/core';

export function CountryPicker({ countries, handleSelectedCountry, country }) {
    return (
        <div className={styles.container}>
            <FormControl className={styles["country-picker-form"]}>
                <Select 
                    className={styles["country-picker"]} 
                    value={country}
                    onChange={e => handleSelectedCountry(e.target.value)}
                >
                    <MenuItem key={"Global"+Date.now()} value="Global">Global</MenuItem>
                    {countries && countries.map(countryObj => (
                        <MenuItem key={countryObj.Country+Date.now()} value={countryObj.Slug}>{countryObj.Country}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}