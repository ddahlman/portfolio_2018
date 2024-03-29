import { ImageConsumer } from './ImageLoader';
import PropTypes from 'prop-types';
import EmptyCard from './EmptyCard';
import PortfolioCard from './PortfolioCard';

const AllPortfolioCards = ({ cards, ...other }) => {
    return (
        <ImageConsumer>
            {({ loadedImgs, hasLoaded }) =>
                cards.map((card, i) =>
                    loadedImgs[i] ? (
                        <PortfolioCard
                            key={`card-${card.id}`}
                            src={loadedImgs[i].src}
                            cardIndex={i}
                            hasLoaded={hasLoaded}
                            enlarged={card.enlarged}
                            text={card.text}
                            {...other}
                        />
                    ) : (
                        <EmptyCard key={`empty-${card.id}`} />
                    )
                )
            }
        </ImageConsumer>
    );
};

export default AllPortfolioCards;

AllPortfolioCards.propTypes = {
    cards: PropTypes.array,
};
