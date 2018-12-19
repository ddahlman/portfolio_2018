import React, { Component, Fragment, memo, createContext } from 'react';
import style from './Portfolio.scss';
import PropTypes from 'prop-types';

const ImageContext = createContext();

const LoadImg = memo(({ src, onLoad, onError }) => {
	const handleLoad = () => onLoad(src);
	const handleError = () => onError();
	return <img alt="img" src={src} onLoad={handleLoad} onError={handleError} />;
});

export default class ImageLoader extends Component {
	constructor() {
		super();
		this.state = {
			loadedImgs: [],
			hasLoaded: false
		};
		this.onLoad = this.onLoad.bind(this);
		this.onError = this.onError.bind(this);
		this.imgArray = [];
	}

	onLoad(src) {
		this.imgArray = [...this.imgArray, src];
		this.imgArray.length >= this.props.images.length &&
			this.setState({ loadedImgs: this.imgArray, hasLoaded: true });
	}

	onError() {
		console.error('something went wrong with img load');
	}

	render() {
		const { hasLoaded } = this.state;
		const { children, images } = this.props;

		return (
			<Fragment>
				{/* !hasLoaded ? (
          <div className="hiddenImages">
            {images.map((src, i) => (
              <LoadImg key={i} src={src} onLoad={this.onLoad} />
            ))}
          </div>
        ) : (
          <ImageContext.Provider value={this.state}>
            {children}
          </ImageContext.Provider>
        ) */}
				<ImageContext.Provider value={this.state}>
					<div className={style.hiddenImages}>
						{images.map((src, i) => (
							<LoadImg key={i} src={src} onLoad={this.onLoad} onError={this.onError} />
						))}
					</div>

					{children}
				</ImageContext.Provider>
			</Fragment>
		);
	}
}

export const ImageConsumer = ImageContext.Consumer;

ImageLoader.propTypes = {
	images: PropTypes.array,
	children: PropTypes.node
};