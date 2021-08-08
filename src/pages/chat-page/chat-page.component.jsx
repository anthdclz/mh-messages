import React from 'react';
import './chat-page.styles.css';
import { chat } from './chat.data.json';

import MessageComponent from '../../components/message/message.component';

class ChatPage extends React.Component {
    constructor(){
        super();
        this.state = {
            chatList: [],
            isSorted: false,
            sortType: 'asc'
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
    toggleSort = () => {
        const {sortType, chatList} = this.state;

        const sortedList = chatList.sort((a, b) => {
            const da = new Date(a.sentAt);
            const db = new Date(b.sentAt);
            return sortType === 'desc' ? da.getTime()-db.getTime() : db.getTime()-da.getTime();
        });

        this.setState({
            chatList: sortedList,
            isSorted: true,
            sortType: sortType === 'desc' ? 'asc' : 'desc'
        });
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
        const { chatList, isSorted, sortType } = this.state;
        return(
            <div id="chat-page">
                <div><span className="chat-button" onClick={this.toggleSort}>
                    {
                        !isSorted ? 'Sort' : sortType === 'desc' ? 'Sorted by Newest First' : 'Sorted by Oldest First'
                    }
                </span></div>
                {chatList.map(({...message}, key) => (
                    <MessageComponent key={key} index={key} deleteMessage={this.deleteMessage} {...message} />
                ))}
            </div>
        )
    }
}

export default ChatPage;