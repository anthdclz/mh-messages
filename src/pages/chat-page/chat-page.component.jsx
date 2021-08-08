import React from 'react';
import { chat } from './chat.data.json';

import MessageComponent from '../../components/message/message.component';
import ChatButtonComponent from '../../components/chat-button/chat-button.component';
import './chat-page.styles.css';

class ChatPage extends React.Component {
    constructor(){
        super();
        this.state = {
            chatList: [],
            isSorted: false,
            sortType: 'asc',
            nextEntry: 5
        }
    }
    deleteMessage = (index) => {
        const newList = this.state.chatList;
        delete newList[index];
        this.setState({
            chatList: newList
        });
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
    addNextPage = () => {
        const { chatList, nextEntry} = this.state;
        if( nextEntry < chatList.length){
            this.setState({
                nextEntry: nextEntry + 5
            });
        }
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
        const { chatList, isSorted, sortType, nextEntry } = this.state;
        const sortText = !isSorted ? 'Sort' : sortType === 'desc' ? 'Sorted by Newest First' : 'Sorted by Oldest First';
        return(
            <div id="chat-page">
                <div>
                    <ChatButtonComponent handleClick={this.toggleSort} displayText={sortText}/>
                </div>
                {chatList.slice(0, nextEntry).map(({...messageProps}, index) => (
                    <MessageComponent key={index} index={index} deleteMessage={this.deleteMessage} {...messageProps} />
                ))}
                {nextEntry < chatList.length ? (
                    <ChatButtonComponent handleClick={this.addNextPage} displayText="Next Page"/>
                ) : null}
            </div>
        )
    }
}

export default ChatPage;