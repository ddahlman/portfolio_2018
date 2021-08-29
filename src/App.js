import React, { Component } from 'react';
import { AppProvider } from './ContextComponent';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Logo from './Logo';
import style from './App.scss';

export default class App extends Component {
    state = {
        animationComplete: false,
        transitionComplete: false,
    };

    checkAnimationStatus = (bool) => {
        this.setState({ animationComplete: bool });
    };

    checkTransitionStatus = () => {
        this.setState({ transitionComplete: !this.state.transitionComplete });
    };

    render() {
        const { animationComplete, transitionComplete } = this.state;
        const panelLeft = animationComplete
            ? `${style.panel} ${style.left} ${style.animLeft}`
            : `${style.panel} ${style.left}`;
        const panelRight = animationComplete
            ? `${style.panel} ${style.right} ${style.animRight}`
            : `${style.panel} ${style.right}`;
        const appContainer = !transitionComplete ? style.container : '';
        return (
            <div className={appContainer}>
                {animationComplete ? (
                    [
                        <Menu key={'menu'} />,
                        <AppProvider
                            key={'appProvider'}
                            value={transitionComplete}
                        >
                            <Content key={'content'} />
                        </AppProvider>,
                    ]
                ) : (
                    <Logo key={'logo'} isFinished={this.checkAnimationStatus} />
                )}
                {!transitionComplete && [
                    <div
                        key={'panel-1'}
                        onTransitionEnd={this.checkTransitionStatus}
                        className={panelLeft}
                    ></div>,
                    <div key={'panel-2'} className={panelRight}></div>,
                ]}
            </div>
        );
    }
}
