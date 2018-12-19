import React, { Component } from 'react';
import ShareButton from './ShareButton';
import AllSocialButtons from './AllSocialButtons';
import style from './HillsWithTrees.scss';

export default class ShareContainer extends Component {
	constructor() {
		super();
		this.state = {
			socialObjects: [
				{
					id: 'FB',
					toolTip: 'share on facebook',
					href:
                        'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdanieldahlman.se%2F'
				},
				{
					id: 'TW',
					toolTip: 'share on twitter',
					href:
                        'https://twitter.com/intent/tweet?url=https%3A%2F%2Fdanieldahlman.se%2F&text=Daniel+Dahlmans+portfolio%2C+enjoy%21&hashtags=frontenddev,js'
				},
				{
					id: 'MS',
					toolTip: 'share on messenger, app required',
					href:
                        'fb-messenger://share/?link=https%3A%2F%2Fdanieldahlman.se%2F&app_id=188277318793927'
				},
				{
					id: 'IN',
					toolTip: 'share on linkedin',
					href:
                        'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdanieldahlman.se%2F&title=Daniel+Dahlman+portfolio&summary=Daniel+Dahlmans+portfolio%2C+enjoy%21&source=Daniel+Dahlman'
				}
			],
			isOpen: false
		};
		this.toggleShare = this.toggleShare.bind(this);
	}

	toggleShare() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		const { socialObjects, isOpen } = this.state;
		return (
			<section className={style.speedDialContainer}>
				<button
					data-share-tooltip="share"
					onClick={this.toggleShare}
					type="button"
					className={style.speedDialBtn}
				>
					<ShareButton />
				</button>
				<AllSocialButtons socialObjects={socialObjects} isOpen={isOpen} />
			</section>
		);
	}
}