webpackJsonp([1],[,,,,function(t,e,n){"use strict";var s=n(2),a=n(61),o=n(48),r=n.n(o),i=n(52),c=n.n(i),u=n(53),d=n.n(u);s.a.use(a.a),e.a=new a.a({routes:[{path:"/login",name:"Login",component:c.a},{path:"/register",name:"Register",component:d.a},{path:"/dashboard",name:"Dashboard",component:r.a}]})},,,,,,function(t,e,n){"use strict";var s=n(13),a=n.n(s),o=n(4),r=n(2),i=n(63);r.a.use(i.a);var c=!window.location.host.includes("localhost"),u=c?"//magicandmythoscards.herokuapp.com/":"//localhost:3000/",d=a.a.create({baseURL:u+"api/",timeout:2e3,withCredentials:!0}),l=a.a.create({baseURL:u,timeout:2e3,withCredentials:!0}),m={user:{},decks:[{name:"deck one"}],inventory:[{name:"card one"}],dungeons:[{name:"dungeon one"}],activeDeck:{},error:{},registerMessage:"Please register an email, user name, and password",loginMessage:"Please enter your email and password to continue"},p=function(t){m.error=t};e.a=new i.a.Store({state:m,mutations:{setUser:function(t,e){t.user=e},setLoginMessage:function(t,e){t.loginMessage="Invalid email or password"},setInventory:function(t,e){t.inventory=e},setDecks:function(t,e){t.decks=e},setActiveDeck:function(t,e){t.activeDeck=e}},actions:{getInventory:function(t){var e=t.commit;t.dispatch;d("/userinventory").then(function(t){e("setInventory",t.data.data)}).catch(p)},getCardsByDeckId:function(t,e){var n=t.commit;t.dispatch;d("decks/"+e+"/cards").then(function(t){n("setCards",t.data.data)}).catch(p)},addCardToDeck:function(t,e){var n=(t.commit,t.dispatch);d.put("cards/"+e.card._id,e).then(function(t){n("getInventory")}).catch(p)},removeCard:function(t,e){var n=(t.commit,t.dispatch);d.put("cards/"+e.card._id,e).then(function(t){n("getCardsByDeckId",e.card.deckId)}).catch(p)},getActiveDeck:function(t,e){var n=t.commit;t.dispatch;d("decks/"+e).then(function(t){n("setActiveDeck",t.data.data)}).catch(p)},getDecks:function(t){var e=t.commit;t.dispatch;d("userdecks").then(function(t){e("setDecks",t.data.data)}).catch(p)},removeDeck:function(t,e){var n=(t.commit,t.dispatch);d.delete("decks/"+e._id).then(function(t){n("getDecks"),o.a.push("/dashboard")}).catch(p)},createDeck:function(t,e){var n=t.commit,s=t.dispatch;d.post("decks",e).then(function(t){s(getDecks).then(function(t){n("setDecks",t.data.data)})}).catch(p)},register:function(t,e){var n=t.commit;t.dispatch;l.post("register",e).then(function(t){if(t.data.error)return p(t.data.error);n("setUser",t.data.data),o.a.push("/dashboard")}).catch(p)},login:function(t,e){var n=t.commit;t.dispatch;l.post("login",e).then(function(t){t.data.data?(n("setUser",t.data.data),o.a.push("/dashboard")):n("setLoginMessage",t.data)}).catch(p)},authenticate:function(t){var e=t.commit;t.dispatch;l("authenticate").then(function(t){t.data.data?(e("setUser",t.data.data),o.a.push("/dashboard")):o.a.push("/login")}).catch(function(t){o.a.push("/login")})},logout:function(t,e){t.commit,t.dispatch;l.delete("logout",e).then(function(t){o.a.push("/login")}).catch(p)}}})},function(t,e){},function(t,e,n){function s(t){n(39)}var a=n(1)(n(31),n(54),s,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",mounted:function(){this.$store.dispatch("authenticate")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(49),a=n.n(s),o=n(51),r=n.n(o),i=n(50),c=n.n(i);e.default={name:"dashboard",data:function(){return{showDecks:!0,showDungeons:!1,showInventory:!1}},computed:{decks:function(){return this.$store.state.decks},inventory:function(){return this.$store.state.inventory},dungeons:function(){return this.$store.state.dungeons},user:function(){return this.$store.state.user}},methods:{toggleDecks:function(){this.showDecks=!0,this.showInventory=!1,this.showDungeons=!1},toggleInventory:function(){this.showDecks=!1,this.showInventory=!0,this.showDungeons=!1},toggleDungeons:function(){this.showDecks=!1,this.showInventory=!1,this.showDungeons=!0}},components:{Deck:a.a,Inventory:r.a,Dungeon:c.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"deck",props:["deck"],data:function(){return{}},computed:{},methods:{},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"dungeon",props:["dungeon"],data:function(){return{}},computed:{},methods:{},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inventory",props:["card"],data:function(){return{}},computed:{},methods:{},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"login",data:function(){return{name:"",email:"",password:""}},computed:{message:function(){return this.$store.state.loginMessage}},methods:{login:function(){this.$store.dispatch("login",{name:this.name,email:this.email,password:this.password})}},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"register",data:function(){return{userName:"",email:"",password:""}},computed:{},methods:{register:function(){this.$store.dispatch("register",{userName:this.userName,email:this.email,password:this.password})}},components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),a=n(12),o=n.n(a),r=n(4),i=n(10);n(11),s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,store:i.a,template:"<App/>",components:{App:o.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){function s(t){n(40)}var a=n(1)(n(32),n(55),s,"data-v-5ea8e1e8",null);t.exports=a.exports},function(t,e,n){function s(t){n(43)}var a=n(1)(n(33),n(58),s,"data-v-8fcc2a3e",null);t.exports=a.exports},function(t,e,n){function s(t){n(42)}var a=n(1)(n(34),n(57),s,"data-v-651a3432",null);t.exports=a.exports},function(t,e,n){function s(t){n(44)}var a=n(1)(n(35),n(59),s,"data-v-c127cc58",null);t.exports=a.exports},function(t,e,n){function s(t){n(41)}var a=n(1)(n(36),n(56),s,"data-v-60b1dd3e",null);t.exports=a.exports},function(t,e,n){function s(t){n(45)}var a=n(1)(n(37),n(60),s,"data-v-fd9f004a",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-6"},[n("p",{staticClass:"logout pull-left"},[n("button",{staticClass:"toggles",attrs:{type:"button"},on:{click:t.toggleDecks}},[t._v("Decks")]),t._v(" "),n("button",{staticClass:"toggles",on:{click:t.toggleInventory}},[t._v("Your Inventory")]),t._v(" "),n("button",{staticClass:"toggles",on:{click:t.toggleDungeons}},[t._v("Dungeons")])]),t._v(" "),n("h1",{staticClass:"capitalize"},[t._v("Hello, "+t._s(t.user.name)+"!")])]),t._v(" "),n("div",{staticClass:"col-xs-6"},[n("p",{staticClass:"logout pull-right"},[n("button",{staticClass:"logout",on:{click:function(e){t.logout(t.user)}}},[t._v("Logout")])])]),t._v(" "),this.showDecks?n("div",t._l(t.decks,function(t){return n("div",[n("deck",{attrs:{deck:t}})],1)})):t._e(),t._v(" "),this.showInventory?n("div",t._l(t.inventory,function(t){return n("div",[n("inventory",{attrs:{card:t}})],1)})):t._e(),t._v(" "),this.showDungeons?n("div",t._l(t.dungeons,function(t){return n("div",[n("dungeon",{attrs:{dungeon:t}})],1)})):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h4",[t._v("Login")]),t._v(" "),n("p",[t._v(t._s(t.message))]),t._v(" "),n("form",{on:{submit:function(e){e.preventDefault(),t.login(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control-small input-sm",attrs:{type:"name",placeholder:"Name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control-small input-sm",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control-small input-sm",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"}),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),n("p",[t._v("Not a member?\n    "),n("router-link",{attrs:{to:"/register"}},[t._v("Register")]),t._v(".")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"dungeon"},[t._v("\n"+t._s(t.dungeon.name)+"\n\n  ")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"deck"},[t._v("\n  "+t._s(t.deck.name)+"\n\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"inventory"},[t._v("\n  "+t._s(t.card.name)+"\n\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register"},[n("h4",[t._v("Register")]),t._v(" "),n("form",{on:{submit:function(e){e.preventDefault(),t.register(e)}}},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control-small input-sm",attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control-small input-sm",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control-small input-sm",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])]),t._v(" "),n("p",[t._v("Already a member?\n    "),n("router-link",{attrs:{to:"/login"}},[t._v("Log in")]),t._v(".")],1)])},staticRenderFns:[]}}],[38]);
//# sourceMappingURL=app.f7a00ea5a2156e2a35e0.js.map