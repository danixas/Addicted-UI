import { React } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/dashboard';

const App = () => {
    return(
        <Router>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/test" component={Home}></Route>
        </Router>
    );
};

export default App;
