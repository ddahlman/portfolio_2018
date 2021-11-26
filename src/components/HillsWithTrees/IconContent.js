import style from './HillsWithTrees.scss';

const IconContent = ({ svgPath }) => {
    let content = null;
    switch (svgPath) {
        case 'FB':
            content = (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30 0C13.4316 0 0 13.4314 0 30C0 46.5686 13.4316 60 30 60C46.5684 60 60 46.5686 60 30C60 13.4314 46.5684 0 30 0ZM33.127 31.3179V47.6394H26.374V31.3184H23V25.6938H26.374V22.3169C26.374 17.7285 28.2788 15 33.6914 15H38.1978V20.6252H35.3809C33.2739 20.6252 33.1348 21.4111 33.1348 22.8782L33.127 25.6934H38.2295L37.6323 31.3179H33.127Z"
                    className={style.socialMedia}
                />
            );
            break;
        case 'TW':
            content = (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30 0C13.4316 0 0 13.4314 0 30C0 46.5686 13.4316 60 30 60C46.5684 60 60 46.5686 60 30C60 13.4314 46.5684 0 30 0ZM29.1646 25.4224L29.1016 24.3843C28.9126 21.6938 30.5703 19.2363 33.1934 18.283C34.1587 17.9441 35.7954 17.9019 36.8657 18.1982C37.2856 18.3254 38.083 18.7493 38.6494 19.1304L39.6777 19.8296L40.8105 19.4695C41.4404 19.2788 42.2798 18.9609 42.6572 18.7493C43.0142 18.5586 43.3291 18.4526 43.3291 18.5161C43.3291 18.8762 42.5527 20.105 41.9019 20.783C41.0205 21.7363 41.2725 21.821 43.0562 21.1855C44.1265 20.8252 44.1475 20.8252 43.9375 21.2278C43.8115 21.4397 43.1611 22.1812 42.4688 22.8591C41.2935 24.0242 41.2305 24.1514 41.2305 25.1257C41.2305 26.6299 40.5171 29.7654 39.8037 31.4814C38.4814 34.7014 35.6484 38.0276 32.8159 39.7012C28.8286 42.0527 23.5195 42.646 19.0498 41.2688C17.5601 40.8027 15 39.6165 15 39.4045C15 39.3411 15.7764 39.2563 16.7207 39.2351C18.6934 39.1926 20.666 38.6418 22.3447 37.6675L23.4775 36.9895L22.1768 36.5447C20.3301 35.9089 18.6724 34.4473 18.2524 33.0703C18.1265 32.6252 18.1685 32.6042 19.3438 32.6042L20.561 32.583L19.5327 32.0957C18.3154 31.4814 17.2031 30.4434 16.6577 29.384C16.2593 28.6213 15.7554 26.6936 15.9023 26.5452C15.9194 26.519 16.0044 26.5251 16.1333 26.5532C16.3174 26.5935 16.5923 26.6787 16.8887 26.7783C18.3364 27.3079 18.5254 27.1809 17.686 26.291C16.1123 24.6809 15.6294 22.2871 16.3848 20.0203L16.7417 19.0034L18.1265 20.3804C20.9595 23.1558 24.2959 24.8081 28.1152 25.2954L29.1646 25.4224Z"
                    className={style.socialMedia}
                />
            );
            break;
        case 'MS':
            content = (
                <g id="Messenger">
                    <path
                        id="Combined Shape"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM18.5716 47.9554V41.5519C14.5611 38.4998 12 33.8517 12 28.646C12 19.4526 19.9875 12 29.8407 12C39.6945 12 47.6814 19.4526 47.6814 28.646C47.6814 37.8388 39.6945 45.292 29.8407 45.292C28.0025 45.292 26.2283 45.0324 24.5592 44.5513L18.5716 47.9554Z"
                        className={style.socialMedia}
                    />
                    <path
                        id="Shape"
                        d="M27.9356 24.0868L18.3142 34.2738L27.0705 29.4696L31.6455 34.2738L41.2126 24.0868L32.5535 28.8069L27.9356 24.0868V24.0868Z"
                        className={style.socialMedia}
                    />
                </g>
            );
            break;
        case 'IN':
            content = (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30 0C13.4316 0 0 13.4314 0 30C0 46.5686 13.4316 60 30 60C46.5684 60 60 46.5686 60 30C60 13.4314 46.5684 0 30 0ZM21.2007 24.8474V45.2747H14.4019V24.8474H21.2007ZM21.6484 18.5283C21.6045 16.5254 20.1719 15 17.8462 15C15.5205 15 14 16.5254 14 18.5283C14 20.4897 15.4756 22.0591 17.7578 22.0591H17.8013C20.1719 22.0591 21.6484 20.4897 21.6484 18.5283ZM37.8916 24.3677C42.3652 24.3677 45.7192 27.2878 45.7192 33.5623L45.7188 45.2744H38.9204V34.3459C38.9204 31.6008 37.9365 29.7278 35.4756 29.7278C33.5972 29.7278 32.4785 30.9905 31.9873 32.2102C31.8076 32.6472 31.7632 33.2563 31.7632 33.8669V45.2751H24.9639C24.9639 45.2751 25.0537 26.7646 24.9639 24.8479H31.7632V27.7412C32.6655 26.3503 34.2817 24.3677 37.8916 24.3677Z"
                    className={style.socialMedia}
                />
            );
            break;
        default:
            break;
    }

    return content;
};

export default IconContent;
