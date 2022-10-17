import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./SatateProvider";
import db from "./firebase";
import firebase from 'firebase';




function MessageSender() {
  const [{user},dispatch]=useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //some clever db stuff
    db.collection('posts').add({
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      profilePic:user.photoURL,
      username:user.displayName,
      image:imageUrl
    })
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`whats on your mind  ${user.displayName}`}
          />
          <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="image URL (optional)" />
          <button onClick={handleSubmit} type="submit">
             submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoCameraIcon style={{ color: "green" }} />
          <h3>phot/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>feeling/activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
