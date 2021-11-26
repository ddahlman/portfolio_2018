import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

const Content = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route render={() => <h1>404 Page is not found</h1>} />
        </Switch>
    );
};

export default Content;
