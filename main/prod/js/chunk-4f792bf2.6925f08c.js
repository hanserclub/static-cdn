(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f792bf2"],{"2a38":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-like"},[e("ul",{staticClass:"posts"},[t._l(t.postList,(function(s){return e("li",{key:s.id,staticClass:"post"},[e("post-brief",{staticClass:"post-brief",attrs:{post:s,levels:t.levels,author:s.author,lastReply:s.lastReply},on:{like:function(e){return t.like(s)}}},[e("template",{slot:"right-top"},[e("span",{staticClass:"like-time"},[t._v("点赞时间: "+t._s(s.like_time))])])],2)],1)})),t.loading?e("post-skeleton"):t._e()],2),e("el-pagination",{attrs:{"current-page":t.params.page,"page-size":t.params.pageSize,"prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.totalPosts},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},i=[],n=s("db04"),l=s("365c"),o=s("2f62"),r=s("11a4"),p=s("3752"),c={name:"my-like",metaInfo(){return{title:"我的点赞 - 毛怪俱乐部",meta:[{name:"keywords",content:"我的点赞,毛怪,hanser,社区,毛怪俱乐部"},{name:"description",content:"我的点赞过的帖子"}]}},data(){return{postList:[],params:{page:1,pageSize:30},totalPosts:0,liking:!1,loading:!1}},components:{PostBrief:r["a"],PostSkeleton:p["a"]},computed:{...Object(o["d"])({levels:t=>t.level.levels})},methods:{...Object(o["c"])({addUserExp:"users/addUserExp"}),getData(){this.loading=!0,n["a"].get(l["a"].myLike,{params:this.params}).then(t=>{0===t.code&&(this.postList=t.list,this.totalPosts=t.total),this.loading=!1})},like(t){this.liking?this.$message({type:"warning",message:"操作太快了~"}):(this.liking=!0,n["a"].post(l["a"].like+"/"+t.id,{author:t.author.uid,liked:t.liked}).then(e=>{if(0!==e.code)return this.$message({type:"warning",message:e.msg}),void(this.liking=!1);t.liked=!!e.liked,this.addUserExp(e.exp),t.liked?t.likes+=1:t.likes-=1,this.liking=!1}))},handleSizeChange(t){this.params.page=1,this.pageSize=t,this.getData()},handleCurrentChange(t){this.params.page=t,this.getData()}},mounted(){this.getData()}},d=c,h=(s("33c7"),s("2877")),k=Object(h["a"])(d,a,i,!1,null,"73afe9c3",null);e["default"]=k.exports},"2fae":function(t,e,s){},"33c7":function(t,e,s){"use strict";s("2fae")},3752:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-skeleton"},[e("el-skeleton",{attrs:{animated:"",count:10}},[e("template",{slot:"template"},[e("div",{staticClass:"sk-top"},[e("el-skeleton-item",{staticStyle:{width:"50px",height:"50px"},attrs:{variant:"image"}}),e("div",{staticClass:"sk-info"},[e("div",{staticClass:"sk-nickname"},[e("el-skeleton-item",{staticStyle:{width:"64px"},attrs:{variant:"text"}})],1),e("div",{staticClass:"sk-time"},[e("el-skeleton-item",{staticStyle:{width:"64px"},attrs:{variant:"text"}})],1)]),e("el-skeleton-item",{staticStyle:{width:"80px"},attrs:{variant:"text"}})],1),e("el-skeleton-item",{staticStyle:{width:"200px",margin:"10px 0"},attrs:{variant:"h3"}}),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),e("div",{staticClass:"sk-divider"})],1)],2)],1)},i=[],n={name:"post-skeleton"},l=n,o=(s("dc2b"),s("2877")),r=Object(o["a"])(l,a,i,!1,null,"d50f0d4c",null);e["a"]=r.exports},"7ada":function(t,e,s){},dc2b:function(t,e,s){"use strict";s("7ada")}}]);