import React from 'react';
import './chat-page.styles.css';
import { chat } from './chat.data.json';

import MessageComponent from '../../components/message/message.component';

class ChatPage extends React.Component {
    constructor(){
        super();
        this.state = {
            list: chat
        }
    }
    render(){
        const { list } = this.state;
        return(
            <div id="chat-page">
                {list.map(({...message}, key) => (
                    <MessageComponent key={key} index={key} {...message} />
                ))}
            </div>
        )
    }
}

export default ChatPage;