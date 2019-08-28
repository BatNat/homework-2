import React, {Component} from 'react';
import './Chat.css';
import Message from 'components/Message';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageInput: ''
        };
    }
    
    changeInputMessage = (event) => {
        this.setState({
            messageInput: event.target.value
        });
    };

    sendMessageOnEnter = (event) => {
        if (event.key === 'Enter') {
            this.setState({
                messages: [
                    ...this.state.messages, 
                    {text: this.state.messageInput}
                ],
                messageInput: ''
            });
            
        } else {
            return false;
        }
    };

    render() {
        return (
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                        {this.state.messages.map((message, index) => {
                            return <Message key={index} text={message.text} />;
                        })}
                    </div>

                </div>

                <input
                    className="input-message"
                    value={this.state.messageInput}
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
            </div>

        );
    }
}