import React from 'react';
import './Widgets.css';




function Widgets() {
    return (
        <div className="Widgets">
            <iframe
                src="https://www.youtube.com/embed/I2UBjN5ER4s"  
                width="280"
                height="220"
                styles={{ border: "None", overflow: "hidden" }}
                scrolling="no"
                frameborer="0"
                allowTransparency="true"
                allow="encrypted-media"
                >
                </iframe>
        </div>
    );
}

export default Widgets;