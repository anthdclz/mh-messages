import './message.styles.css';

const MessageComponent = ({content, senderUuid, sentAt, index}) => {
    // convert to "DayOfTheWeek Month Day, Year at Time"
    const d = new Date(sentAt);
    const sentAtDisplayString = `${d.getDate()}, ${d.getFullYear()} at ${d.toString().substring(16)}`;
    return(
        <div className='message'>
            <span className='message-content'>{index} - Content: {content}, Sender:{senderUuid} | {sentAtDisplayString}</span>
        </div>
    );
};

export default MessageComponent;