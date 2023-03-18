import React from "react";
import memesData from "./memesData";

export default function Form() {

    const [memeImage,setmemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");

    function memedatahandler() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setmemeImage(memesArray[randomNumber].url)
        console.log(memesArray[randomNumber].url)
    }

    return (
        <div className="form-component">
            <div className="form-main">
                <form className="form">
                    <input type="text" placeholder="firstbox" className="input-field1" />
                    <input type="text" placeholder="secondbox" className="input-field2" />
                    <button className="form-button" onMouseOver={memedatahandler}>Get a new meme image</button>
                </form>
            </div>
            <img src={memeImage} alt="meme" id="meme-images" />
        </div>
    )
}