import React from "react";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"

function NotFound(){
    return(
        <div>
            <Nav />
            <Jumbotron />
            <h4 className="text-center">404 Not Found. You visited the wrong path.</h4>
        </div>
    )
}

export default NotFound;
