webpackJsonp([1],{"//9j":function(t,e){},"4Yl8":function(t,e){},Jmt5:function(t,e){},LMQ8:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(t){n("VPnV")},null,null).exports,r=n("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"need   /posts"}}},i,!1,function(t){n("Nkl4")},"data-v-2d028677",null).exports,u=n("Xxa5"),p=n.n(u),l=n("exGp"),d=n.n(l),v=n("mtWM"),m=n.n(v),f=function(){return m.a.create({baseURL:"https://blogger-task-server.herokuapp.com/"})},h=function(){return f().get("api/posts")},_=function(t){return f().post("api/posts",t)},g=function(t){return f().get("api/posts/"+t.id)},w=function(t){return f().put("api/posts/"+t.id,t)},P=function(t){return f().delete("api/posts/"+t)},x={name:"PostsPage",data:function(){return{posts:[]}},methods:{getPosts:function(){var t=this;return d()(p.a.mark(function e(){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:n=e.sent,t.posts=n.data.posts,console.log(t.posts);case 5:case"end":return e.stop()}},e,t)}))()},removePost:function(t){var e=this;return d()(p.a.mark(function n(){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(t);case 2:e.getPosts();case 3:case"end":return n.stop()}},n,e)}))()}},mounted:function(){this.getPosts()}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("h1",[t._v("Posts")]),t._v(" "),t.posts.length>0?n("div",{staticClass:"table-wrap"},[n("div",[n("router-link",{staticClass:"newpost",attrs:{to:{name:"NewPost"}}},[t._v("Add a new post")]),t._v(" "),n("br"),n("br")],1),t._v(" "),n("table",[t._m(0),t._v(" "),t._l(t.posts,function(e){return n("tr",[n("td",[t._v(t._s(e.title))]),t._v(" "),n("td",[t._v(t._s(e.categories))]),t._v(" "),n("td",[t._v(t._s(e.content))]),t._v(" "),n("td",{attrs:{align:"center"}},[n("router-link",{attrs:{to:{name:"EditPost",params:{id:e._id}}}},[n("font-awesome-icon",{attrs:{icon:"edit"}})],1),t._v("\n          |\n          "),n("a",{attrs:{href:"#"},on:{click:function(n){return t.removePost(e._id)}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)],1)])})],2)]):n("div",[t._v("\n    There are no posts.. Lets add one now "),n("br"),n("br"),t._v(" "),n("router-link",{staticClass:"add_post_link",attrs:{to:{name:"NewPost"}}},[t._v("Add a new post")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Title")]),this._v(" "),e("td",{attrs:{width:"550"}},[this._v("Categories")]),this._v(" "),e("td",{attrs:{width:"550"}},[this._v("Content")]),this._v(" "),e("td",{attrs:{width:"100",align:"center"}},[this._v("Action")])])}]};var b={name:"NewPostPage",data:function(){return{post:{title:"",categories:"",content:""}}},methods:{addPost:function(){var t=this;return d()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.post.title||""===t.post.categories||""===t.post.content){e.next=6;break}return e.next=3,_({title:t.post.title,categories:t.post.categories,content:t.post.content});case 3:t.$router.push({name:"Posts"}),e.next=7;break;case 6:alert("Empty fields!");case 7:case"end":return e.stop()}},e,t)}))()},goBack:function(){this.$router.push({name:"Posts"})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("h1",[t._v("Add Post")]),t._v(" "),n("div",{staticClass:"form"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],attrs:{type:"text",name:"title",placeholder:"Title"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.categories,expression:"post.categories"}],attrs:{rows:"2",cols:"15",placeholder:"Categories"},domProps:{value:t.post.categories},on:{input:function(e){e.target.composing||t.$set(t.post,"categories",e.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.content,expression:"post.content"}],attrs:{rows:"3",cols:"15",placeholder:"Content"},domProps:{value:t.post.content},on:{input:function(e){e.target.composing||t.$set(t.post,"content",e.target.value)}}})]),t._v(" "),n("div",[n("button",{staticClass:"app_post_btn",on:{click:t.addPost}},[t._v("Add")])])])])},staticRenderFns:[]};var N={name:"EditPost",data:function(){return{title:"",categories:"",content:""}},mounted:function(){this.getPost()},methods:{getPost:function(){var t=this;return d()(p.a.mark(function e(){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g({id:t.$route.params.id});case 2:n=e.sent,t.title=n.data.title,t.categories=n.data.categories,t.content=n.data.content;case 6:case"end":return e.stop()}},e,t)}))()},updatePost:function(){var t=this;return d()(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({id:t.$route.params.id,title:t.title,categories:t.categories,content:t.content});case 2:t.$router.push({name:"Posts"});case 3:case"end":return e.stop()}},e,t)}))()}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("h1",[t._v("Edit Post")]),t._v(" "),n("div",{staticClass:"form"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.categories,expression:"categories"}],attrs:{rows:"2",cols:"15",placeholder:"Categories"},domProps:{value:t.categories},on:{input:function(e){e.target.composing||(t.categories=e.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{rows:"3",cols:"15",placeholder:"Content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),n("div",[n("button",{staticClass:"app_post_btn",on:{click:t.updatePost}},[t._v("Update")])])])])},staticRenderFns:[]};var E=[{path:"/",name:"Hello",component:c},{path:"/posts",name:"Posts",component:n("VU/8")(x,k,!1,function(t){n("//9j")},null,null).exports},{path:"/posts/new",name:"NewPost",component:n("VU/8")(b,C,!1,function(t){n("4Yl8")},null,null).exports},{path:"/posts/:id",name:"EditPost",component:n("VU/8")(N,$,!1,function(t){n("LMQ8")},null,null).exports}];s.a.use(r.a);var V=new r.a({mode:"history",routes:E}),A=(n("Jmt5"),n("C/JF")),U=n("fhbW"),F=n("1e6/");A.c.add(U.a),A.c.add(U.c),A.c.add(U.b),s.a.component("font-awesome-icon",F.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:V,components:{App:a},template:"<App/>"})},Nkl4:function(t,e){},VPnV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.24af8295425eec978847.js.map