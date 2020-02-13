import React from "react";
import './style.css';

function Icon(props){
    if(props.icon === 'search')
        return(
            <i className="fas fa-search"></i>
        )
    if(props.icon === 'bookshelf')
        return(
            <i className="fas fa-book"></i>
        )
    return(
        <i className="fas fa-angle-double-down"></i>
    )
}

export default Icon;