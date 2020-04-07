import React from "react";
import Nav from "../../components/Nav"
import Jumbotron from "../../components/Jumbotron"

function Loading(){
    return(
        <div>
            <Nav />
            <Jumbotron />
            <h4 className="text-center">Loading......</h4>
        </div>
    )
}

export default Loading;
