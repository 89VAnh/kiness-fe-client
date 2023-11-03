import{aC as N,F as te,G as ne,H as oe,r as c,d as q,f as S,C as ie,t as ae,s as re,E as se,aK as ce,w as le,q as de,x as K,bs as me,V as ue,bt as pe,Q as r,X as fe,bu as ge,bv as he,bw as be,T as M,Y as A,L as H,A as $,B as R,b9 as xe,bx as ye}from"./index-9a78810f.js";import{u as ve}from"./useMutation-302e202b.js";import{N as Ce,u as $e,a as _e,F as P,R as k}from"./validator-ab66ccab.js";import{r as je}from"./render-41cc0740.js";import{I as Ie}from"./InfoCircleFilled-caf22935.js";import{I as U}from"./index-16334ca6.js";import{C as Ne}from"./index-3be21fa0.js";import"./utils-0507c293.js";const Se=e=>{const{componentCls:t,width:o,notificationMarginEdge:n,animationMaxHeight:i}=e,l=new N("antNotificationTopFadeIn",{"0%":{marginTop:"-100%",opacity:0},"100%":{marginTop:0,opacity:1}}),d=new N("antNotificationBottomFadeIn",{"0%":{bottom:-i,opacity:0},"100%":{bottom:0,opacity:1}}),a=new N("antNotificationLeftFadeIn",{"0%":{right:{_skip_check_:!0,value:o},opacity:0},"100%":{right:{_skip_check_:!0,value:0},opacity:1}});return{[`&${t}-top, &${t}-bottom`]:{marginInline:0},[`&${t}-top`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:l}},[`&${t}-bottom`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:d}},[`&${t}-topLeft, &${t}-bottomLeft`]:{marginInlineEnd:0,marginInlineStart:n,[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:a}}}},Oe=Se,we=e=>{const{iconCls:t,componentCls:o,boxShadow:n,fontSizeLG:i,notificationMarginBottom:l,borderRadiusLG:d,colorSuccess:a,colorInfo:s,colorWarning:m,colorError:g,colorTextHeading:f,notificationBg:u,notificationPadding:b,notificationMarginEdge:x,motionDurationMid:_,motionEaseInOut:y,fontSize:v,lineHeight:j,width:O,notificationIconSize:I,colorText:L}=e,p=`${o}-notice`,w=new N("antNotificationFadeIn",{"0%":{left:{_skip_check_:!0,value:O},opacity:0},"100%":{left:{_skip_check_:!0,value:0},opacity:1}}),ee=new N("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:l,opacity:1},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}}),D={position:"relative",width:O,maxWidth:`calc(100vw - ${x*2}px)`,marginBottom:l,marginInlineStart:"auto",padding:b,overflow:"hidden",lineHeight:j,wordWrap:"break-word",background:u,borderRadius:d,boxShadow:n,[`${o}-close-icon`]:{fontSize:v,cursor:"pointer"},[`${p}-message`]:{marginBottom:e.marginXS,color:f,fontSize:i,lineHeight:e.lineHeightLG},[`${p}-description`]:{fontSize:v,color:L},[`&${p}-closable ${p}-message`]:{paddingInlineEnd:e.paddingLG},[`${p}-with-icon ${p}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.marginSM+I,fontSize:i},[`${p}-with-icon ${p}-description`]:{marginInlineStart:e.marginSM+I,fontSize:v},[`${p}-icon`]:{position:"absolute",fontSize:I,lineHeight:0,[`&-success${t}`]:{color:a},[`&-info${t}`]:{color:s},[`&-warning${t}`]:{color:m},[`&-error${t}`]:{color:g}},[`${p}-close`]:{position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.wireframe?"transparent":e.colorFillContent}},[`${p}-btn`]:{float:"right",marginTop:e.marginSM}};return[{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},oe(e)),{position:"fixed",zIndex:e.zIndexPopup,marginInlineEnd:x,[`${o}-hook-holder`]:{position:"relative"},[`&${o}-top, &${o}-bottom`]:{[p]:{marginInline:"auto auto"}},[`&${o}-topLeft, &${o}-bottomLeft`]:{[p]:{marginInlineEnd:"auto",marginInlineStart:0}},[`${o}-fade-enter, ${o}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:y,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${o}-fade-leave`]:{animationTimingFunction:y,animationFillMode:"both",animationDuration:_,animationPlayState:"paused"},[`${o}-fade-enter${o}-fade-enter-active, ${o}-fade-appear${o}-fade-appear-active`]:{animationName:w,animationPlayState:"running"},[`${o}-fade-leave${o}-fade-leave-active`]:{animationName:ee,animationPlayState:"running"}}),Oe(e)),{"&-rtl":{direction:"rtl",[`${p}-btn`]:{float:"left"}}})},{[o]:{[p]:Object.assign({},D)}},{[`${p}-pure-panel`]:Object.assign(Object.assign({},D),{margin:0})}]},Q=te("Notification",e=>{const t=e.paddingMD,o=e.paddingLG,n=ne(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:t,notificationPaddingHorizontal:o,notificationIconSize:e.fontSizeLG*e.lineHeightLG,notificationCloseButtonSize:e.controlHeightLG*.55,notificationMarginBottom:e.margin,notificationPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,notificationMarginEdge:e.marginLG,animationMaxHeight:150});return[we(n)]},e=>({zIndexPopup:e.zIndexPopupBase+50,width:384}));var Pe=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};function z(e,t){return t===null||t===!1?null:t||c.createElement("span",{className:`${e}-close-x`},c.createElement(ie,{className:`${e}-close-icon`}))}const Ee={success:ae,info:Ie,error:re,warning:se},V=e=>{const{prefixCls:t,icon:o,type:n,message:i,description:l,btn:d,role:a="alert"}=e;let s=null;return o?s=c.createElement("span",{className:`${t}-icon`},o):n&&(s=c.createElement(Ee[n]||null,{className:S(`${t}-icon`,`${t}-icon-${n}`)})),c.createElement("div",{className:S({[`${t}-with-icon`]:s}),role:a},s,c.createElement("div",{className:`${t}-message`},i),c.createElement("div",{className:`${t}-description`},l),d&&c.createElement("div",{className:`${t}-btn`},d))},Fe=e=>{const{prefixCls:t,className:o,icon:n,type:i,message:l,description:d,btn:a,closable:s=!0,closeIcon:m}=e,g=Pe(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon"]),{getPrefixCls:f}=c.useContext(q),u=t||f("notification"),b=`${u}-notice`,[,x]=Q(u);return c.createElement(Ce,Object.assign({},g,{prefixCls:u,className:S(o,x,`${b}-pure-panel`),eventKey:"pure",duration:null,closable:s,closeIcon:z(u,m),content:c.createElement(V,{prefixCls:b,icon:n,type:i,message:l,description:d,btn:a})}))},Te=Fe;function Le(e,t,o){let n;switch(e){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:t,bottom:"auto"};break;case"topLeft":n={left:0,top:t,bottom:"auto"};break;case"topRight":n={right:0,top:t,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:o};break;case"bottomLeft":n={left:0,top:"auto",bottom:o};break;default:n={right:0,top:"auto",bottom:o};break}return n}function Me(e){return{motionName:`${e}-fade`}}var He=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const W=24,Re=4.5,Be="topRight",ze=e=>{let{children:t,prefixCls:o}=e;const[,n]=Q(o);return c.createElement(_e,{classNames:{list:n,notice:n}},t)},Ge=(e,t)=>{let{prefixCls:o,key:n}=t;return c.createElement(ze,{prefixCls:o,key:n},e)},De=c.forwardRef((e,t)=>{const{top:o,bottom:n,prefixCls:i,getContainer:l,maxCount:d,rtl:a,onAllRemoved:s}=e,{getPrefixCls:m,getPopupContainer:g,notification:f}=c.useContext(q),u=i||m("notification"),b=j=>Le(j,o??W,n??W),x=()=>S({[`${u}-rtl`]:a}),_=()=>Me(u),[y,v]=$e({prefixCls:u,style:b,className:x,motion:_,closable:!0,closeIcon:z(u),duration:Re,getContainer:()=>(l==null?void 0:l())||(g==null?void 0:g())||document.body,maxCount:d,onAllRemoved:s,renderNotifications:Ge});return c.useImperativeHandle(t,()=>Object.assign(Object.assign({},y),{prefixCls:u,notification:f})),v});function Y(e){const t=c.useRef(null);return ce(),[c.useMemo(()=>{const n=a=>{var s;if(!t.current)return;const{open:m,prefixCls:g,notification:f}=t.current,u=`${g}-notice`,{message:b,description:x,icon:_,type:y,btn:v,className:j,style:O,role:I="alert",closeIcon:L}=a,p=He(a,["message","description","icon","type","btn","className","style","role","closeIcon"]),w=z(u,L);return m(Object.assign(Object.assign({placement:(s=e==null?void 0:e.placement)!==null&&s!==void 0?s:Be},p),{content:c.createElement(V,{prefixCls:u,icon:_,type:y,message:b,description:x,btn:v,role:I}),className:S(y&&`${u}-${y}`,j,f==null?void 0:f.className),style:Object.assign(Object.assign({},f==null?void 0:f.style),O),closeIcon:w,closable:!!w}))},l={open:n,destroy:a=>{var s,m;a!==void 0?(s=t.current)===null||s===void 0||s.close(a):(m=t.current)===null||m===void 0||m.destroy()}};return["success","info","warning","error"].forEach(a=>{l[a]=s=>n(Object.assign(Object.assign({},s),{type:a}))}),l},[]),c.createElement(De,Object.assign({key:"notification-holder"},e,{ref:t}))]}function Ae(e){return Y(e)}let h=null,E=e=>e(),F=[],T={};function X(){const{prefixCls:e,getContainer:t,rtl:o,maxCount:n,top:i,bottom:l}=T,d=e??K().getPrefixCls("notification"),a=(t==null?void 0:t())||document.body;return{prefixCls:d,getContainer:()=>a,rtl:o,maxCount:n,top:i,bottom:l}}const ke=c.forwardRef((e,t)=>{const[o,n]=c.useState(X),[i,l]=Y(o),d=K(),a=d.getRootPrefixCls(),s=d.getIconPrefixCls(),m=d.getTheme(),g=()=>{n(X)};return c.useEffect(g,[]),c.useImperativeHandle(t,()=>{const f=Object.assign({},i);return Object.keys(f).forEach(u=>{f[u]=function(){return g(),i[u].apply(i,arguments)}}),{instance:f,sync:g}}),c.createElement(de,{prefixCls:a,iconPrefixCls:s,theme:m},l)});function G(){if(!h){const e=document.createDocumentFragment(),t={fragment:e};h=t,E(()=>{le(c.createElement(ke,{ref:o=>{const{instance:n,sync:i}=o||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=i,G())})}}),e)});return}h.instance&&(F.forEach(e=>{switch(e.type){case"open":{E(()=>{h.instance.open(Object.assign(Object.assign({},T),e.config))});break}case"destroy":E(()=>{h==null||h.instance.destroy(e.key)});break}}),F=[])}function Ue(e){T=Object.assign(Object.assign({},T),e),E(()=>{var t;(t=h==null?void 0:h.sync)===null||t===void 0||t.call(h)})}function J(e){F.push({type:"open",config:e}),G()}function We(e){F.push({type:"destroy",key:e}),G()}const Xe=["success","info","warning","error"],qe={open:J,destroy:We,config:Ue,useNotification:Ae,_InternalPanelDoNotUseOrYouWillBeFired:Te},Z=qe;Xe.forEach(e=>{Z[e]=t=>J(Object.assign(Object.assign({},t),{type:e}))});const B=Z,Ke=({config:e})=>ve({onMutate:()=>{},onError:()=>{},onSuccess:()=>{},...e,mutationFn:me}),Qe="_container_ho3h6_1",Ve="_wrapper_ho3h6_6",Ye="_content_ho3h6_16",Je="_content-form_ho3h6_19",Ze="_btn-submit_ho3h6_29",et="_wrapper-option_ho3h6_69",tt="_btn-amber_ho3h6_72",C={container:Qe,wrapper:Ve,content:Ye,"content-form":"_content-form_ho3h6_19",contentForm:Je,"btn-submit":"_btn-submit_ho3h6_29",btnSubmit:Ze,"wrapper-option":"_wrapper-option_ho3h6_69",wrapperOption:et,"btn-amber":"_btn-amber_ho3h6_72",btnAmber:tt};function dt(){const[e]=P.useForm(),{t}=ue(),o=pe(),n=je(t),i=Ke({config:{onSuccess:a=>{var s,m;if(!a||a!=null&&a.message)return B.error({message:((m=(s=a.response)==null?void 0:s.data)==null?void 0:m.message)||t("messages.login_failure")}),o("/login");ge.setToken(a.token),he.setStorage(be,JSON.stringify(a)),B.success({message:t("messages.login_success")}),window.open("/","_parent")},onError:a=>{var s,m;B.error({message:((m=(s=a.response)==null?void 0:s.data)==null?void 0:m.message)||t("messages.login_failure")})}}}),l=()=>{e.validateFields().then(a=>{i.mutate(a)})},d=()=>r.jsx("div",{className:C.container,children:r.jsxs("div",{className:C.wrapper,children:[r.jsx(M.Title,{level:3,children:"Đăng nhập"}),r.jsx(A,{}),r.jsxs(P,{form:e,className:C.content,children:[r.jsxs(H,{gutter:27,children:[r.jsx($,{span:16,children:r.jsxs("div",{className:C.contentForm,children:[r.jsx(P.Item,{name:"username",label:"Tài khoản",rules:[...k.required],children:r.jsx(U,{placeholder:t("user.username")||""})}),r.jsx(P.Item,{name:"password",label:t("user.password"),rules:[...k.required],children:r.jsx(U.Password,{placeholder:t("user.username")||""})}),r.jsxs(Ne,{defaultChecked:!0,style:{userSelect:"none"},children:["Lưu tài khoản"," "]})]})}),r.jsx($,{span:8,children:r.jsx("div",{className:C.btnSubmit,children:r.jsx(R,{type:"text",htmlType:"submit",size:"large",onClick:l,loading:i.isLoading,children:t("user.login")})})})]}),r.jsx(A,{}),r.jsxs("div",{className:C.wrapperOption,children:[r.jsxs(H,{gutter:27,style:{alignItems:"center",marginBottom:12},children:[r.jsx($,{span:16,children:r.jsx("div",{children:r.jsx(M.Text,{children:"Quên Tài khoản/Mật khẩu?"})})}),r.jsx($,{span:8,children:r.jsx("div",{children:r.jsx(R,{className:C.btnAmber,type:"text",children:"Tìm tài khoản/mật khẩu"})})})]}),r.jsxs(H,{gutter:27,style:{alignItems:"center"},children:[r.jsx($,{span:16,children:r.jsx("div",{children:r.jsx(M.Text,{style:{whiteSpace:"nowrap"},children:"Nếu bạn chưa có tài khoản, vui lòng đăng ký làm thành viên"})})}),r.jsx($,{span:8,children:r.jsx(xe,{to:ye,children:r.jsx(R,{type:"text",children:"Đăng ký tài khoản"})})})]})]})]})]})});return r.jsx(fe,{children:d(),items:n})}export{dt as default};
