<template>
    <div class="right-content">
        <div class="card">
            <card/>
        </div>

        <span class="right-title"> 人工智能</span>
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
                    title:"ApacheCN 人工智能知识树 v1.0",
                    text:"最近总是有人问我，把 ApacheCN 这些资料看完一遍要用多长时间，如果你一本书一本书看的话，的确要用很长时间。但我觉得这是非常麻烦的，因为每本书的内容大部分是重复的，有些不重复的内容你也不好找。为了方便大家，我就把每本书的章节拆开，再按照知识点合并，手动整理了这个知识树。大家可以按照知识点依次学习，如果理解了一个知识点，就没必要看其余文章，直接跳到下一个就行了。",
                    href:"https://segmentfault.com/a/1190000019287040",
                    num:"34",
                    author:"疯狂的技术宅",
                    time:"1天前"
                },
                {
                    title:"SLS机器学习最佳实战：日志聚类+异常告警",
                    text:"OpenAI 的研究负责人阿莫迪（Dario Amodei）对《卫报》说，GPT-2 从两个方面具有革命性的突破 —— 一是它的数据储藏能力巨大，是现有最前沿的 AI 文字发生器数据储量的 12 倍。这使得它能更好地理解掌握写作文风，笔法和意图。这也导致了它的第二个突破，即它的写作质量和应用的广泛性。",
                    href:"https://segmentfault.com/a/1190000019283751",
                    num:"21",
                    author:"joking_zhang",
                    time:"13小时前"
                },
                {
                    title:"分享AI有道干货 | 126 篇 AI 原创文章精选（ML、DL、资源、教程）",
                    text:"一年多来，公众号【AI有道】已经发布了 140+ 的原创文章了。内容涉及林轩田机器学习课程笔记、吴恩达 deeplearning.ai 课程笔记、机器学习、深度学习、笔试面试题、资源教程等等。值得一提的是每篇文章都是我用心整理的，编者一贯坚持使用通俗形象的语言给我的读者朋友们讲解机器学习、深度学习的各个知识点。旨在给大家一份比较完备的学习路线和提升技巧。",
                    href:"https://segmentfault.com/a/1190000019279667",
                    num:"75",
                    author:"江南一点雨",
                    time:"34分钟前"
                },
                {
                    title:"蚂蚁金服开源的机器学习工具 SQLFlow，有何特别之处？",
                    text:"阿里妹导读：近日，蚂蚁金服副 CTO 胡喜正式宣布开源机器学习工具 SQLFlow，他在大会演讲中表示：“未来三年，AI 能力会成为每一位技术人员的基本能力。我们希望通过开源 SQLFlow，降低人工智能应用的技术门槛，让技术人员调用 AI 像 SQL 一样简单。” SQLFlow 能够抽象出端到端从数据到模型的研发过程，配合底层的引擎及自动优化，具备基础 SQL 知识的技术人员即可完成大部分的机器学习模型训练及预测任务。",
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
    font-size: 35px;
    font-weight: bold;
    margin-top: 15px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
}
.card{
    width:897px;
    margin:0 auto;
    height: 300px;
}
.el-carousel__container {
    height: 300px;
    width:897px;
}
</style>
