import PropTypes from 'prop-types';

const FadeUpContent = ({ header, text }) => (
    <div>
        <h1>{header}</h1>
        <p>{text}</p>
    </div>
);

export default FadeUpContent;

FadeUpContent.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
};
