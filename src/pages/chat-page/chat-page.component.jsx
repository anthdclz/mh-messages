import React from 'react';
import './chat-page.styles.css';
import { chat } from './chat.data.json';

import MessageComponent from '../../components/message/message.component';

class ChatPage extends React.Component {
    constructor(){
        super();
        this.state = {
            chatList: []
        }
    }
    deleteMessage = (key) => {
        const newList = this.state.chatList;
        delete newList[key];
        this.setState({
            chatList: newList
        });
    }
    componentDidUpdate(){
        console.log('update...');
    }
    componentDidMount(){
        // Dedupe Messages
        const originalList = chat;
        const dedupedList = [];
        const listUniques = new Set();
        for (const messageObject of originalList) {
            let msg = JSON.stringify({uuid: messageObject.uuid, content: messageObject.content});
            if(!listUniques.has(msg)){
                listUniques.add(msg);
                dedupedList.push(messageObject);
            }
        };
        this.setState({
            chatList: dedupedList
        });
    }
    render(){
        const { chatList } = this.state;
        return(
            <div id="chat-page">
                {chatList.map(({...message}, key) => (
                    <MessageComponent key={key} index={key} deleteMessage={this.deleteMessage} {...message} />
                ))}
            </div>
        )
    }
}

export default ChatPage;