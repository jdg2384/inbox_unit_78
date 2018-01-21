import React, { Component } from 'react'

const Message = (props) => {

    // Message Selected Read or Unread Funtions
    this.selectRead = () => {
        if(props.selected){return"row message selected"}
        else if (props.read){return "row message read"}
        else{return "row message unread"}
    }
    // jsx
    return(
        <div className={this.selectRead()}>
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input onClick={() => props.selectClick(props.id)} type="checkbox" checked={props.selected? "checked":""}/>
                    </div>
                    <div className="col-xs-2">
                        <i onClick={() => props.starClick(props.id)} className={props.starred ? "star fa fa-star":  "star fa fa-star-o"}></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11">
                {props.labels.map(labels => {
                    return <span className="label label-warning" >{labels}</span>
                })}
                <a href="#">{props.subject}</a>
            </div>
        </div>
    )
}

export default Message