import React from 'react';
import './index.css';
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom'
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
// import Auth from './pages/AuthPage';
import Loading from './pages/Loading';
import { useAuth0 } from "./react-auth0-spa";

function App() {
    const {loading,isAuthenticated,user} = useAuth0();

    if (loading) {
        return(<Loading />)
    }
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path='/search' render={(props) => <SearchPage {...props} isAuthenticated={isAuthenticated} user={user}/>}/>
                <Route path='/saved' render={(props) => <SavedPage {...props} isAuthenticated={isAuthenticated} user={user}/>}/>
                <Route exact path="/profile" component={Profile} />
                {/* <Route exact path="/auth" component={Auth} /> */}
                <Route component={NotFound} />
            </Switch>            
        </Router>
    )
}

export default App;    
