import React from 'react';
import './chat-page.styles.css';
import { chat } from './chat.data.json';

import MessageComponent from '../../components/message/message.component';

class ChatPage extends React.Component {
    constructor(){
        super();
        this.state = {
            chatList: chat
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
        const listUniques = new Set();
        const duplicateKeys = [];
        let i=0;
            for (const messageObject of this.state.chatList) {
            let msg = JSON.stringify({uuid: messageObject.uuid, content: messageObject.content});
            if(listUniques.has(msg)){
                duplicateKeys.push(i);
            }else{
                listUniques.add(msg);
            }
            i++;
        };
        duplicateKeys.reverse();
        for(const key of duplicateKeys){
            this.deleteMessage(key);
        }
    }
    render(){
        const { chatList } = this.state;
        return(
            <div id="chat-page">
                {chatList.map(({...message}, key) => (
                    <MessageComponent key={key} index={key} {...message} />
                ))}
            </div>
        )
    }
}

export default ChatPage;