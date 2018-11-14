import React from 'react';
import style from './Portfolio.scss';
import PropTypes from 'prop-types';

const Cross = ({ cross, closeBox, index }) => {
    return (
        <div className={'cross-container'} onClick={closeBox}>
            <span className={cross ? `${}`} />
        </div>
    );
};

export default Cross;

Cross.propTypes = {
    cross: PropTypes.bool,
    closeBox: PropTypes.func,
    index: PropTypes.number
};