import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom'
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';
import NotFound from './pages/NotFound';
import Auth from './pages/AuthPage';

const App = () => (
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/saved" component={SavedPage} />
            <Route exact path="/auth" component={Auth} />
            <Route component={NotFound} />
            {/* <Route path="/api/books" component= */}
            </Switch>
        </div>
    </Router>
    // <h1>Join</h1>
);

export default App;    
