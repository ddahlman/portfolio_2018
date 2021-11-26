import FLIP from '../FLIP';
import IconContent from './IconContent';
import style from './HillsWithTrees.scss';
import PropTypes from 'prop-types';

const SocialMediaIcon = ({ svgPath, isOpen, i }) => {
    return (
        <FLIP
            animate={isOpen}
            duration={{ transform: '.3s', opacity: '0s', delay: `.${i}5s` }}
            styleDeclaration={'transformAndScale'}>
            <svg
                viewBox="0 0 60 60"
                fill="none"
                className={isOpen ? `${style.scale}` : `${style.shareBtn}`}>
                <IconContent svgPath={svgPath} />
            </svg>
        </FLIP>
    );
};

export default SocialMediaIcon;

SocialMediaIcon.propTypes = {
    svgPath: PropTypes.node,
    isOpen: PropTypes.bool,
    i: PropTypes.number,
};
