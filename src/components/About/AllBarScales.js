import BarScale from './BarScale';

const AllBarScales = ({ scaleLabels }) =>
    scaleLabels.map((item, i, arr) => (
        <BarScale key={i} yAxis={i * 32} label={arr[i]} />
    ));

export default AllBarScales;
