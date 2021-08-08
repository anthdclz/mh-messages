import React from 'react';
import { getDay, getMonth } from './message.utils';
import './message.styles.css';

const MessageComponent = ({content, senderUuid, sentAt, index, deleteMessage}) => {
    const d = new Date(sentAt);
    const sentAtDisplayString = `${getDay(d.getDay())}, ${getMonth(d.getMonth())} ${d.getDate()}, ${d.getFullYear()} at ${d.toString().substring(16)}`;
    return(
        <div className='message'>
            <span className='message-content'>
            {senderUuid}: {content}<br /> <div className="message-details">{sentAtDisplayString}</div>
            </span>
            <span className='delete-button' onClick={() => deleteMessage(index)}>
                Delete
            </span>
        </div>
    );
};

export default MessageComponent;