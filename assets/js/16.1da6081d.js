(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{927:function(t,e,i){},953:function(t,e,i){"use strict";i(927)},968:function(t,e,i){"use strict";i.r(e);i(19),i(37),i(41),i(137),i(190);var n=i(6),a=i(181),s=i(72),o=i(388),l=i(258),c={data:function(){return{dynamicComponent:null,settingDialog:!1,editorData:{$id:"geek-page",$type:"geek-page",$visible:!0,$body:[{$id:"geek-flex-container-iGdG0F6AKvRM",$type:"geek-flex-container",$visible:!0,$body:[{$id:"geek-icon-Qq38nplauFXo",$type:"geek-icon",$visible:!0,iconClass:"logo",$classes:null,title:"",size:150},{$id:"geek-text",$type:"geek-text",text:"EI VII",highlight:{start:0,end:0},$classes:null,$visible:!0,fontSize:"100px",color:"#1230B4"}],$classes:"bg-color-white p-xl",align:"flex-end",justify:"center"}]},setting:{baseURL:""}}},mounted:function(){var t=this;Object(l.a)(),i.e(2).then(i.t.bind(null,869,7)).then((function(e){s.a.locale=t.formatLangCode(t.$lang),e.default.locale(t.$lang,s.b[s.a.locale]),n.default.use(e.default,{store:o.a,i18n:function(){return s.a.t.apply(s.a,arguments)},fetch:{axios:a.a}}),t.dynamicComponent="leivii-editor",t.runCode()}))},methods:{formatLangCode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cn";return(t=t.toLowerCase()).indexOf("cn")>-1?"cn":t.indexOf("en")>-1?"en":t},runCode:function(){this.$store.commit("leivii/SET_MODE",1),this.$store.commit("leivii/SET_PAGE_CONFIG",JSON.parse(JSON.stringify(this.editorData))),this.$store.dispatch("leivii/setSelected",{$id:this.editorData.$id,$type:this.editorData.$type});var t=localStorage.getItem("baseURL");t&&(this.setting.baseURL=t,a.a.defaults.baseURL=t)},handleSave:function(t){var e=t;this.hasRoot||(e=t.$body.length>1?t.$body:t.$body[0]),console.log(JSON.stringify(e,null,2)),this.$message({iconClass:"none",message:"<pre>".concat(JSON.stringify(e,null,2),"</pre>"),center:!0,dangerouslyUseHTMLString:!0})},handleSetting:function(){this.settingDialog=!1,a.a.defaults.baseURL=this.setting.baseURL,localStorage.setItem("baseURL",this.setting.baseURL)},handleClose:function(){history.back()}}},r=(i(953),i(49)),g=Object(r.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"leivii-playground geek"},[t.dynamicComponent?i(t.dynamicComponent,{tag:"component",attrs:{data:t.editorData},on:{change:t.handleSave}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"back-button fs-xl",on:{click:t.handleClose}},[i("i",{staticClass:"el-icon-back"}),t._v(" "+t._s(t.$transMsg("lang.action.back"))+"\n      ")])]),t._v(" "),i("template",{slot:"operations"},[i("div",{staticClass:"operation",on:{click:function(e){t.settingDialog=!0}}},[i("i",{staticClass:"icon el-icon-setting",staticStyle:{"margin-top":"2px","font-size":"22px"}})])])],2):t._e(),t._v(" "),i("el-dialog",{attrs:{title:t.$transMsg("lang.wms.fed.config"),visible:t.settingDialog,"append-to-body":""},on:{"update:visible":function(e){t.settingDialog=e}}},[i("el-form",{ref:"form",staticClass:"pl pr",attrs:{model:t.setting,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"Axios BaseURL"}},[i("el-input",{attrs:{autofocus:"",placeholder:"http://"},model:{value:t.setting.baseURL,callback:function(e){t.$set(t.setting,"baseURL",e)},expression:"setting.baseURL"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.settingDialog=!1}}},[t._v(t._s(t.$transMsg("lang.action.cancel")))]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSetting}},[t._v(t._s(t.$transMsg("lang.action.confirm")))])],1)],1)],1)}),[],!1,null,"7314bcf4",null);e.default=g.exports}}]);