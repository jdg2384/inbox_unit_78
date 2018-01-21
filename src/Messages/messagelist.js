import React, { Component } from 'react';

import Message from './message.js'
import MessageCss from './message.css'

const MessageList = (props) => {
    //console.log('click', props.starClick)
    return(
        <div>
            {props.messages.map(message => {
                return < Message 
                // Events
                starClick={props.starClick}
                selectClick={props.selectClick}
                // End Of Events
                key={message.id}
                id={message.id} 
                subject={message.subject} 
                read={message.read}
                selected={message.selected}
                starred={message.starred}
                labels={message.labels}
                />
            })}
        </div>
    )
}

export default MessageList


// "id": 8,
// "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
// "read": true,
// "starred": true,
// "labels": []