(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["splitpdf"],{"04c6":function(e,t,a){"use strict";a("60c9")},"113d":function(e,t,a){"use strict";a("955e")},2780:function(e,t,a){},2785:function(e,t,a){e.exports=a.p+"img/drag-up-down.77ec826f.svg"},"48b4":function(e,t,a){"use strict";a("2780")},"60c9":function(e,t,a){},"778d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main",style:e.file?"display: flex;":"display: inline-block;  width: 100%;"},["processing"==e.page_load?t("Processing",{attrs:{progress:"Splitting"}}):e._e(),"uploading"==e.page_load?t("Uploading",{attrs:{progress:e.progress,number:1,total:1,size:e.size,file_name:e.file_name}}):e._e(),t("input",{ref:"file",staticClass:"hidden-input",attrs:{type:"file",multiple:"",hidden:"",name:"file",id:"fileInput",accept:".pdf"},on:{change:e.onChange}}),e.pages.length||"default"!=e.page_load?e._e():t("SelectFileComponent",{attrs:{title:e.$t("page_titles.split_page.title"),description:e.$t("page_titles.split_page.description"),featureImgUrl:e.imgUrl},on:{open_add_local:e.open_add_local,onPickedDropbox:e.onPickedDropbox,onPickedGoogleDriver:e.onPickedGoogleDriver,handleFile:e.handleFiles}}),e.pages.length&&"default"==e.page_load?t("div",{staticClass:"split-files-list"},[t("div",{staticClass:"preview-container mt-4"},[t("draggable",{staticClass:"md-layout",attrs:{options:{animation:150}},model:{value:e.pages,callback:function(t){e.pages=t},expression:"pages"}},e._l(e.pages,(function(a){return t("div",{key:a.id,staticClass:"range__container"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.extractEdit&&e.showFlag(a.id),expression:"extractEdit && showFlag(page.id)"}]},[t("div",{staticClass:"md-badge"},[t("i",{staticClass:"fa-solid fa-check"})])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.extractEdit,expression:"!extractEdit"}]},[t("p",[e._v(e._s(e.$t("page_titles.split_page.range"))+" "+e._s(a.id))])]),a.range[0]==a.range[1]?t("div",{staticClass:"split_card"},[t("div",{staticClass:"split_card_body",on:{click:function(t){return e.click_extract_pages(a.range[0])}}},[t("div",[t("PdfViewer",{attrs:{fileUrl:e.generateURL(e.file),pageNumber:1*a.range[0]}})],1),t("div",{staticClass:"page_number"},[e._v(e._s(a.range[1]))])])]):t("div",{staticClass:"split_card"},[t("div",{staticClass:"split_card_body"},[t("div",[t("PdfViewer",{attrs:{fileUrl:e.generateURL(e.file),pageNumber:1*a.range[0]}})],1),t("div",{staticClass:"page_number"},[e._v(e._s(a.range[0]))])]),t("div",{staticClass:"split_card_body"},[t("div",[t("PdfViewer",{attrs:{fileUrl:e.generateURL(e.file),pageNumber:1*a.range[1]}})],1),t("div",{staticClass:"page_number"},[e._v(e._s(a.range[1]))])])])])})),0)],1),"default"==e.page_load&&e.pages.length?t("div",{staticClass:"responsive-setting",style:e.show_sidebar?"left:30px":"right:20px",on:{click:function(t){e.show_sidebar=!e.show_sidebar}}},[t("i",{staticClass:"fa-solid fa-gear"})]):e._e()]):e._e(),"default"==e.page_load&&e.pages.length?t("button",{staticClass:"sign_responsive_btn",on:{click:e.splitPDF}},[e._v(" "+e._s(e.$t("page_titles.split_page.actionBtn"))+" ")]):e._e(),"default"==e.page_load&&e.pages.length?t("div",{directives:[{name:"show",rawName:"v-show",value:e.show_sidebar,expression:"show_sidebar"}],ref:"sidebar",staticClass:"split_responsive__sidebar",staticStyle:{"overflow-y":"auto"}},[t("h3",[e._v(e._s(e.$t("page_titles.split_page.split")))]),t("div",{staticClass:"tab-area"},[t("md-tabs",{attrs:{"md-alignment":"centered"}},[t("md-tab",{class:e.extractEdit?"active_tab":"",attrs:{id:"tab-home","md-icon":"picture_as_pdf","md-label":"Split by range",exact:!0,"md-template-data":{badge:1},"md-active-tab":""},on:{click:e.rangeSplit}},[t("SpiltRange",{attrs:{rangeArray:e.pages,maxNumber:e.pageCount},on:{set_check:e.set_checkBox,rangeChange:e.changeRange}})],1),t("md-tab",{class:e.extractEdit?"":"active_tab",attrs:{id:"Extract pages","md-icon":"account_tree","md-label":"Extract Pages",set_disAll:e.pdf_click},on:{click:e.extractSplit}},[t("SplitExtra",{attrs:{set_disAll:e.pdf_click,maxNum:e.pageCount,extractpage:e.extractPages},on:{set_check:e.set_checkBox,extractChange:e.setExtract}})],1)],1)],1),t("div",{staticClass:"option__panel option__panel--active",attrs:{id:"merge-options"}},[e.show_checkBox?t("div",[t("md-checkbox",{attrs:{value:"true"},model:{value:e.merge_selected,callback:function(t){e.merge_selected=t},expression:"merge_selected"}},[e._v(" "+e._s(e.$t("page_titles.split_page.allRange"))+" ")])],1):e._e()])]):e._e(),"default"==e.page_load&&e.pages.length?t("div",{ref:"sidebar",staticClass:"split_tool__sidebar",staticStyle:{"overflow-y":"auto"},style:e.myStyleObject},[t("h3",[e._v(e._s(e.$t("page_titles.split_page.split")))]),t("div",{staticClass:"tab-area"},[t("md-tabs",{attrs:{"md-alignment":"centered"}},[t("md-tab",{class:e.extractEdit?"active_tab":"",attrs:{id:"tab-home","md-icon":"picture_as_pdf","md-label":"Split by range",exact:!0,"md-template-data":{badge:1},"md-active-tab":""},on:{click:e.rangeSplit}},[t("SpiltRange",{attrs:{rangeArray:e.pages,maxNumber:e.pageCount},on:{set_check:e.set_checkBox,rangeChange:e.changeRange}})],1),t("md-tab",{class:e.extractEdit?"":"active_tab",attrs:{id:"Extract pages","md-icon":"account_tree","md-label":"Extract Pages",set_disAll:e.pdf_click},on:{click:e.extractSplit}},[t("SplitExtra",{attrs:{set_disAll:e.pdf_click,maxNum:e.pageCount,extractpage:e.extractPages},on:{set_check:e.set_checkBox,extractChange:e.setExtract}})],1)],1)],1),t("div",{staticClass:"option__panel option__panel--active",attrs:{id:"merge-options"}},[e.show_checkBox?t("div",[t("md-checkbox",{attrs:{value:"true"},model:{value:e.merge_selected,callback:function(t){e.merge_selected=t},expression:"merge_selected"}},[e._v(" "+e._s(e.$t("page_titles.split_page.allRange"))+" ")])],1):e._e(),t("button",{staticClass:"sign_complete_btn",on:{click:e.splitPDF}},[e._v(" "+e._s(e.$t("page_titles.split_page.actionBtn"))+" ")])])]):e._e()],1)},i=[],n=a("2909"),r=a("c7eb"),l=a("1da1"),c=(a("14d9"),a("a434"),a("4e82"),a("9911"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("d81d"),a("e9c4"),a("772b")),o=a("b76a"),d=a.n(o),p=function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v(e._s(e.$t("page_titles.split_page.extractMode")))]),t("div",[t("md-button",{staticClass:"md-raised add_range_btn",class:e.disAll?"active_btn":"",on:{click:e.selAll}},[e._v(e._s(e.$t("page_titles.split_page.extractAll")))]),t("md-button",{staticClass:"md-raised add_range_btn",class:e.disAll?"":"active_btn",on:{click:e.selPage}},[e._v(e._s(e.$t("page_titles.split_page.selectPage")))])],1),t("div",[e.disAll?t("div",{staticClass:"description"},[e._v(" "+e._s(e.$t("page_titles.split_page.extract_des_b"))+" "+e._s(e.maxNum)+e._s(e.$t("page_titles.split_page.extract_des_a"))+" ")]):t("div",[t("md-field",{staticStyle:{padding:"0 20px"}},[t("md-input",{attrs:{placeholder:"example:1,5-8"},on:{input:e.setExtract},model:{value:e.selectPages,callback:function(t){e.selectPages=t},expression:"selectPages"}})],1)],1)])])},g=[],u=(a("ac1f"),a("5319"),a("a9e3"),{props:["maxNum","extractpage"],data:function(){return{selectPages:"",disAll:!0}},watch:{extractpage:function(e){e.length==this.maxNum?(this.disAll=!0,this.$emit("set_check",!1)):(this.disAll=!1,this.$emit("set_check",!0));for(var t="",a=0;a<e.length;a++){t.length>0&&(t+=",");var s=e[a];s[0]==s[1]?t+=s[0]:t=t+s[0]+"-"+s[1]}this.selectPages=t}},methods:{selPage:function(){this.disAll=!1,this.$emit("extractChange",[]),this.$emit("set_check",!0)},selAll:function(){this.disAll=!0;for(var e=[],t=1;t<=this.maxNum;t++)e.push([t,t]);this.$emit("extractChange",e),this.$emit("set_check",!1)},setExtract:function(){var e=this.selectPages[this.selectPages.length-1];if("-"!=e&&","!=e){for(var t=this.selectPages.replace(/\s/g,""),a=t.split(","),s=[],i=0;i<a.length;i++)if(Number(a[i])){if(Number(a[i])>this.maxNum)continue;s.push([Number(a[i]),Number(a[i])])}else{var n=a[i].split("-"),r=Number(n[0]),l=Number(n[1]);r&&l&&l>r&&r<this.maxNum&&l<=this.maxNum&&s.push([r,l])}this.$emit("extractChange",s)}}}}),_=u,m=(a("113d"),a("2877")),h=Object(m["a"])(_,p,g,!1,null,"0b73ec42",null),f=h.exports,v=function(){var e=this,t=e._self._c;return t("div",[t("h3",[e._v(e._s(e.$t("page_titles.split_page.rangeMode")))]),t("md-button",{staticClass:"md-raised range_btn",class:e.custom_show?"active_btn":"",on:{click:e.customRangeEdit}},[e._v(" "+e._s(e.$t("page_titles.split_page.customRange"))+" ")]),t("md-button",{staticClass:"md-raised range_btn",class:e.custom_show?"":"active_btn",on:{click:e.fixedRangeEdit}},[e._v(" "+e._s(e.$t("page_titles.split_page.fixedRange"))+" ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.custom_show,expression:"custom_show"}]},[t("draggable",{attrs:{options:{animation:150},group:"people"},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.disArray,callback:function(t){e.disArray=t},expression:"disArray"}},e._l(e.disArray,(function(s){return t("div",{key:s.id,on:{mouseover:function(t){e.delete_enable=s.id},mouseleave:function(t){e.delete_enable=null}}},[t("div",{staticClass:"viewport"},[t("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":1}},[t("span",{staticClass:"md-title"},[t("img",{staticStyle:{"margin-right":"10px",width:"15px"},attrs:{src:a("2785"),alt:""}}),e._v(" "+e._s(e.$t("page_titles.split_page.range"))+" "+e._s(s.id)+" "),e.delete_enable==s.id?t("div",{staticClass:"file__btn remove tooltip--top tooltip",on:{click:function(t){e.remove(e.disArray.indexOf(s))}}},[t("i",{staticClass:"fa-solid fa-xmark"})]):e._e()])]),t("md-list",{staticClass:"md-double-line"},[t("md-list-item",[t("div",{staticClass:"md-list-item-text",staticStyle:{display:"contents"}},[t("div",{staticClass:"range-area"},[t("label",[e._v(e._s(e.$t("page_titles.split_page.fromPage")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.range[0],expression:"range.range[0]"}],attrs:{type:"number",max:s.range[1],min:1},domProps:{value:s.range[0]},on:{input:[function(t){t.target.composing||e.$set(s.range,0,t.target.value)},e.range_change]}})]),t("div",{staticClass:"range-area"},[t("label",[e._v(e._s(e.$t("page_titles.split_page.to")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.range[1],expression:"range.range[1]"}],attrs:{type:"number",max:e.maxNumber,min:s.range[0]},domProps:{value:s.range[1]},on:{input:[function(t){t.target.composing||e.$set(s.range,1,t.target.value)},e.range_change]}})])])])],1)],1)])})),0),t("md-button",{staticClass:"md-dense add_range_btn",on:{click:e.addRange}},[e._v(e._s(e.$t("page_titles.split_page.addRange")))])],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.custom_show,expression:"!custom_show"}]},[t("div",[e._v(" Split into page ranges of "),t("md-field",{staticStyle:{padding:"0 20px"}},[t("md-input",{attrs:{type:"number",max:e.maxNumber,min:1},on:{input:e.setFixedRange},model:{value:e.fixed_range,callback:function(t){e.fixed_range=t},expression:"fixed_range"}})],1)],1),t("div",{staticClass:"description"},[e._v(" "+e._s(e.$t("page_titles.split_page.split_des_b"))+" "+e._s(e.fixed_range)+". "+e._s(e.disArray.length)+" "+e._s(e.$t("page_titles.split_page.split_des_a"))+" ")])])],1)},x=[],b={components:{draggable:d.a},props:["rangeArray","maxNumber"],data:function(){return{fixed_range:1,custom_show:!0,number:5,disArray:[],maxId:1,active:!0,delete_enable:null}},watch:{rangeArray:function(e){this.disArray=e}},methods:{remove:function(e){this.disArray.length>1&&(this.disArray.splice(e,1),this.$emit("rangeChange",this.disArray))},range_change:function(){this.$emit("rangeChange",this.disArray)},addRange:function(){this.disArray.push({id:this.maxId+1,range:[1*this.maxNumber,1*this.maxNumber]}),this.maxId++,this.$emit("rangeChange",this.disArray)},customRangeEdit:function(){this.$emit("set_check",!0),this.active=!0,this.custom_show=!0,this.disArray=[{id:1,range:[1,1*this.maxNumber]}],this.$emit("rangeChange",this.disArray)},fixedRangeEdit:function(){this.$emit("set_check",!1),this.custom_show=!1,this.disArray=[];for(var e=1;e<=this.maxNumber;e++)this.disArray.push({id:e,range:[e,e]})},setFixedRange:function(){var e;this.disArray=[],(!this.fixed_range||this.fixed_range<1)&&(this.fixed_range=1),this.fixed_range=1*this.fixed_range;var t=1;for(e=1;e<=this.maxNumber;e+=1*this.fixed_range){var a=e,s=e+1*this.fixed_range-1<this.maxNumber?e+1*this.fixed_range-1:this.maxNumber;this.disArray.push({id:t,range:[a,s]}),t++}this.$emit("rangeChange",this.disArray)}}},w=b,P=(a("48b4"),Object(m["a"])(w,v,x,!1,null,"0682bb59",null)),y=P.exports,k=a("f9cb"),C=a("8658"),$=a.n(C),F=a("89c2"),A=a("07f6"),N=a("dd03"),D=a("b591"),S=a("a01a"),E=a("070a"),O=a.n(E);k["GlobalWorkerOptions"].workerSrc=$.a;var R={metaInfo:{title:"Split PDF – Separate Pages in your PDF File for Free",meta:[{name:"Keywords",content:"Split PDF, PDF split, split PDF online, divide PDF files, PDF splitter, online PDF split, extract PDF pages, split PDF documents, split PDF pages, PDF file split"},{name:"description",content:"Split PDF files effortlessly with our PDF splitter. Divide and extract pages from your PDFs online. Enjoy a simple, secure, and user-friendly PDF split tool."},{property:"og:description",content:"Split PDF files effortlessly with our PDF splitter. Divide and extract pages from your PDFs online. Enjoy a simple, secure, and user-friendly PDF split tool."},{property:"og:title",content:"Split PDF – Separate Pages in your PDF File for Free"}]},mixins:[N["a"]],components:{PdfViewer:c["a"],draggable:d.a,SplitExtra:f,SpiltRange:y,Processing:F["a"],Uploading:A["a"],SelectFileComponent:S["a"]},data:function(){return{isDragging:!1,file:null,pageCount:0,pages:[],extractEdit:!1,extractPages:[],pdf_click:!1,merge_selected:!1,show_checkBox:!0,myStyleObject:{},page_load:"default",progress:0,size:0,file_name:"",show_sidebar:!1,imgUrl:O.a}},mounted:function(){var e=this;return Object(l["a"])(Object(r["a"])().mark((function t(){var a,s;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$route.params.file){t.next=9;break}return console.log(e.$route.params.file),e.file=e.$route.params.file[0],t.next=5,Object(D["a"])(e.file);case 5:for(a=t.sent,e.pageCount=a,e.pages=[{id:1,range:[1,a]}],s=1;s<=a;s++)e.extractPages.push([s,s]);case 9:case"end":return t.stop()}}),t)})))()},methods:{set_checkBox:function(e){this.show_checkBox=e,this.merge_selected=!1},handleFiles:function(e){e.length>1?(this.$swal("Sorry!","PDFden cannot process  more than one files in a task. One file will be process!","warning"),this.file=e[0],this.get_pages(e[0])):(this.file=e[0],this.get_pages(e[0]))},changeRange:function(e){this.pages=e},get_pages:function(){var e=this;return Object(l["a"])(Object(r["a"])().mark((function t(){var a,s;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(D["a"])(e.file);case 2:for(a=t.sent,e.pageCount=a,e.pages=[{id:1,range:[1,a]}],s=1;s<=a;s++)e.extractPages.push([s,s]);case 6:case"end":return t.stop()}}),t)})))()},setExtract:function(e){this.extractPages=e},click_extract_pages:function(e){var t=[];if(this.extractEdit)if(this.extractPages.length){for(var a=0;a<this.extractPages.length;a++)for(var s=this.extractPages[a],i=s[0];i<=s[1];i++)t.indexOf(i)<0&&t.push(i);t.indexOf(e)>=0?t.splice(t.indexOf(e),1):t.push(e),t=Object(n["a"])(t).sort((function(e,t){return e-t})),this.extractPages=this.groupConsecutiveNumbers(t),console.log(this.extractPages)}else this.extractPages.push([e,e]),console.log(this.extractPages)},groupConsecutiveNumbers:function(e){for(var t=[],a=e[0],s=e[0],i=1;i<e.length;i++)e[i]-e[i-1]===1||(t.push([a,s]),a=e[i]),s=e[i];return t.push([a,s]),t},extractSplit:function(){this.extractEdit=!0,this.pages=[];for(var e=1;e<=this.pageCount;e++)this.pages.push({id:e,range:[e,e]})},rangeSplit:function(){1==this.extractEdit&&(this.pages=[{id:1,range:[1,this.pageCount]}],this.extractPages=[]),this.extractEdit=!1},showFlag:function(e){if(this.extractPages.length){for(var t=[],a=0;a<this.extractPages.length;a++)for(var s=this.extractPages[a],i=s[0];i<=s[1];i++)t.indexOf(i)<0&&t.push(i);return!(t.indexOf(e)<0)}return!1},generateURL:function(e){if(e.link)return e.link;if("application/pdf"==e.type){var t=URL.createObjectURL(e);return setTimeout((function(){URL.revokeObjectURL(t)}),1e3),t}},readFileAsync:function(e){return Object(l["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){var s=new FileReader;s.onload=function(){t(s.result)},s.onerror=a,s.readAsArrayBuffer(e)})));case 1:case"end":return t.stop()}}),t)})))()},splitPDF:function(){var e=[];e=this.extractEdit?this.extractPages:this.pages.map((function(e){return[1*e.range[0],1*e.range[1]]})),this.splitingPDF(e)},splitingPDF:function(e){var t=this;return Object(l["a"])(Object(r["a"])().mark((function a(){var s,i;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=new FormData,i={pages:e,merge_flag:t.merge_selected},i=JSON.stringify(i),s.append("file",t.file),s.append("items",i),t.page_load="uploading",t.$axios.post("/pdf/pdf_split",s,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){this.progress=parseInt(Math.round(e.loaded/e.total*100)),this.size=e.total,1==e.progress&&(this.page_load="processing")}.bind(t)}).then((function(e){console.log(e.data);var a=e.data.split(".")[1],s={id:e.data,button_title:"Download SPlitted PDF",dis_text:"PDF has been Splitted!",down_name:"pdfden_splitted.".concat(a),file_type:"application/".concat(a),before:"splitpdf"},i=t.$encrypt(s);t.$router.push({name:void 0==t.$route.params.locale?"download":"en_download",params:{param:i}})})).catch((function(e){console.log(e),t.page_load="default",t.$swal("Server Error!","Please check your Network.","Warning")}));case 7:case"end":return a.stop()}}),a)})))()}}},j=R,U=(a("04c6"),Object(m["a"])(j,s,i,!1,null,"05d67972",null));t["default"]=U.exports},"955e":function(e,t,a){}}]);
//# sourceMappingURL=splitpdf.6eea49f1.js.map