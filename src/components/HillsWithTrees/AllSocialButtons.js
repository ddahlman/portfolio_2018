import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';

const AllSocialButtons = ({ socialObjects, isOpen }) =>
    socialObjects.map((obj, i) => {
        return (
            <a
                data-tooltip={obj.toolTip}
                key={obj.id}
                href={obj.href}
                target="_blank"
                rel="noopener"
            >
                <SocialMediaIcon
                    toolTip={obj.toolTip}
                    svgPath={obj.id}
                    isOpen={isOpen}
                    i={i}
                />
            </a>
        );
    });


export default AllSocialButtons;