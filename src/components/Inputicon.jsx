import React from "react";
import './Inputicon.css';

function Inputicon(props){
    return(
        <div className="inputicon">
            <label>{props.text}</label>
            <div className="inputicon_main">
                <input type={props.type} placeholder={props.placeholder} />
                <img className="inputicon_img" src={props.image} alt="mail" /> 
            </div>
        </div>
    );
}

export default Inputicon;