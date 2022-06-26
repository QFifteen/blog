/*定义一个名为index-title的组件，使用<index-title></index-title>来使用
  可通过new Vue实例，作为自定义的元素来使用，
  它具有Vue身上的data、methods、生命周期钩子等，
  当然，作为组件，它可以无限制的复用
*/

// Vue.component：全局注册
Vue.component("index-title",{
    //传值
    props:{
        title:{
            type:String,
            default:"这是一个可复用的组件"
        }
    },
    //模板，写HTML
    template:`
        <section>
            <h1>这是一个很好的开始：{{title}}</h1>
        </section>
    `,
    //绑定的数据源
    data(){
        return{}
    },
    //绑定的方法
    methods:{
        
    }
})