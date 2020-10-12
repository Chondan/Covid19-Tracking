# Covid 19 Tracker
## API
- documents: https://documenter.getpostman.com/view/10808728/SzS8rjbc

## Regular expression 
- (inject variable into api url)
- regex = `/:\w+/`
- use `replace()` method to replaced matched with my variable

## CSS
- use `name.module.css` to avoid applying style to all of files.
- style component
  - `import styles from './app.module.css'`
  - Usage, &lt;div className={styles.class_name} /&gt;
- multiple styles in one component
first we need to import `cx` from `classnames`
```JavaScript
import cx from 'classnames';
<Component className={cx(styles.style1, styles.style2)}>
```

## File management
- export all of components from one file called `index.js` which is in the components directory

## axios
`npm install axios`
- use to make api request
- `const response = await axios.get(url)`
- wegot obj = { data, status, statusText, headers, config, request }

## Destructuring
- `const { data: { recoverd, deaths, confirmed } } = obj;`

## Declare state without creating counstructor
- If we only want state, we don't need to build a constructor (it will be created automatically at the backed)

## material ui
`npm install --save @material-ui/core`
- documents: [material-ui](https://material-ui.com/components/)
- React components for faster and easier web development.

## chart.js
- documents: [chart.js](https://www.chartjs.org/docs/latest/getting-started/integration.html)

## trackdown the process running on any portNumber

> track: `sudo lsof -iTCP:<portNumberYouWantToTrack> -sTCP:LISTEN`

then you will get infomations but we only want PID to kill the process 

> kill: `sudo kill 12017(whatever the PID is)`

## Date
- readale date format: `new Date(dataFormatGetFromAPI).toDateString()`

## CountUp
- Animation component
  
`npm install react-countup`

```JavaScript
import CountUp from 'react-countup';
<CountUp start={0} end={endValue} duration{2.5} separator="," />
```
- duration (unit: second)

## react-chartjs-2
`npm install react-chartjs-2 chart.js`
- documents: [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)

## classnames
- A simple JavaScript utility for conditionally joining classNames together.