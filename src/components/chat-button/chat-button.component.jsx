import React from 'react';
import './chat-button.styles.css';

const ChatButtonComponent = ({displayText, handleClick}) => {
    return(
        <span className="chat-button" onClick={() => handleClick()}>
            {displayText}
        </span>
    );
};

export default ChatButtonComponent;