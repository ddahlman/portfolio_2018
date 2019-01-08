import React from 'react';
import { ImageConsumer } from './ImageLoader';
import Card from './Card';
import PropTypes from 'prop-types';
import EmptyCard from './EmptyCard';

const AllCards = ({ cards, ...other }) => {
	return (
		<ImageConsumer>
			{({ loadedImgs, hasLoaded }) =>
				cards.map((card, i) => loadedImgs[i] ? (
					<Card
						key={`card-${card.id}`}
						src={loadedImgs[i].src}
						cardIndex={i}
						hasLoaded={hasLoaded}
						enlarged={card.enlarged}
						text={card.text}
						{...other}
					/>
				) : <EmptyCard key={`empty-${card.id}`} />)
			}
		</ImageConsumer>
	);
};

export default AllCards;

AllCards.propTypes = {
	cards: PropTypes.array
};