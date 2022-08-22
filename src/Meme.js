import React, { useState } from "react";
import memesData from "./memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Generate Meme
        </button>
      </form>
      <img src={memeImage} alt="" className="meme--image" />
    </main>
  );
};

export default Meme;
