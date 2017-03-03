import React from 'react';
import TextComponent from './textComponent'

export default class Content extends React.Component{
    render(){
        let value = this.props.data;
        return (
            <div className="content">
                <a key={value.index} href={value.url} target="_blank">
                    <TextComponent title={{className: 'content-title',data:value.title}} />
                    <TextComponent title={{className: 'content-summary',data:value.summary}} />
                </a>
                <TextComponent title={{className: 'content-time',data:value.time + ' --by CasoMemory'}}/>
            </div>
        );
    }
};

