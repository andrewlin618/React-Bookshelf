import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom'
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';
import NotFound from './pages/NotFound';
// import Auth from './pages/AuthPage';
// import Loading from './pages/Loading';
// import { useAuth0 } from "./react-auth0-spa";

function App() {
    // const {loading} = useAuth0();

    // if (loading) {
    //     return <h1>Loading</h1>;
    // }
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/saved" component={SavedPage} />
                {/* <Route exact path="/auth" component={Auth} /> */}
                <Route component={NotFound} />
            </Switch>            
        </Router>
    )
}

export default App;    
