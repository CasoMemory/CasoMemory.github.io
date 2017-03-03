import React from 'react';
import TextComponent from './textComponent';
import '../css/style.css';

export default class Head extends React.Component{
    getContent(){
        return {
            className: 'text',
            data:'Programming is an art.'
        }
    }
    render(){
        return (
            <div className="head">
                <TextComponent title={this.getContent()}/>
            </div>
        );
    }
}