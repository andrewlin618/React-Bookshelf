import React from "react";
import './style.css';

function Container(props){
    return(
        <div className="card shadow w-75 mx-auto">
            <div className="card-header">
                <h4 className="my-1" style={{fontWeight:'bold'}}>{props.header}</h4> 
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Container;