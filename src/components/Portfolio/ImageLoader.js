import React, { Component, Fragment, createContext } from 'react';
import PropTypes from 'prop-types';

const ImageContext = createContext();

export default class ImageLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedImgs: this.props.images.map((img) => ({
                ...img,
                src: img.unloadedSrc,
            })),
            hasLoaded: false,
        };
        this.imgArray = [];
    }
    /* window.onLoad instead of img? */
    componentDidMount() {
        const { loadedImgs } = this.state;
        loadedImgs.forEach((img, i) => {
            const { src } = this.props.images[i];
            const realImage = new Image();
            realImage.onload = () => {
                const images = [...loadedImgs];
                images[i].src = src;
                this.imgArray = [...this.imgArray, 'loaded'];
                this.imgArray.length >= this.props.images.length &&
                    this.imgsHasLoaded(images);
            };
            realImage.src = src;
        });
    }

    imgsHasLoaded(images) {
        this.setState({ hasLoaded: true, loadedImgs: images });
    }

    render() {
        const { children } = this.props;
        return (
            <Fragment>
                <ImageContext.Provider value={this.state}>
                    {children}
                </ImageContext.Provider>
            </Fragment>
        );
    }
}

export const ImageConsumer = ImageContext.Consumer;
ImageLoader.propTypes = {
    images: PropTypes.array,
    src: PropTypes.string,
    children: PropTypes.node,
};
