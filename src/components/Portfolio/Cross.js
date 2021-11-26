import style from './Portfolio.scss';
import PropTypes from 'prop-types';

const Cross = ({ cross, closeBox }) => {
    return (
        <div className={style.crossContainer} onClick={closeBox}>
            <span
                className={
                    cross ? `${style.cross} ${style.rotate}` : `${style.cross}`
                }
            />
        </div>
    );
};

export default Cross;

Cross.propTypes = {
    cross: PropTypes.bool,
    closeBox: PropTypes.func,
    index: PropTypes.number,
};
