import './message.styles.css';

const MessageComponent = ({content, senderUuid, sentAt, index, deleteMessage}) => {
    const d = new Date(sentAt);
    const sentAtDisplayString = `${d.getDate()}, ${d.getFullYear()} at ${d.toString().substring(16)}`;
    return(
        <div className='message'>
            <span className='message-content'>
                {index} - Content: {content}, Sender:{senderUuid} | {sentAtDisplayString}
            </span>
            <span className='delete-button' onClick={() => deleteMessage(index)}>
                Delete
            </span>
        </div>
    );
};

export default MessageComponent;