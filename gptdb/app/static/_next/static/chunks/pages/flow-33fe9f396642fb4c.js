(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3575],{36531:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(87462),a=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"}}]},name:"edit",theme:"filled"},l=n(84089),i=a.forwardRef(function(e,t){return a.createElement(l.Z,(0,r.Z)({},e,{ref:t,icon:o}))})},84567:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(94184),a=n.n(r),o=n(50132),l=n(67294),i=n(53124),c=n(98866),s=n(65223);let u=l.createContext(null);var d=n(63185),f=n(45353),p=n(17415),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let m=l.forwardRef((e,t)=>{var n;let{prefixCls:r,className:m,rootClassName:h,children:v,indeterminate:g=!1,style:x,onMouseEnter:y,onMouseLeave:C,skipGroup:w=!1,disabled:j}=e,k=b(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:$,direction:Z,checkbox:O}=l.useContext(i.E_),E=l.useContext(u),{isFormItemInput:S}=l.useContext(s.aM),N=l.useContext(c.Z),_=null!==(n=(null==E?void 0:E.disabled)||j)&&void 0!==n?n:N,P=l.useRef(k.value);l.useEffect(()=>{null==E||E.registerValue(k.value)},[]),l.useEffect(()=>{if(!w)return k.value!==P.current&&(null==E||E.cancelValue(P.current),null==E||E.registerValue(k.value),P.current=k.value),()=>null==E?void 0:E.cancelValue(k.value)},[k.value]);let I=$("checkbox",r),[z,R]=(0,d.ZP)(I),M=Object.assign({},k);E&&!w&&(M.onChange=function(){k.onChange&&k.onChange.apply(k,arguments),E.toggleOption&&E.toggleOption({label:v,value:k.value})},M.name=E.name,M.checked=E.value.includes(k.value));let V=a()(`${I}-wrapper`,{[`${I}-rtl`]:"rtl"===Z,[`${I}-wrapper-checked`]:M.checked,[`${I}-wrapper-disabled`]:_,[`${I}-wrapper-in-form-item`]:S},null==O?void 0:O.className,m,h,R),B=a()({[`${I}-indeterminate`]:g},p.A,R);return z(l.createElement(f.Z,{component:"Checkbox",disabled:_},l.createElement("label",{className:V,style:Object.assign(Object.assign({},null==O?void 0:O.style),x),onMouseEnter:y,onMouseLeave:C},l.createElement(o.Z,Object.assign({"aria-checked":g?"mixed":void 0},M,{prefixCls:I,className:B,disabled:_,ref:t})),void 0!==v&&l.createElement("span",null,v))))});var h=n(74902),v=n(98423),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let x=l.forwardRef((e,t)=>{let{defaultValue:n,children:r,options:o=[],prefixCls:c,className:s,rootClassName:f,style:p,onChange:b}=e,x=g(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:y,direction:C}=l.useContext(i.E_),[w,j]=l.useState(x.value||n||[]),[k,$]=l.useState([]);l.useEffect(()=>{"value"in x&&j(x.value||[])},[x.value]);let Z=l.useMemo(()=>o.map(e=>"string"==typeof e||"number"==typeof e?{label:e,value:e}:e),[o]),O=y("checkbox",c),E=`${O}-group`,[S,N]=(0,d.ZP)(O),_=(0,v.Z)(x,["value","disabled"]),P=o.length?Z.map(e=>l.createElement(m,{prefixCls:O,key:e.value.toString(),disabled:"disabled"in e?e.disabled:x.disabled,value:e.value,checked:w.includes(e.value),onChange:e.onChange,className:`${E}-item`,style:e.style,title:e.title},e.label)):r,I={toggleOption:e=>{let t=w.indexOf(e.value),n=(0,h.Z)(w);-1===t?n.push(e.value):n.splice(t,1),"value"in x||j(n),null==b||b(n.filter(e=>k.includes(e)).sort((e,t)=>{let n=Z.findIndex(t=>t.value===e),r=Z.findIndex(e=>e.value===t);return n-r}))},value:w,disabled:x.disabled,name:x.name,registerValue:e=>{$(t=>[].concat((0,h.Z)(t),[e]))},cancelValue:e=>{$(t=>t.filter(t=>t!==e))}},z=a()(E,{[`${E}-rtl`]:"rtl"===C},s,f,N);return S(l.createElement("div",Object.assign({className:z,style:p},_,{ref:t}),l.createElement(u.Provider,{value:I},P)))});var y=l.memo(x);m.Group=y,m.__ANT_CHECKBOX=!0;var C=m},63185:function(e,t,n){"use strict";n.d(t,{C2:function(){return i}});var r=n(14747),a=n(45503),o=n(67968);let l=e=>{let{checkboxCls:t}=e,n=`${t}-wrapper`;return[{[`${t}-group`]:Object.assign(Object.assign({},(0,r.Wf)(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[n]:Object.assign(Object.assign({},(0,r.Wf)(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${n}`]:{marginInlineStart:0},[`&${n}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[t]:Object.assign(Object.assign({},(0,r.Wf)(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${t}-inner`]:Object.assign({},(0,r.oN)(e))},[`${t}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:`${e.lineWidthBold}px solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${n}:not(${n}-disabled),
        ${t}:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{borderColor:e.colorPrimary}},[`${n}:not(${n}-disabled)`]:{[`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${t}-checked:not(${t}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-checked`]:{[`${t}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${n}-checked:not(${n}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]:{[`&:hover ${t}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[t]:{"&-indeterminate":{[`${t}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${n}-disabled`]:{cursor:"not-allowed"},[`${t}-disabled`]:{[`&, ${t}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${t}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${t}-indeterminate ${t}-inner::after`]:{background:e.colorTextDisabled}}}]};function i(e,t){let n=(0,a.TS)(t,{checkboxCls:`.${e}`,checkboxSize:t.controlInteractiveSize});return[l(n)]}t.ZP=(0,o.Z)("Checkbox",(e,t)=>{let{prefixCls:n}=t;return[i(n,e)]})},48907:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/flow",function(){return n(24363)}])},45247:function(e,t,n){"use strict";var r=n(85893),a=n(50888);t.Z=function(e){let{visible:t}=e;return t?(0,r.jsx)("div",{className:"absolute w-full h-full top-0 left-0 flex justify-center items-center z-10 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm text-3xl animate-fade animate-duration-200",children:(0,r.jsx)(a.Z,{})}):null}},24363:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(85893),a=n(89182),o=n(91085),l=n(45247),i=n(28058),c=n(87462),s=n(67294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},d=n(84089),f=s.forwardRef(function(e,t){return s.createElement(d.Z,(0,c.Z)({},e,{ref:t,icon:u}))}),p=n(37017),b=n(36531),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-.2L232 746.2v-.2h150v150z"}}]},name:"copy",theme:"filled"},h=s.forwardRef(function(e,t){return s.createElement(d.Z,(0,c.Z)({},e,{ref:t,icon:m}))}),v=n(27704),g=n(36147),x=n(83062),y=n(67421),C=n(23391),w=n(11163),j=n(26892),k=n(41468),$=n(97334),Z=n.n($),O=e=>{let{flow:t,onCopy:n,deleteCallback:o}=e,{model:l}=(0,s.useContext)(k.p),{t:c}=(0,y.$G)(),[u,d]=g.default.useModal(),m=(0,w.useRouter)();async function $(){let[,,e]=await (0,a.Vx)((0,a.Jq)(t.uid));(null==e?void 0:e.success)&&o&&o(t.uid)}let O=async()=>{let[,e]=await (0,a.Vx)((0,a.sW)({chat_mode:"chat_agent"}));if(e){let n=Z().stringify({scene:"chat_flow",id:e.conv_uid,model:l,select_param:t.uid});m.push("/chat?".concat(n))}};return(0,r.jsxs)(r.Fragment,{children:[d,(0,r.jsx)(j.Z,{className:"w-[26rem] max-w-full",title:t.name,desc:t.description,tags:[{text:t.source,color:"GPTDB-WEB"===t.source?"green":"blue",border:!0},{text:t.editable?"Editable":"Can not Edit",color:t.editable?"green":"gray",border:!0},{text:(0,r.jsx)(r.Fragment,{children:t.error_message?(0,r.jsxs)(x.Z,{placement:"bottom",title:t.error_message,children:[t.state,(0,r.jsx)(f,{className:"ml-1"})]}):t.state}),color:"load_failed"===t.state?"red":"running"===t.state?"green":"blue",border:!0}],operations:[{label:c("Chat"),children:(0,r.jsx)(p.Z,{}),onClick:O},{label:c("Edit"),children:(0,r.jsx)(b.Z,{}),onClick:function(){m.push("/flow/canvas?id="+t.uid)}},{label:c("Copy"),children:(0,r.jsx)(h,{}),onClick:()=>{n(t)}},{label:c("Delete"),children:(0,r.jsx)(v.Z,{}),onClick:()=>{u.confirm({title:c("Tips"),icon:(0,r.jsx)(i.Z,{}),content:c("delete_flow_confirm"),okText:"Yes",okType:"danger",cancelText:"No",async onOk(){$()}})}}],children:(0,r.jsx)("div",{className:"w-full h-40 shadow-[inset_0_0_16px_rgba(50,50,50,.05)]",children:(0,r.jsx)(C.Z,{flowData:t.flow_data})})})]})},E=n(24969),S=n(2453),N=n(39479),_=n(71577),P=n(79531),I=n(84567),z=n(41664),R=n.n(z),M=function(){let{t:e}=(0,y.$G)(),[t,n]=(0,s.useState)(!1),[i,c]=(0,s.useState)(!1),[u,d]=(0,s.useState)([]),[f,p]=(0,s.useState)(!1),[b,m]=S.ZP.useMessage(),[h]=N.Z.useForm(),v=(0,s.useRef)();async function x(){var e;c(!0);let[t,n]=await (0,a.Vx)((0,a.Wf)());c(!1),d(null!==(e=null==n?void 0:n.items)&&void 0!==e?e:[])}function C(e){d(t=>t.filter(t=>t.uid!==e))}(0,s.useEffect)(()=>{x()},[]);let w=e=>{v.current=e,h.setFieldValue("label","".concat(e.label," Copy")),h.setFieldValue("name","".concat(e.name,"_copy")),p(!1),n(!0)},j=async t=>{if(!v.current)return;let{source:r,uid:o,dag_id:l,gmt_created:i,gmt_modified:c,state:s,...u}=v.current,d={...u,editable:!0,state:f?"deployed":"developing",...t},[p]=await (0,a.Vx)((0,a.zd)(d));p||(b.success(e("save_flow_success")),n(!1),x())};return(0,r.jsxs)("div",{className:"relative p-4 md:p-6 min-h-full overflow-y-auto",children:[m,(0,r.jsx)(l.Z,{visible:i}),(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(R(),{href:"/flow/canvas",children:(0,r.jsx)(_.ZP,{type:"primary",className:"flex items-center",icon:(0,r.jsx)(E.Z,{}),children:"New AWEL Flow"})})}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2 md:gap-4 justify-start items-stretch",children:[u.map(e=>(0,r.jsx)(O,{flow:e,deleteCallback:C,onCopy:w},e.uid)),0===u.length&&(0,r.jsx)(o.Z,{description:"No flow found"})]}),(0,r.jsx)(g.default,{open:t,title:"Copy AWEL Flow",onCancel:()=>{n(!1)},footer:!1,children:(0,r.jsxs)(N.Z,{form:h,onFinish:j,className:"mt-6",children:[(0,r.jsx)(N.Z.Item,{name:"name",label:"Name",rules:[{required:!0}],children:(0,r.jsx)(P.default,{})}),(0,r.jsx)(N.Z.Item,{name:"label",label:"Label",rules:[{required:!0}],children:(0,r.jsx)(P.default,{})}),(0,r.jsx)(N.Z.Item,{label:"Deploy",children:(0,r.jsx)(I.Z,{value:f,onChange:e=>{let t=e.target.checked;p(t)}})}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(_.ZP,{type:"primary",htmlType:"submit",children:e("Submit")})})]})})]})}},97334:function(e){!function(){"use strict";var t={815:function(e){e.exports=function(e,n,r,a){n=n||"&",r=r||"=";var o={};if("string"!=typeof e||0===e.length)return o;var l=/\+/g;e=e.split(n);var i=1e3;a&&"number"==typeof a.maxKeys&&(i=a.maxKeys);var c=e.length;i>0&&c>i&&(c=i);for(var s=0;s<c;++s){var u,d,f,p,b=e[s].replace(l,"%20"),m=b.indexOf(r);(m>=0?(u=b.substr(0,m),d=b.substr(m+1)):(u=b,d=""),f=decodeURIComponent(u),p=decodeURIComponent(d),Object.prototype.hasOwnProperty.call(o,f))?t(o[f])?o[f].push(p):o[f]=[o[f],p]:o[f]=p}return o};var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},577:function(e){var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,o,l,i){return(o=o||"&",l=l||"=",null===e&&(e=void 0),"object"==typeof e)?r(a(e),function(a){var i=encodeURIComponent(t(a))+l;return n(e[a])?r(e[a],function(e){return i+encodeURIComponent(t(e))}).join(o):i+encodeURIComponent(t(e[a]))}).join(o):i?encodeURIComponent(t(i))+l+encodeURIComponent(t(e)):""};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},l=!0;try{t[e](o,o.exports,r),l=!1}finally{l&&delete n[e]}return o.exports}r.ab="//";var a={};a.decode=a.parse=r(815),a.encode=a.stringify=r(577),e.exports=a}()},50132:function(e,t,n){"use strict";var r=n(87462),a=n(1413),o=n(4942),l=n(97685),i=n(45987),c=n(94184),s=n.n(c),u=n(21770),d=n(67294),f=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],p=(0,d.forwardRef)(function(e,t){var n,c=e.prefixCls,p=void 0===c?"rc-checkbox":c,b=e.className,m=e.style,h=e.checked,v=e.disabled,g=e.defaultChecked,x=e.type,y=void 0===x?"checkbox":x,C=e.title,w=e.onChange,j=(0,i.Z)(e,f),k=(0,d.useRef)(null),$=(0,u.Z)(void 0!==g&&g,{value:h}),Z=(0,l.Z)($,2),O=Z[0],E=Z[1];(0,d.useImperativeHandle)(t,function(){return{focus:function(){var e;null===(e=k.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=k.current)||void 0===e||e.blur()},input:k.current}});var S=s()(p,b,(n={},(0,o.Z)(n,"".concat(p,"-checked"),O),(0,o.Z)(n,"".concat(p,"-disabled"),v),n));return d.createElement("span",{className:S,title:C,style:m},d.createElement("input",(0,r.Z)({},j,{className:"".concat(p,"-input"),ref:k,onChange:function(t){v||("checked"in e||E(t.target.checked),null==w||w({target:(0,a.Z)((0,a.Z)({},e),{},{type:y,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:v,checked:!!O,type:y})),d.createElement("span",{className:"".concat(p,"-inner")}))});t.Z=p}},function(e){e.O(0,[8241,2185,5503,9479,7434,9924,6165,9774,2888,179],function(){return e(e.s=48907)}),_N_E=e.O()}]);