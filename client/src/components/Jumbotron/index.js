import React from "react";
import "./style.css";

function Jumbotron(){
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-5 text-light">React Bookshelf</h1>
                <p className="lead text-light mt-3 mb-0">A MERN Stack web application developed with:</p>
                <p className="lead text-light">MongoDB, Express.js, React.js, Node.js  </p>
            </div>
        </div>
    )
}

export default Jumbotron;
