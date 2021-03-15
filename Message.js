import React, {useState} from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase.js';
import firebase from "firebase";

function Message() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
                 message: input,
                 timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                 profilePic : user.phototURL,
                 username: user.displayName,
                 image: imageUrl,
        });

        setInput("");
        setImageUrl("");
    };
    return (
        <div className="message">
            <div className="message-top" >
                <Avatar src={user.photoURL} />
                <form>
                    <input type="text" value={input}
                        onChange={(e) => setInput (e.target.value) }
                        placeholder={`what's on your mind, ${user.displayName}?`}  
                        className="message-input" />

                    <input type="text" value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder={"image url (optional)"} />

                    <button onClick={handleSubmit} type="submit">hidden submit </button>
                 </form>
            </div>
            <div className="message-bottom">
                <div className="message-option">
                    <VideoCallIcon style={{ color: "red" }} />
                    <h4>Live video</h4>
                </div>
                <div className="message-option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="message-option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>

        </div>
    );
}

export default Message;