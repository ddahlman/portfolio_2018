import React from 'react';
import Card from './Card';

const AllCards = ({ cards, ...other }) => {
	return cards.map((card, i) => {
		return (
			<Card
				key={`card-${card.id}`}
				src={card.src}
				cardIndex={i}
				enlarged={card.enlarged}
				text={card.text}
				{...other}
			/>
		);
	});
};

export default AllCards;
