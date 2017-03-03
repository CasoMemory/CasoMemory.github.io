import React from 'react';

export default class TextComponent extends React.Component{
    getValues(){
        return this.props.title;
    }
    render(){
        return (
            <div className={this.getValues().className}>
                {this.getValues().data}
            </div>
        );
    }
}