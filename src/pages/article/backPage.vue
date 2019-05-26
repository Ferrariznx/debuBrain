<template>
    <div class="right-content">
        <card/>
        <span class="right-title">后端</span>
        <div v-for="item in contentList" :key="item.id">
            <contentText :title="item.title" :text="item.text" :num="item.num" :author="item.author" :time="item.time"/>
        </div>
    </div>
</template>

<script>
import card from './../../components/base/card'
import contentText from './../../components/contentText'
export default {
    data(){
        return{
            contentList:[
                {
                    title:"深入理解控制反转（IoC）和依赖注入（DI）",
                    text:"容器，字面上理解就是装东西的东西。常见的变量、对象属性等都可以算是容器。一个容器能够装什么，全部取决于你对该容器的定义。当然，有这样一种容器，它存放的不是文本、数值，而是对象、对象的描述（类、接口）或者是提供对象的回调，通过这种容器，我们得以实现许多高级的功能，其中最常提到的，就是 “解耦” 、“依赖注入（DI）”。本文就从这里开始。",
                    href:"https://segmentfault.com/a/1190000019287040",
                    num:"34",
                    author:"疯狂的技术宅",
                    time:"1天前"
                },
                {
                    title:"Nginx 静态文件服务配置及优化",
                    text:"root 指令指定将用于搜索文件的根目录。 为了获取所请求文件的路径，NGINX 将请求 URI 附加到 root 指令指定的路径。该指令可以放在 http {}，server {} 或 location {} 上下文中的任何级别。在下面的示例中，为虚拟服务器定义了 root 指令。 它适用于未包含根指令的所有location {} 块，以显式重新定义根：",
                    href:"https://segmentfault.com/a/1190000019283751",
                    num:"21",
                    author:"joking_zhang",
                    time:"13小时前"
                },
                {
                    title:"浅析JavaScript中原型及constructor、__proto__、prototype的关系",
                    text:"先说一说为什么要搞清楚JavaScript的原型，因为这就是JS的根。JavaScript虽然不是一门传统的面向对象语言，但它有自己的类和继承机制，最重要的就是它采用了原型的概念。与其说JS是面向对象，不如叫面向原型。JS这门语言从开发之初就是基于原型去做事情的，它是面向对象的思想，但归根结底是面向原型的原理，从操作上来说也是这样的。",
                    href:"https://segmentfault.com/a/1190000019279667",
                    num:"75",
                    author:"江南一点雨",
                    time:"34分钟前"
                },
                {
                    title:"面试官:“谈谈Spring中都用到了那些设计模式?”。",
                    text:"JDK 中用到了那些设计模式?Spring 中用到了那些设计模式?这两个问题，在面试中比较常见。我在网上搜索了一下关于 Spring 中设计模式的讲解几乎都是千篇一律，而且大部分都年代久远。所以，花了几天时间自己总结了一下，由于我的个人能力有限，文中如有任何错误各位都可以指出。另外，文章篇幅有限，对于设计模式以及一些源码的解读我只是一笔带过，这篇文章的主要目的是回顾一下 Spring 中的设计模式。",
                    href:"https://segmentfault.com/a/1190000019279667",
                    num:"75",
                    author:"江南一点雨",
                    time:"34分钟前"
                },
                {
                    title:"浅析JavaScript中原型及constructor、__proto__、prototype的关系",
                    text:"先说一说为什么要搞清楚JavaScript的原型，因为这就是JS的根。JavaScript虽然不是一门传统的面向对象语言，但它有自己的类和继承机制，最重要的就是它采用了原型的概念。与其说JS是面向对象，不如叫面向原型。JS这门语言从开发之初就是基于原型去做事情的，它是面向对象的思想，但归根结底是面向原型的原理，从操作上来说也是这样的。",
                    href:"https://segmentfault.com/a/1190000019279667",
                    num:"75",
                    author:"江南一点雨",
                    time:"34分钟前"
                },
                {
                    title:"lua-resty-r3 高性能 OpenResty 路由实现 又拍云",
                    text:"对于 Web 框架里面比较经典的是 MVC 结构，其中包括 Model、View 和 Controller 三层，目前 Model 和 View 层已经有了比较好的实现，而路由一直没有特别强大、高效的解决方案。这次与大家介绍 lua-resty-r3 路由实现……",
                    href:"https://segmentfault.com/a/1190000019279667",
                    num:"75",
                    author:"江南一点雨",
                    time:"34分钟前"
                },
                {
                    title:"浅析JavaScript中原型及constructor、__proto__、prototype的关系",
                    text:"先说一说为什么要搞清楚JavaScript的原型，因为这就是JS的根。JavaScript虽然不是一门传统的面向对象语言，但它有自己的类和继承机制，最重要的就是它采用了原型的概念。与其说JS是面向对象，不如叫面向原型。JS这门语言从开发之初就是基于原型去做事情的，它是面向对象的思想，但归根结底是面向原型的原理，从操作上来说也是这样的。",
                    href:"https://segmentfault.com/a/1190000019279667",
                    num:"75",
                    author:"江南一点雨",
                    time:"34分钟前"
                },

            ]
        }       
    },
    components:{
        contentText,
        card
    }
}
</script>


<style>
.right-content{
    width:100%;
    margin-top: 20px;
}
.right-title{
    display: inline-block;
    width:100%;
    margin-top: 15px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
}

</style>
