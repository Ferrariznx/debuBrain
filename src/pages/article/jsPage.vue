<template>
    <div class="right-content">
        <card/>
        <span class="right-title" > 前端</span>
        <div v-for="item in contentList" :key="item.id">
            <contentText :title="item.title" :text="item.text" :num="item.num" :author="item.author" :time="item.time"/>
        </div>
    </div>
</template>

<script>
import contentText from './../../components/contentText'
import card from './../../components/base/card'
export default {
    data(){
        return{
            contentList:[
                {
                    title:"我们不背诵 API，只实现 API",
                    text:"有不少刚入行的同学跟我说：“JavaScript 很多 API 记不清楚怎么办？数组的这方法、那方法总是傻傻分不清楚，该如何是好？操作 DOM 的方式今天记，明天忘，真让人奔溃！",
                    href:"https://segmentfault.com/a/1190000019287040",
                    num:"34",
                    author:"疯狂的技术宅",
                    time:"1天前"
                },
                {
                    title:"Node.js究竟是什么？",
                    text:"如果你了解 Java 的话，会发现它们有点像。JavaScript 原来是只能在浏览器中运行的，当把它扩展成为可以在你的计算机上作为独立的程序运行时，Node.js 就出现了。现在你可以用 JavaScript 做更多的事情，而不仅仅是用在网站的互动和特效上。",
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
                    title:"浅析JavaScript中原型及constructor、__proto__、prototype的关系",
                    text:"先说一说为什么要搞清楚JavaScript的原型，因为这就是JS的根。JavaScript虽然不是一门传统的面向对象语言，但它有自己的类和继承机制，最重要的就是它采用了原型的概念。与其说JS是面向对象，不如叫面向原型。JS这门语言从开发之初就是基于原型去做事情的，它是面向对象的思想，但归根结底是面向原型的原理，从操作上来说也是这样的。",
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
                    title:"浅析JavaScript中原型及constructor、__proto__、prototype的关系",
                    text:"先说一说为什么要搞清楚JavaScript的原型，因为这就是JS的根。JavaScript虽然不是一门传统的面向对象语言，但它有自己的类和继承机制，最重要的就是它采用了原型的概念。与其说JS是面向对象，不如叫面向原型。JS这门语言从开发之初就是基于原型去做事情的，它是面向对象的思想，但归根结底是面向原型的原理，从操作上来说也是这样的。",
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
