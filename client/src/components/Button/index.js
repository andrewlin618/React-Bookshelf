import React from "react";
import './style.css';
// import { Link } from "react-router-dom";

export function BtnSubmit(props){
        return(
            <button className={props.className} onClick={props.onClick} style={{fontWeight:'bold'}}>
                {props.children}
            </button>
        )
    }

export function BtnView(props){
        return(
            <a className={props.className} href={props.link} onClick={props.onClick}  style={{fontWeight:'bold'}} target={props.target}>
                {props.children}
            </a>
        )
    }

export function BtnSave(props){
        return(
            <button className={props.isSaved ? ('btn btn-secondary card-btn'):('btn btn-success card-btn')}  onClick={props.onClick} style={{fontWeight:'bold'}}>
                {props.isSaved?("SAVED"):("SAVE")}
            </button>
        )
    }