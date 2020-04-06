import React from "react";
import './style.css';
import Icon from '../Icon';

function Container(props){
    return(
        <div className="card shadow mx-auto wrapper">
            <div className="card-body">
                <h5 className="my-1"><Icon icon={props.icon}/>{'  '+ props.header}</h5> 
                <hr className="my-4" />
                {props.children}
            </div>
        </div>
    )
}

export default Container;