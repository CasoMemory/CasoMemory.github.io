import React from 'react';

export default class Navigator extends React.Component{
    render(){
        const Links = this.props.data;
        return (
            <div className="nav flex">
                {
                    Links.map(function (link) {
                        return <a key={link.name} href={link.href} target="_blank" className="flex">
                            <img src={'../src/img/' + link.name + '.png'} alt={link.name} title={link.name}></img></a>
                    })
                }
            </div>
        );
    }
}

