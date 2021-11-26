import { Route, Switch } from 'react-router-dom';
/* import {Home as HomePage} from '../Home/Home';
import {About as AboutPage} from '../About/About';
import {Portfolio as PortfolioPage} from '../Portfolio/Portfolio'; */
import { lazy, Suspense } from 'react';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ '../Home/Home'));
const About = lazy(() =>
    import(/* webpackChunkName: "About" */ '../About/About')
);
const Portolio = lazy(() =>
    import(/* webpackChunkName: "Portfolio" */ '../Portfolio/Portfolio')
);

const Content = () => {
    return (
        <Suspense fallback={<div>Loading yo</div>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portolio} />
                <Route render={() => <h1>404 Page is not found</h1>} />
            </Switch>
        </Suspense>
    );
};

export default Content;
