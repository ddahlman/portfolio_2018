import React from 'react';
import { ImageConsumer } from './ImageLoader';
import Card from './Card';
import PropTypes from 'prop-types';

const AllCards = ({ cards, ...other }) => {
	return (
		<ImageConsumer>
			{({ loadedImgs, hasLoaded }) =>
				cards.map((card, i) => (
					<Card
						key={`card-${card.id}`}
						src={loadedImgs[i]}
						cardIndex={i}
						scaleCard={hasLoaded}
						enlarged={card.enlarged}
						text={card.text}
						{...other}
					/>
				))
			}
		</ImageConsumer>
	);
};

export default AllCards;

AllCards.propTypes = {
	cards: PropTypes.array
};