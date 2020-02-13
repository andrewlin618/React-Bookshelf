import React from "react";
import './style.css';
// import { Link } from "react-router-dom";

export function BtnSubmit(props){
            return(
                <button className="btn btn-secondary search-btn"  onClick={props.onClick} style={{fontWeight:'bold'}}><i className="fas fa-search" />
                </button>
            )
        }

export function BtnView(props){
            return(
                <a className={'btn btn-dark card-btn mr-1'} href={props.link} onClick={props.onClick}  style={{fontWeight:'bold'}} target={props.target}><i className="fas fa-info-circle" />
                    {' ' + props.children}
                </a>
            )
        }

export function BtnSave(props){
            if(props.isSaved)
            return(
                <button className={'btn btn-secondary card-btn'}  onClick={props.onClick} style={{fontWeight:'bold'}}><i className="fas fa-trash-alt" />
                    {" DELETE"}
                </button>
            )
            return(
                <button className={'btn btn-success card-btn'}  onClick={props.onClick} style={{fontWeight:'bold'}}><i className="fas fa-bookmark" />
                    {" SAVE"}
            </button>
            )

        }