import React from 'react';
import ReactDom from 'react-dom';
import Head from './src/components/head';
import Container from './src/components/container';
import Footer from './src/components/footer';
import './src/css/common.css';

export default class HelloWorld extends React.Component{
    //渲染组件
    render(){
        return (
            <div className="app">
                <Head />
                <Container />
                <Footer />
            </div>
        );
    }
};
ReactDom.render(<HelloWorld/>, document.getElementById('blog'));