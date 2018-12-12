import React from 'react';
import FLIP from '../FLIP';
import IconContent from './IconContent';
import style from './HillsWithTrees.scss';

const SocialMediaIcon = ({ svgPath, isOpen, i }) => {
    return (
        <FLIP
            animate={isOpen}
            duration={{ transform: ".3s", opacity: "0s", delay: `.${i}5s` }}
            styleDeclaration={"transformAndScale"}
        >
            <svg
                viewBox="0 0 60 60"
                fill="none"
                className={isOpen ? `${style.scale}` : `${style.shareBtn}`}
            >
                <IconContent svgPath={svgPath} />
            </svg>
        </FLIP>
    );
}

export default SocialMediaIcon;