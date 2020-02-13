import React from "react";
import './style.css';
import Icon from '../Icon';

function Container(props){
    return(
        <div className="card shadow mx-auto wrapper">
            <div className="card-header">
                <h5 className="my-1 text-light"><Icon icon={props.icon}/>{' '+ props.header}</h5> 
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Container;