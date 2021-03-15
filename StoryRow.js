import React from 'react';
import './StoryRow.css';
import Story from './Story';

function StoryRow() {
    return (
        <div className="storyrow">
            <Story
                image="https://source.unsplash.com/user/erondu/1600x900"
                profileSrc="https://source.unsplash.com/user/erondu/1600x900"
                title="dhina" />
            <Story
                image="/img/story-1.jfif"
                profileSrc="/img/profile-1.jfif"
                title="mani" />
            <Story
                image="/img/story-2.jfif"
                profileSrc="/img/profile-5.jfif"
                title="sharma" />
            <Story
                image="/img/story-3.jfif"
                profileSrc="/img/profile-3.jfif"
                title="shankar" />
            <Story
                image="/img/story-4.jfif"
                profileSrc="/img/profile-4.jfif"
                title="arun" />
        </div>
    );
}

export default StoryRow;

