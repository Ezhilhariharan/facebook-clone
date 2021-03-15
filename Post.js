import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({ profilePic,image,username,timestamp,message}) {
    return (
        <div className=" post">
            <div className=" post-top">
                <Avatar src={profilePic} alt="img" className=" post-avatar" />
            <div className=" post-topinfo">
                <h3>{username}</h3>
                    <p>{ new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
                </div>
            <div className=" post-bottom">
                <p> {message} </p>
            </div>
            <div className=" post-image">
                <img src={image} alt="img" />
            </div>
            <div className=" post-options">
                <div className=" post-option">
                    <ThumbUpIcon />
                    <p>like</p>
                </div>
                <div className=" post-option">
                    <ChatBubbleOutlineIcon />
                    <p>like</p>
                </div>
                <div className=" post-option">
                    <NearMeIcon />
                    <p>like</p>
                </div>
                <div className=" post-option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
                </div>
        </div>
    );
}

export default Post;
