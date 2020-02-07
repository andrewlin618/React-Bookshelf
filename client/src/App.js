import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';
import NotFound from './pages/NotFound';

const App = () => (
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/saved" component={SavedPage} />
            <Route component={NotFound} />
            {/* <Route path="/api/books" component= */}
            </Switch>
        </div>
    </Router>
    // <h1>Join</h1>
);

export default App;    
