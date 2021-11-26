import BarColumn from './BarColumn';
import PropTypes from 'prop-types';

const AllBarColumns = ({ columns, isGrowing }) => {
    const bars = columns.reduce(
        (acc, bar, i) => {
            acc.components = [
                ...acc.components,
                <BarColumn
                    key={bar.id}
                    isGrowing={isGrowing}
                    bar={bar}
                    spaceX={(i + 1) * 15}
                    pointX={acc.pointX}
                    angleX={acc.angleX}
                    skill={bar.skill}
                />,
            ];
            acc.pointX += 30;
            acc.angleX += 30;
            return acc;
        },
        { pointX: 17, angleX: 10, components: [] }
    );
    return bars.components;
};

AllBarColumns.propTypes = {
    isGrowing: PropTypes.bool,
    columns: PropTypes.array,
};

export default AllBarColumns;
