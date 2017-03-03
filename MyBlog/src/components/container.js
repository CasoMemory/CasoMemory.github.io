import React from 'react';
import Content from './content';

export default class Container extends React.Component{
    getValues(){
        let values = {
            "data":[
                {
                    "key": "1",
                    "title": "LocalStorage和sessionStorage之间的区别",
                    "summary": "众所周知，自从HTML 5 标准出现之后，本地化存储一度成为热搜的关键词。在HTML 5 最开始时，本地存储有两种方式：一种是web Storage，另一种是web SQL。由于web SQL的实现是基于SQLite，它更倾向于DataBase方向，且W3C官方在2011年11月宣布不在维护web SQL规范，故其API接口目前已经不属于HTML 5的范畴。因此，目前我们常讲的HTML 5本地存储，多指的是web Storage。...",
                    "url": "http://blog.csdn.net/fcdd123/article/details/56286106",
                    "time": "2017-02-21"
                },{
                    "key": "2",
                    "title": "JavaScript对快速排序算法的初步实现",
                    "summary": "因为一次看到书中有提到快速排序算法，然而自己只是知道快速排序的实现原理是使用分治法，具体的原理和细节实现却不是特别的清楚。故而向认识的一位算法大师ACdreamers（吾以为。其博客地址：ACdreamers）求助，随后大师分享了我一篇他之前写过的博客。由此篇博客的学习，得以理解快速排序算法，该篇博客的具体地址如是：BFPRT算法。在BFPRT算法中，强调的是对中位数取中位数，故它又叫中位数的中位数算法。...",
                    "url": "http://blog.csdn.net/fcdd123/article/details/55505372",
                    "time": "2017-02-17"
                },{
                    "key": "3",
                    "title": "《JavaScript DOM 编程艺术》（第2版）之读后感悟 ",
                    "summary": "元旦假期后的第一周，因为看到一些前端JS前辈的一些经验之谈，深有感触，随之买了《JavaScript DOM编程艺术》（第2版）和《JavaScript高级程序设计》这两本书。在阅读完第一本书——《JavaScript DOM编程艺术》之后，有一些自己的感悟和理解，顺带把书中的一些常用的原生JS所写的方法罗列出来，以供参考和使用。...",
                    "url": "http://blog.csdn.net/fcdd123/article/details/54744281",
                    "time": "2017-01-26"
                },{
                    "key": "4",
                    "title": "微信小程序之初体验 ",
                    "summary": "月初的时候，偶然间因为同事的一句话，开始认识和了解微信小程序。自从那天起，对小程序的开发文档和使用方法的研究就一发不可收拾。经过将近一个月的折腾，总算是入门了，对于小程序的一些使用和架构设计也有了自己的理解和看法，对此从以下几点去阐述。...",
                    "url": "http://blog.csdn.net/fcdd123/article/details/53924530",
                    "time": "2016-12-29"
                },{
                    "key": "5",
                    "title": "Echarts的使用和学习心得体会 ",
                    "summary": "因为项目的原因，最近学习了Echarts插件，在开发过程中碰见许多的问题。问题大多数都是些无足轻重的，在这里主要是想把自己在学习期间的心得感悟写出来，以便大家参考和学习。...",
                    "url": "http://blog.csdn.net/fcdd123/article/details/51273532",
                    "time": "2016-04-28"
                }
            ]
        };
        return values.data;
    }
    render(){
        const contents = this.getValues();
        return (
            <div className="container">{
                //根据数据条数来渲染组件个数
                contents.map(function (content) {
                    return <Content key={content.key} data={content}/>
                })
            }
            </div>
        );
    }
};
