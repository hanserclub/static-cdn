(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37532106"],{"17fd":function(t,e,s){},"18dd":function(t,e,s){},"1ec2":function(t,e,s){},2860:function(t,e,s){"use strict";s("17fd")},2965:function(t,e,s){},"2b0f":function(t,e,s){},"2c89":function(t,e,s){"use strict";s("1ec2")},3752:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-skeleton"},[e("el-skeleton",{attrs:{animated:"",count:10}},[e("template",{slot:"template"},[e("div",{staticClass:"sk-top"},[e("el-skeleton-item",{staticStyle:{width:"50px",height:"50px"},attrs:{variant:"image"}}),e("div",{staticClass:"sk-info"},[e("div",{staticClass:"sk-nickname"},[e("el-skeleton-item",{staticStyle:{width:"64px"},attrs:{variant:"text"}})],1),e("div",{staticClass:"sk-time"},[e("el-skeleton-item",{staticStyle:{width:"64px"},attrs:{variant:"text"}})],1)]),e("el-skeleton-item",{staticStyle:{width:"80px"},attrs:{variant:"text"}})],1),e("el-skeleton-item",{staticStyle:{width:"200px",margin:"10px 0"},attrs:{variant:"h3"}}),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),e("el-skeleton-item",{staticStyle:{width:"100%"},attrs:{variant:"text"}}),e("div",{staticClass:"sk-divider"})],1)],2)],1)},i=[],n={name:"post-skeleton"},o=n,l=(s("dc2b"),s("2877")),r=Object(l["a"])(o,a,i,!1,null,"d50f0d4c",null);e["a"]=r.exports},3847:function(t,e,s){"use strict";s("74b9")},"3c45":function(t,e,s){"use strict";s("cdbc")},"4a38":function(t,e,s){"use strict";s("7231")},5229:function(t,e,s){},"59a4":function(t,e,s){},7150:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"avatar",style:t.avatarStyle,on:{click:t.toHomepage}},[e("img",{attrs:{src:t.avatarUrl,width:t.size,height:t.size,alt:t.alt||""}})])},i=[],n={name:"avatar",props:["url","size","alt","uid"],computed:{avatarStyle(){return`width: ${this.size}px; height: ${this.size}px`},avatarUrl(){return this.url||"https://cdn.2550505.com/share/legacy-sso/thumbnail.default.png"}},methods:{toHomepage(){window.open("/space/"+this.uid)}}},o=n,l=(s("e9ec"),s("2877")),r=Object(l["a"])(o,a,i,!1,null,"5f6430d2",null);e["a"]=r.exports},7231:function(t,e,s){},"74b9":function(t,e,s){},"788a":function(t,e,s){},"7ada":function(t,e,s){},"7b81":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-content"},[e("router-link",{staticClass:"title",attrs:{to:"/post/"+t.id,target:t.target}},[t.labels.length?e("ul",{staticClass:"labels"},t._l(t.labels,(function(s,a){return e("li",{key:a},[e("span",{staticClass:"label",style:t.labelStyle(s)},[t._v(t._s(s.labelName))])])})),0):t._e(),e("p",{staticClass:"title-text"},[t._v(t._s(t.title))])]),e("div",[t.isCardType?e(t.renderContent,{tag:"component",attrs:{avatar:t.author.avatar,nickname:t.author.nickname,day:t.day}}):e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.renderContent)}})],1),t.brief||!t.videos||t.videos.length||t.isCardType?t._e():e("div",{staticClass:"pictures"},[e("post-image",{attrs:{images:t.pictures,type:t.type,isMobile:t.isMobile,"primary-pictures":t.primaryPictures}})],1),t.videos&&t.videos.length?e("div",{staticClass:"video"},[e("iframe",{ref:"video",attrs:{src:t.videos[0],width:t.videoWidth,height:t.videoHeight,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"allowfullscreen"}})]):t._e()],1)},i=[],n=function(){var t=this,e=t._self._c;return t.imageCount?e("div",{staticClass:"post-image"},[e("div",{class:t.imageClass},[t._l(t.showImages,(function(s,a){return e("el-image",{key:s+a,staticClass:"image",style:t.imageStyle,attrs:{lazy:"",fit:"cover",src:s},on:{click:function(e){return t.handlePreview(a)}}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e("img",{attrs:{width:"100",height:"100",alt:"loading",src:"https://cdn.2550505.com/share/legacy-sso/loading.jpg"}})]),e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("img",{attrs:{width:"100",height:"100",alt:"failed",src:"https://cdn.2550505.com/share/legacy-sso/fail.jpg"}})])])})),t.showViewer?e("el-image-viewer",{attrs:{"initial-index":t.initialIndex,maskClosable:!1,"on-close":t.onClose,"url-list":t.primaryPictures}}):t._e()],2)]):t._e()},o=[],l=s("08a9"),r={name:"post-image",props:["images","primaryPictures","type","isMobile"],components:{ElImageViewer:l["a"]},data(){return{showViewer:!1,initialIndex:0}},computed:{imageClass(){return 3===this.imageCount?"image-count-3":4===this.imageCount?"image-count-4":"image-list"},showImages(){return this.images.slice(0,9)},imageCount(){var t;return null===(t=this.images)||void 0===t?void 0:t.length},imageStyle(){return this.isMobile?[1,2,3].includes(this.type)?"width: 100%":"width: 100px; height: 100px":[1,2,3].includes(this.type)?"max-width: 300px;max-height: 300px":"width: 100px; height: 100px"}},methods:{changeIndex(t){this.initialIndex=t},handlePreview(t){this.initialIndex=t,this.showViewer=!0},onClose(){this.showViewer=!1,this.initialIndex=0}}},c=r,h=(s("eff9"),s("2877")),d=Object(h["a"])(c,n,o,!1,null,"18654413",null),u=d.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"birthday-sign"},[e("div",{staticClass:"birthday-picture"},[e("img",{staticClass:"birthday-img",attrs:{src:"https://cdn.2550505.com/share/legacy-sso/birthday-picture.png"}}),e("div",{staticClass:"birthday-avatar"},[e("img",{staticClass:"birthday-avatar-img",attrs:{src:t.avatar,width:"100%",height:"100%",alt:t.nickname}})])])])},m=[],g={props:["avatar","nickname"]},f=g,v=(s("84a7"),Object(h["a"])(f,p,m,!1,null,"18ac8936",null)),k=v.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-content"},[e("span",{staticClass:"sign-days-card",attrs:{"data-bg-class":t.index}},[e("span",{staticClass:"sign-card-wrapper"},[e("img",{staticClass:"sign-card-bg",attrs:{src:t.bg}}),e("span",{staticClass:"sign-avatar"},[e("img",{staticClass:"sign-avatar-img",attrs:{src:t.avatar,alt:t.nickname}})]),e("span",{staticClass:"sign-nickname"},[t._v(t._s(t.nickname))]),e("span",{staticClass:"sign-days"},[t._v(t._s(t.day))])])])])},b=[],y=s("ed08"),C=s.n(y),_={props:["avatar","nickname","day"],computed:{maxSignDays(){return C.a.getDaysBetweenDates("2021-12-31",Date.now())+1},bg(){return this.day<500?"https://cdn.2550505.com/share/assets/mgclub/editor/sign-1.png":this.day>=500&&this.day<this.maxSignDays?"https://cdn.2550505.com/share/assets/mgclub/editor/sign-2.png":this.day===this.maxSignDays?"https://cdn.2550505.com/share/assets/mgclub/editor/sign-3.png":0},index(){return this.day<500?1:this.day>=500&&this.day<this.maxSignDays?2:this.day===this.maxSignDays?3:0}}},x=_,I=(s("2860"),Object(h["a"])(x,w,b,!1,null,"e622cfe2",null)),S=I.exports,L={name:"post-content",data(){return{TYPE:{BIRTHDAY:3,SIGN:4}}},props:["labels","title","type","content","day","author","pictures","id","primaryPictures","isMobile","brief","videos","vote"],methods:{labelStyle(t){return`background: ${t.color};`}},computed:{isTop(){const t=this.labels.find(t=>1===t.labelId);return!!t},target(){if(this.isMobile)return"_blank";{const t=Number(window.localStorage.getItem("openType"));if(0===t)return"_self";if(1===t)return"_blank"}return"_self"},videoWidth(){return this.isMobile?"100%":"70%"},videoHeight(){return this.isMobile?"200":"400"},isLevelUpPost(){const t=this.labels.find(t=>7===t.id);return!!t},renderContent(){return this.type===this.TYPE.BIRTHDAY?k:this.type===this.TYPE.SIGN?S:this.content},cardType(){return Object.values(this.TYPE)},isCardType(){return this.cardType.includes(this.type)}},components:{PostImage:u,Birthday:k,Sign:S}},$=L,M=(s("ce3b"),Object(h["a"])($,a,i,!1,null,"5db35d0f",null));e["a"]=M.exports},"7d8f":function(t,e,s){},8091:function(t,e,s){"use strict";s("aeca")},"84a7":function(t,e,s){"use strict";s("7d8f")},"9fbf":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"brief-author"},["post-details"===t.type?e("detail-avatar",{attrs:{avatar:t.avatar,level:t.level,uid:t.uid,nickname:t.nickname,focusHe:t.focusHe,exp:t.exp,auth:t.auth,iconSize:t.iconSize,authentication:t.authentication},on:{getUserInfo:t.getUserInfo,followUser:t.followUser}},[e("template",{slot:"avatar-slot"},[e("link-avatar",{attrs:{avatar:t.avatar,size:t.size,auth:t.auth,uid:t.uid,iconSize:t.iconSize,authentication:t.authentication,nickname:t.nickname}})],1)],2):e("link-avatar",{attrs:{avatar:t.avatarUrl,size:t.size,auth:t.auth,uid:t.uid,iconSize:t.iconSize,authentication:t.authentication,nickname:t.nickname}}),e("level-nickname",{staticClass:"level-nickname-wrapper",attrs:{colors:t.colors,uid:t.uid,nickname:t.nickname}}),t._t("default")],2)},i=[],n=s("c362"),o=s("e51f"),l=s("919f"),r={name:"brief-author",props:["type","nickname","colors","iconSize","uid","avatar","size","auth","authentication","level","exp","focusHe"],components:{LinkAvatar:n["a"],LevelNickname:o["a"],DetailAvatar:l["a"]},computed:{avatarUrl(){return this.avatar||"https://cdn.2550505.com/share/legacy-sso/thumbnail.default.png"}},methods:{getUserInfo(){this.$emit("getUserInfo",this.uid)},followUser(t,e){this.$emit("followUser",t,e)}}},c=r,h=(s("4a38"),s("2877")),d=Object(h["a"])(c,a,i,!1,null,"5ff0f064",null);e["a"]=d.exports},a15e2:function(t,e,s){"use strict";s("d13e")},aeca:function(t,e,s){},b139:function(t,e,s){"use strict";s("59a4")},bb25:function(t,e,s){"use strict";s("2965")},cb33:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("main-header"),e("div",{staticClass:"layout-body"},[e("div",{ref:"wrapper",staticClass:"wrapper"},[e("div",{staticClass:"user-banner"},[e("div",{staticClass:"user"},[e("div",{staticClass:"avatar"},[e("el-image",{staticClass:"avatar-img",attrs:{width:"100",height:"100",lazy:"","preview-src-list":t.avatarList,src:t.avatar,alt:"avatar"}})],1),e("p",{staticClass:"nickname"},[t._v(t._s(t.targetInfo.nickname))])]),t.operations.length?e("div",{staticClass:"action"},[t.isAdmin?e("el-popover",{ref:"post-action-popover",attrs:{"popper-class":"post-action-popover",placement:"bottom",trigger:"click"}},[e("ul",{staticClass:"operations"},t._l(t.operations,(function(s){return e("li",{key:s.text,class:["operation",s.textStyle],on:{click:s.callback}},[e("i",{class:["hanser",s.icon]}),t._v(" "+t._s(s.text)+" ")])})),0),e("div",{staticClass:"more",attrs:{slot:"reference"},slot:"reference"},[e("i",{staticClass:"hanser icon-gengduo"})])]):t._e()],1):t._e()]),e("div",{staticClass:"side-info"},[t.targetInfo.status?e("div",{staticClass:"ban"},[e("i",{staticClass:"iconfont jinggao"}),t._v(" 该账号已被封禁")]):t._e(),t.targetInfo.auth?e("div",{staticClass:"auth"},[e("img",{staticClass:"auth-icon",attrs:{src:t.authIcon,width:"18",height:"18",alt:t.authText,title:t.authText}}),t._v(" "+t._s(t.authText)+": "+t._s(t.targetInfo.authentication)+" ")]):t._e(),e("div",{staticClass:"info"},[e("div",{staticClass:"data-count"},t._l(t.data,(function(s){return e("router-link",{key:s.text,staticClass:"data-item",attrs:{to:t.$route.path+s.hash}},[e("div",{staticClass:"data-text"},[t._v(t._s(s.text))]),e("div",{staticClass:"data-value"},[t._v(t._s(t.counts[s.key]))])])})),1),e("div",{staticClass:"account-info"},[e("level-label",{staticClass:"level-label",attrs:{level:t.level}}),e("div",{staticClass:"account-item account-uid"},[t._v("UID: "+t._s(t.targetInfo.uid||""))]),e("div",{staticClass:"account-item account-sign"},[t._v(" 签名: "+t._s(t.targetInfo.sign||"这个人很懒,还没有签名~")+" ")]),e("div",{staticClass:"account-item account-sex"},[t._v("性别: "+t._s(t.sex))]),e("div",{staticClass:"account-item account-birthday"},[t._v("生日: "+t._s(t.birthday))]),t.targetInfo.location?e("div",{staticClass:"account-item account-ip"},[t._v(" IP归属地: "+t._s(t.targetInfo.location)+" ")]):t._e()],1),!t.isSelf&&t.followShow?e("div",{staticClass:"subscribe"},[e("h-button",{attrs:{plain:t.followBtnPlain},on:{click:t.followAuthor},nativeOn:{mousemove:function(e){return t.hoverOnFollow.apply(null,arguments)},mouseleave:function(e){return t.outHoverOnFollow.apply(null,arguments)}}},[t._v(t._s(t.hoverOnFollowText))]),e("h-button",{on:{click:function(e){return t.openChat(t.targetInfo.uid)}}},[t._v("私聊")])],1):t._e()]),e("div",{staticClass:"bind-info"},[e("h3",[t._v("关联信息")]),t.targetInfo.bind&&t.targetInfo.bind.bilibili.length?t._l(t.targetInfo.bind.bilibili,(function(s){return e("div",{key:"bilibili"+s.uid,staticClass:"bind-bilibili"},[e("div",{staticClass:"platform"},[e("img",{attrs:{src:"https://cdn.2550505.com/share/legacy-sso/favicon.ico",width:"20",height:"20",alt:"bilibili"}}),e("span",{staticClass:"split"},[t._v("|")]),e("a",{staticClass:"bilibili-account",attrs:{href:"https://space.bilibili.com/"+s.uid,target:"_blank"}},[s.level?e("div",{staticClass:"bn",style:t.bnStyle(s.level)},[e("div",{staticClass:"bn-name"},[t._v("憨毛怪")]),e("div",{staticClass:"bn-level"},[t._v(t._s(s.level))])]):t._e(),e("span",{staticClass:"site-nickname"},[t._v(t._s(s.nickname))])])]),s.point&&t.isSelf?e("div",{staticClass:"point"},[t._v("积分: "+t._s(s.point))]):t._e()])})):t._e(),t.targetInfo.bind&&t.targetInfo.bind.douyu.length?t._l(t.targetInfo.bind.douyu,(function(s){return e("div",{key:"douyu"+s.uid,staticClass:"bind-douyu"},[e("div",{staticClass:"platform"},[e("img",{attrs:{src:"https://cdn.2550505.com/share/legacy-sso/201808131555573522222945055.jpeg",width:"20",height:"20",alt:"douyu"}}),e("span",{staticClass:"split"},[t._v("|")]),t._v(" "),e("span",{staticClass:"site-nickname"},[t._v(t._s(s.nickname))])]),s.point&&t.isSelf?e("div",{staticClass:"point"},[t._v("积分: "+t._s(s.point))]):t._e()])})):t._e(),-1===t.targetInfo.role?e("div",{staticClass:"account-delete"},[t._v("用户已注销")]):t.noBind?e("div",{staticClass:"no-bind"},[t._v("暂无绑定")]):t._e()],2)]),e("div",{staticClass:"content-wrapper"},[e("nav",{ref:"nav-bar",staticClass:"nav-bar nav-bar-to-fix-top"},t._l(t.data,(function(s){return e("router-link",{key:s.text,staticClass:"nav-data-item",class:{"nav-active":t.hash===s.hash},attrs:{to:t.$route.path+s.hash,replace:""}},[e("div",{staticClass:"nav-data-text"},[t._v(t._s(s.text))])])})),1),e("div",{staticClass:"content"},[e(t.display,{tag:"component",attrs:{uid:t.uid,nickname:t.nickname}})],1)])])]),e("div",{staticClass:"fast-operation"},[e("div",{staticClass:"chat",on:{click:t.showChat}},[t.notice.chats?e("div",{staticClass:"badge"},[t._v(t._s(t.noticeNum(t.notice.chats)))]):t._e(),e("i",{staticClass:"iconfont pinglun"})])]),e("chats")],1)},i=[],n=(s("d9e2"),s("db04")),o=s("365c"),l=s("50fc"),r=s("2f62"),c=s("ed89"),h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"favorite"},[t._l(t.favoriteList,(function(s){return e("home-post",{key:s.id,staticClass:"post",attrs:{post:s,user:t.user,levels:t.levels},on:{like:t.like}})})),t.loading&&!t.loadDone?e("post-skeleton"):t._e(),e("load-more",{key:"favorite-post-list",attrs:{name:"favorite-post-list","have-more":!t.loadDone},on:{"load-more":t.loadMorePosts}})],2)},d=[],u=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-post"},[e("div",{staticClass:"post-header"},[e("div",{staticClass:"basic-info"},[e("brief-author",{attrs:{avatar:t.post.author.avatar,size:50,auth:t.post.author.auth,uid:t.post.author.uid,authentication:t.post.author.authentication,colors:t.levelLabel.color,nickname:t.post.author.nickname}},[e("div",{staticClass:"time"},[t._v(t._s(t.formattedTime))])])],1),e("div",{staticClass:"operation"})]),e("div",{staticClass:"content"},[e("post-content",{attrs:{title:t.post.title,content:t.post.content,labels:t.post.labels,pictures:t.post.pictures,"primary-pictures":t.post.primaryPictures,id:t.post.id}})],1),e("div",{staticClass:"bottom"},[e("ul",{staticClass:"tags",class:{"no-tags":!t.post.tags.length}},t._l(t.post.tags,(function(s){return e("router-link",{key:s.id,staticClass:"tag",attrs:{target:"_blank",to:"/tag/"+s.id}},[t._v(" #"+t._s(s.name)+" ")])})),1),e("div",{staticClass:"datas"},[e("div",{staticClass:"readings"},[e("div",{staticClass:"icon"},[e("div",{domProps:{innerHTML:t._s(t.readingsIcon)}})]),e("div",{staticClass:"data"},[t._v(t._s(t.post.readings))])]),e("div",{staticClass:"replies"},[e("div",{staticClass:"icon"},[e("div",{domProps:{innerHTML:t._s(t.repliesIcon)}})]),e("div",{staticClass:"data"},[t._v(t._s(t.post.replies))])]),e("div",{staticClass:"likes",class:{liked:t.post.liked},on:{click:function(e){return t.like(t.post)}}},[t.showLike?e("div",{staticClass:"like-animation",style:t.themeLikeAnimationStyle},[e("div",{domProps:{innerHTML:t._s(t.likeGif)}})]):t._e(),e("div",{staticClass:"icon"},[e("div",{domProps:{innerHTML:t._s(t.likeIcon(t.post.liked))}})]),e("div",{staticClass:"data"},[t._v(t._s(t.post.likes))])])])])])}),p=[],m=s("7b81"),g=s("9fbf"),f=s("808e"),v=s("ed08"),k=s.n(v),w={name:"home-post",props:["post","levels","user"],data(){return{color:f["j"],showLike:!1}},components:{PostContent:m["a"],BriefAuthor:g["a"]},computed:{...Object(r["d"])({theme:t=>t.config.theme}),formattedTime(){return k.a.dateFormat("YYYY-mm-dd HH:MM",new Date(this.post.post_time.replace(/-/g,"/")))},level(){const{exp:t}=this.user;let e=this.levels[0];return this.levels.forEach(s=>{s.exp<=t&&s.level>e.level&&(e=s)}),e},levelLabel(){const t=this.levels.find(t=>t.level===this.level.level);return t},likeGif(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-like.gif" width="87" height="110" alt="点赞" />';default:return'<img src="https://cdn.2550505.com/share/legacy-sso/like.gif" width="64" height="42" alt="点赞" />'}},themeLikeAnimationStyle(){switch(this.theme){case"new-year-2023":return"top: -98px; right: -12px";default:return""}},readingsIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-readings.png" width="25" height="15" alt="查看" />';case"new-year-2024":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-reading.png" width="28" height="28" alt="查看" />';default:return'<i class="hanser icon-chakan"></i>'}},repliesIcon(){switch(this.theme){case"new-year-2023":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-replies.png" width="20" height="20" alt="回复" />';case"new-year-2024":return'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-reply.png" width="20" height="17" alt="回复" />';default:return'<i class="hanser icon-huifu" />'}}},watch:{"post.liked"(t){t&&(this.showLike=!0,setTimeout(()=>{this.showLike=!1},1e3))}},methods:{like(t){this.$emit("like",t)},likeIcon(t){return"new-year-2023"===this.theme?t?'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-like-click.png" width="20" height="20" alt="已点赞" />':'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2023-like.png" width="20" height="20" alt="点赞" />':"new-year-2024"===this.theme?t?'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-like_active.png" width="20" height="20" alt="已点赞" />':'<img src="https://cdn.2550505.com/share/legacy-sso/new-year-2024-like_default.png" width="20" height="20" alt="点赞" />':'<i class="hanser icon-dianzan"></i>'}}},b=w,y=(s("e25f"),s("2877")),C=Object(y["a"])(b,u,p,!1,null,"5dc0a032",null),_=C.exports,x=s("4445"),I=s("3752"),S={name:"favorite",props:["uid","nickname"],data(){return{params:{page:1,pageSize:10},loadDone:!1,liking:!1,loading:!1,favoriteList:[]}},metaInfo(){return{title:this.nickname+"收藏 - 毛怪俱乐部",meta:[{name:"keywords",content:`收藏,${this.nickname},毛怪,hanser,社区,毛怪俱乐部`},{name:"description",content:this.nickname+"个人主页 - 收藏"}]}},components:{HomePost:_,LoadMore:x["a"],PostSkeleton:I["a"]},computed:{...Object(r["d"])({levels:t=>t.level.levels,user:t=>t.users.userInfo})},watch:{uid(){this.reset(),this.getData()}},methods:{...Object(r["c"])({addUserExp:"users/addUserExp"}),reset(){this.params.page=1,this.loadDone=!1,this.loading=!1,this.favoriteList=[]},getData(){this.loading=!0,n["a"].get(o["a"].favoriteList,{params:{...this.params,uid:this.uid}}).then(t=>{0===t.code?(t.list.length<this.params.pageSize&&(this.loadDone=!0),this.favoriteList.push(...t.list)):this.$message({type:"warning",message:t.msg}),this.loading=!1})},like(t){this.liking?this.$message({type:"warning",message:"操作太快了~"}):(this.liking=!0,n["a"].post(o["a"].like+"/"+t.id,{author:t.author}).then(e=>{if(0!==e.code)return this.$message({type:"warning",message:e.msg}),this.addUserExp(e.exp),void(this.liking=!1);t.liked=!!e.liked,t.liked?t.likes+=1:t.likes-=1,this.liking=!1}))},loadMorePosts(){this.loading||this.loadDone||(this.getData(),this.params.page++)}}},L=S,$=(s("2c89"),Object(y["a"])(L,h,d,!1,null,"51d7d62f",null)),M=$.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"follow"},[t._l(t.followList,(function(s){return e("user-card",{key:s.uid,staticClass:"user-card",attrs:{uid:s.uid,nickname:s.nickname,avatar:s.avatar,sign:s.sign,isMobile:t.isMobile,fans:s.fans,follow:s.follow,posts:s.posts,focusHe:s.focusHe,focusMe:s.focusMe},on:{follow:t.toggleFollow}})})),t.loading&&!t.loadDone?e("user-card-skeleton"):t._e(),e("load-more",{key:"follow-list",attrs:{name:"follow-list","have-more":!t.loadDone},on:{"load-more":t.loadMoreFollows}})],2)},O=[],H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-card-skeleton"},[e("el-skeleton",{attrs:{animated:"",count:10}},[e("template",{slot:"template"},[e("div",{staticClass:"sk-top"},[e("el-skeleton-item",{staticStyle:{width:"70px",height:"70px"},attrs:{variant:"image"}}),e("div",{staticClass:"sk-info"},[e("div",{staticClass:"sk-nickname"},[e("el-skeleton-item",{staticStyle:{width:"64px",height:"20px"},attrs:{variant:"text"}})],1),e("div",{staticClass:"sk-sign"},[e("el-skeleton-item",{staticStyle:{width:"100%",height:"20px"},attrs:{variant:"text"}})],1),e("div",{staticClass:"sk-data"},[e("el-skeleton-item",{staticStyle:{width:"50px",height:"20px"},attrs:{variant:"text"}}),e("el-skeleton-item",{staticStyle:{width:"50px",height:"20px"},attrs:{variant:"text"}}),e("el-skeleton-item",{staticStyle:{width:"50px",height:"20px"},attrs:{variant:"text"}})],1)])],1),e("el-skeleton-item",{staticStyle:{width:"70px",height:"30px",margin:"10px 0"},attrs:{variant:"button"}}),e("div",{staticClass:"sk-divider"})],1)],2)],1)},P=[],T={name:"user-card-skeleton"},F=T,z=(s("bb25"),Object(y["a"])(F,H,P,!1,null,"27dd1732",null)),A=z.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-card"},[e("div",{staticClass:"user-card-wrapper"},[e("div",{staticClass:"main-info"},[e("div",{staticClass:"main-indo--avatar"},[e("avatar",{attrs:{url:t.avatar,size:70,uid:t.uid,alt:t.nickname}})],1),e("div",{staticClass:"main-info--data"},[e("div",{staticClass:"nickname"},[e("level-nickname",{attrs:{nickname:t.nickname,uid:t.uid,colors:t.color}})],1),e("div",{staticClass:"sign"},[t._v("签名: "+t._s(t.sign||"无"))]),e("div",{staticClass:"datas"},[e("router-link",{staticClass:"follow",attrs:{to:t.userFollowLink}},[t._v("关注: "+t._s(t.follow))]),e("router-link",{staticClass:"fans",attrs:{to:t.userFansLink}},[t._v("粉丝: "+t._s(t.fans))]),e("router-link",{staticClass:"posts",attrs:{to:t.userPostsLink}},[t._v("动态: "+t._s(t.posts))])],1)])]),e("h-button",{staticClass:"focus-btn",attrs:{size:t.size,round:"",plain:t.buttonPlain},on:{click:t.toggleFollow},nativeOn:{mousemove:function(e){return t.onHover.apply(null,arguments)},mouseleave:function(e){return t.outHover.apply(null,arguments)}}},[t._v(t._s(t.relationTextOnShown))])],1),e("h-button",{staticClass:"focus-btn-mobile",attrs:{size:t.size,round:"",plain:t.buttonPlain},on:{click:t.toggleFollow},nativeOn:{mousemove:function(e){return t.onHover.apply(null,arguments)},mouseleave:function(e){return t.outHover.apply(null,arguments)}}},[t._v(t._s(t.relationTextOnShown))])],1)},U=[],E=s("7150"),B=s("e51f"),Y=s("dbbe"),N={name:"user-card",data(){return{hover:!1,color:f["j"]}},props:["uid","nickname","avatar","sign","follow","fans","posts","focusHe","focusMe","isMobile"],components:{Avatar:E["a"],LevelNickname:B["a"],HButton:Y["a"]},computed:{size(){return this.isMobile?"mini":"small"},userFollowLink(){return`/space/${this.uid}#follow`},userFansLink(){return`/space/${this.uid}#fans`},userPostsLink(){return`/space/${this.uid}#posts`},relation(){return(this.focusHe?2:0)+(this.focusMe?1:0)},relationText(){switch(this.relation){case 0:case 1:return"关注";case 2:return"已关注";case 3:return"互相关注"}return"关注"},relationTextOnShown(){if(this.hover){switch(this.relation){case 0:return"关注";case 1:return"关注";case 2:return"取消关注";case 3:return"取消关注"}return"关注"}return this.relationText},buttonPlain(){switch(this.relation){case 0:case 1:return!1;case 2:return!0;case 3:return!0}return!1}},methods:{toggleFollow(){this.$emit("follow",this.uid)},onHover(){this.hover=!0},outHover(){this.hover=!1}}},R=N,V=(s("a15e2"),Object(y["a"])(R,j,U,!1,null,"22cf1c6c",null)),G=V.exports,J={name:"follow",data(){return{params:{page:1,pageSize:10},loading:!1,loadDone:!1,followList:[]}},metaInfo(){return{title:this.nickname+"关注 - 毛怪俱乐部",meta:[{name:"keywords",content:`关注,${this.nickname},毛怪,hanser,社区,毛怪俱乐部`},{name:"description",content:this.nickname+"个人主页 - 关注"}]}},props:["uid","nickname"],components:{UserCard:G,LoadMore:x["a"],UserCardSkeleton:A},computed:{...Object(r["d"])({isMobile:t=>t.media.isMobile})},watch:{uid(){this.reset(),this.getData()}},methods:{reset(){this.params.page=1,this.loadDone=!1,this.loading=!1,this.followList=[]},getData(){this.loading=!0,n["a"].get(o["a"].followList,{params:{...this.params,uid:this.uid}}).then(t=>{0===t.code?(t.list.length<this.params.pageSize&&(this.loadDone=!0),this.followList.push(...t.list)):this.$message({type:"warning",message:t.msg}),this.loading=!1})},loadMoreFollows(){this.loading||this.loadDone||(this.getData(),this.params.page++)},toggleFollow(t){const e=this.followList.find(e=>e.uid===t);e&&n["a"].post(o["a"].follow+`/${t}?following=${e.focusHe}`).then(t=>{0===t.code?(e.focusHe=!!t.relation,this.$message({type:"success",message:t.msg})):this.$message({type:"warning",message:t.msg})})}}},W=J,q=(s("3847"),Object(y["a"])(W,D,O,!1,null,"0f5f06ec",null)),K=q.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fans"},[t._l(t.fansList,(function(s){return e("user-card",{key:s.uid,staticClass:"user-card",attrs:{uid:s.uid,nickname:s.nickname,avatar:s.avatar,sign:s.sign,isMobile:t.isMobile,fans:s.fans,follow:s.follow,posts:s.posts,focusHe:s.focusHe,focusMe:s.focusMe},on:{follow:t.toggleFollow}})})),t.loading&&!t.loadDone?e("user-card-skeleton"):t._e(),e("load-more",{key:"fans-list",attrs:{name:"fans-list","have-more":!t.loadDone},on:{"load-more":t.loadMoreFans}})],2)},X=[],Z={name:"fans",data(){return{params:{page:1,pageSize:10},loading:!1,loadDone:!1,fansList:[]}},metaInfo(){return{title:this.nickname+"粉丝 - 毛怪俱乐部",meta:[{name:"keywords",content:`粉丝,${this.nickname},毛怪,hanser,社区,毛怪俱乐部`},{name:"description",content:this.nickname+"个人主页 - 粉丝"}]}},props:["uid","nickname"],components:{UserCard:G,LoadMore:x["a"],UserCardSkeleton:A},computed:{...Object(r["d"])({isMobile:t=>t.media.isMobile})},watch:{uid(){this.reset(),this.getData()}},methods:{reset(){this.params.page=1,this.loadDone=!1,this.loading=!1,this.fansList=[]},getData(){this.loading=!0,n["a"].get(o["a"].fansList,{params:{...this.params,uid:this.uid}}).then(t=>{0===t.code?(t.list.length<this.params.pageSize&&(this.loadDone=!0),this.fansList.push(...t.list)):this.$message({type:"warning",message:t.msg}),this.loading=!1})},loadMoreFans(){this.loading||this.loadDone||(this.getData(),this.params.page++)},toggleFollow(t){const e=this.fansList.find(e=>e.uid===t);e&&n["a"].post(o["a"].follow+`/${t}?following=${e.focusHe}`).then(t=>{0===t.code?(e.focusHe=!!t.relation,this.$message({type:"success",message:t.msg})):this.$message({type:"warning",message:t.msg})})}}},tt=Z,et=(s("8091"),Object(y["a"])(tt,Q,X,!1,null,"efa8a012",null)),st=et.exports,at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"posts"},[t._l(t.postList,(function(s){return e("home-post",{key:s.id,staticClass:"post",attrs:{post:s,user:t.user,levels:t.levels},on:{like:t.like}})})),t.loading&&!t.loadDone?e("post-skeleton"):t._e(),e("load-more",{key:"space-post-list",attrs:{name:"space-post-list","have-more":!t.loadDone},on:{"load-more":t.loadMorePosts}})],2)},it=[],nt={name:"posts",props:["uid","nickname"],data(){return{params:{page:1,pageSize:10},loadDone:!1,liking:!1,loading:!1,postList:[]}},metaInfo(){return{title:this.nickname+"动态 - 毛怪俱乐部",meta:[{name:"keywords",content:`动态,${this.nickname},毛怪,hanser,社区,毛怪俱乐部`},{name:"description",content:this.nickname+"个人主页 - 动态"}]}},components:{HomePost:_,LoadMore:x["a"],PostSkeleton:I["a"]},computed:{...Object(r["d"])({levels:t=>t.level.levels,user:t=>t.users.userInfo})},watch:{uid(){this.reset(),this.getData()}},methods:{...Object(r["c"])({addUserExp:"users/addUserExp"}),reset(){this.params.page=1,this.loadDone=!1,this.loading=!1,this.postList=[]},getData(){this.loading=!0,n["a"].get(o["a"].postList,{params:{...this.params,uid:this.uid}}).then(t=>{0===t.code?(t.list.length<this.params.pageSize&&(this.loadDone=!0),this.postList.push(...t.list)):this.$message({type:"warning",message:t.msg}),this.loading=!1})},like(t){this.liking?this.$message({type:"warning",message:"操作太快了~"}):(this.liking=!0,n["a"].post(o["a"].like+"/"+t.id,{author:t.author.uid,liked:t.liked}).then(e=>{if(0!==e.code)return this.$message({type:"warning",message:e.msg}),this.addUserExp(e.exp),void(this.liking=!1);t.liked=!!e.liked,t.liked?t.likes+=1:t.likes-=1,this.liking=!1}))},loadMorePosts(){this.loading||this.loadDone||(this.getData(),this.params.page++)}}},ot=nt,lt=(s("b139"),Object(y["a"])(ot,at,it,!1,null,"7f55070c",null)),rt=lt.exports,ct=s("99ca"),ht=s("7846");const dt={PERSONAL:1,TEAM:2,OFFICIAL:4};var ut={name:"space",data(){return{counts:{follow:0,fans:0,favorite:0,post:0},sexMap:{1:"男",2:"女",3:"保密"},data:[{text:"动态",key:"post",hash:"#posts"},{text:"关注",key:"follow",hash:"#follow"},{text:"粉丝",key:"fans",hash:"#fans"},{text:"收藏",key:"favorite",hash:"#favorite"}],menu:[{text:"动态",hash:"#posts",component:rt},{text:"关注",hash:"#follow",component:K},{text:"粉丝",hash:"#fans",component:st},{text:"收藏",hash:"#favorite",component:M}],hash:"#index",targetInfo:{},defaultAvatar:"https://cdn.2550505.com/share/legacy-sso/thumbnail.default.png",hover:{follow:!1},isFollowing:!1,followShow:!1,personalImage:s("3665"),teamImage:s("9ec6"),officialImage:s("b69d")}},components:{MainHeader:c["a"],HButton:Y["a"],Chats:ht["a"],LevelLabel:ct["a"]},computed:{...Object(r["d"])({user:t=>t.users.userInfo,levels:t=>t.level.levels,isMobile:t=>t.media.isMobile,notice:t=>t.notice.notice}),...Object(r["b"])("users",{isAdmin:"isAdmin",isHanser:"isHanser"}),display(){return this.selectedItem.component},selectedItem(){return this.menu.find(t=>t.hash===this.hash)||this.menu[0]},isSelf(){return this.user.uid===Number(this.uid)},contentTitle(){return(this.isSelf?"我的":this.targetInfo.nickname+" ")+this.selectedItem.text},uid(){return Number(this.$route.params.uid)||0},avatar(){return this.targetInfo.avatar||this.defaultAvatar},nickname(){return this.targetInfo.nickname||""},avatarList(){return[this.targetInfo.avatar]},level(){const{exp:t}=this.targetInfo;let e=this.levels[0];return this.levels.forEach(s=>{s.exp<=t&&s.level>e.level&&(e=s)}),e},sex(){return this.sexMap[this.targetInfo.sex]||"保密"},birthday(){return this.targetInfo.birthday?k.a.dateFormat("YYYY-mm-dd",new Date(this.targetInfo.birthday)):"保密"},isTargetAdmin(){return this.targetInfo.role>=256},operations(){let t=[];return t=1==this.targetInfo.status?[{text:"已被封禁",icon:"icon-fengjin",textStyle:"icon-disabled",callback:this.recover},{text:"封号",icon:"icon-fengjin",textStyle:null,callback:this.clearAccount}]:[{text:"封禁",icon:"icon-fengjin",textStyle:null,callback:this.banUser},{text:"封号",icon:"icon-fengjin",textStyle:null,callback:this.clearAccount}],this.isHanser?this.isTargetAdmin?[...t,{text:"取消管理员",icon:"icon-gerenzhongxin",textStyle:null,callback:this.cancelAdmin}]:[...t,{text:"设为管理员",icon:"icon-gerenzhongxin",textStyle:null,callback:this.setAdmin}]:this.isAdmin?t:[]},hoverOnFollowText(){return this.isFollowing?this.hover.follow?"取消关注":"已关注":"关注"},followBtnPlain(){return this.isFollowing},noBind(){return this.targetInfo.bind&&!this.targetInfo.bind.bilibili.length&&!this.targetInfo.bind.douyu.length},authText(){switch(this.targetInfo.auth){case dt.PERSONAL:return"个人认证";case dt.TEAM:return"团队认证";case dt.OFFICIAL:return"官方账号"}return""},authIcon(){switch(this.targetInfo.auth){case dt.PERSONAL:return this.personalImage;case dt.TEAM:return this.teamImage;case dt.OFFICIAL:return this.officialImage}return""}},watch:{"$route.hash"(t){this.menu.find(e=>e.hash===t)?this.hash=t:this.hash=this.menu[0].hash},uid(){this.getInfo()}},methods:{showBind(){this.$message({type:"message",message:"敬请期待~"})},banUser(){this.$refs["post-action-popover"].showPopper=!1,this.$showBanDialog(this.targetInfo,0,this.isMobile,()=>{this.targetInfo.status=1})},hoverOnFollow(){this.hover.follow=!0},outHoverOnFollow(){this.hover.follow=!1},noticeNum(t){return t<99?t:"99+"},openChat(t){const e=new CustomEvent("open-chat",{detail:{uid:t}});window.dispatchEvent(e)},bnStyle(t){return t<5?"background: #6a948e; border: 1px solid #6a948e":t<9?"background: #647a9a; border: 1px solid #647a9a":t<13?"background: #8a7ea3; border: 1px solid #8a7ea3":t<17?"background: #b36b85; border: 1px solid #b36b85":t<21?"background: #c29d40; border: 1px solid #c29d40":t<25?"background: #50847b; border: 1px solid #50847b":t<29?"background: #3d53a0; border: 1px solid #3d53a0":t<32?"background: #52418e; border: 1px solid #52418e":t<36?"background: #9e4665; border: 1px solid #9e4665":t<40?"background: #f0944f; border: 1px solid #f0944f":void 0},clearAccount(){this.$refs["post-action-popover"].showPopper=!1,this.$confirm("封号会强制退出此账号，且不可再登录，是否确认操作？","封号",{confirmButtonText:"确定",cancelButtonText:"取消",customClass:"mobile-confirm",type:"danger"}).then(()=>{n["a"].post(l["a"].clearAccount,{uid:this.uid}).then(t=>{this.$message({type:"success",message:t.msg})})}).catch(()=>{this.$message({type:"message",message:"取消封号"})})},async getFollows(){this.checkLogin()&&n["a"].get(o["a"].followingStatus+this.uid).then(t=>{0===t.code?(this.isFollowing=t.following,this.followShow=!0):this.$message({type:"warning",message:t.msg})})},async followAuthor(){if(!this.checkLogin())return;const t=this.targetInfo.uid;await n["a"].post(`${o["a"].follow}/${t}`,{uid:t,isFollowing:this.isFollowing}).then(t=>{0==t.code&&(1==t.relation||null==t.relation?(this.isFollowing=!0,this.$message({type:"success",message:t.msg})):(this.isFollowing=!1,this.$message({type:"success",message:t.msg})))})},checkLogin(){return!!this.user.uid||(this.$message({type:"warning",message:"请登录后重试"}),!1)},async setAdmin(){try{let t=await n["a"].post(l["a"].setAdmin,{uid:this.targetInfo.uid});if(0!=t.code)throw new Error(t.msg);this.$message({type:"success",message:t.msg}),this.targetInfo.role=100}catch(t){console.log(t)}},async cancelAdmin(){try{let t=await n["a"].post(l["a"].cancelAdmin,{uid:this.targetInfo.uid});if(0!=t.code)throw new Error(t.msg);this.$message({type:"success",message:t.msg}),this.targetInfo.role=0}catch(t){console.log(t)}},recover(){this.$message({type:"warning",message:"已被封禁，不可操作"})},async getInfo(){const[t,e]=await Promise.all([n["a"].get(o["a"].getUserInfo,{params:{uid:this.uid}}),n["a"].get(o["a"].dataCount,{params:{uid:this.uid}})]);0===t.code?this.targetInfo=t.info:(this.$message({type:"warning",message:t.msg}),this.$router.replace("/")),this.counts=e.data},showChat(){this.openChat(0)}},async mounted(){const{hash:t}=this.$route,e=this.menu.find(e=>e.hash===t);this.hash=e?t:this.menu[0].hash,await this.getInfo(),await this.getFollows()}},pt=ut,mt=(s("3c45"),Object(y["a"])(pt,a,i,!1,null,"64ecdef4",null));e["default"]=mt.exports},cdbc:function(t,e,s){},ce3b:function(t,e,s){"use strict";s("5229")},d13e:function(t,e,s){},dc2b:function(t,e,s){"use strict";s("7ada")},e25f:function(t,e,s){"use strict";s("788a")},e9ec:function(t,e,s){"use strict";s("18dd")},eff9:function(t,e,s){"use strict";s("2b0f")}}]);