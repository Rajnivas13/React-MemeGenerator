import React from "react";

export default function  Header(){
    return(
        <div className="row">
            <div className="header">
                <div className="col-md-5" logo>
                    <img src={process.env.PUBLIC_URL +'Images/troll-face.png'} id='meme-pic' alt='meme'/>
                    <text id="app-name">MemeGenerator</text>
                </div>
                <p id="course">React course project -3</p>  
            </div>
        </div>
    )
}