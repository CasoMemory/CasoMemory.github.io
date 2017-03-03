import React from 'react';
import Navigator from './nav';
import TextComponent from './textComponent';

import '../css/style.css';

export default class Footer extends React.Component{
    getNav(){
        let NavLinks = [{
            name: 'csdn',
            href: 'http://blog.csdn.net/fcdd123'
        },{
            name: 'github',
            href: 'https://casomemory.github.io/'
        }];
        return NavLinks;
    }
    render(){
        return (
            <div className="footer">
                <Navigator data={this.getNav()}/>
                <TextComponent title={{className: 'footer-text',data:'Copyright © CasoMemory 2017'}}/>
            </div>
        );
    }
}
