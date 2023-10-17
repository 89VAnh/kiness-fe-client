import{R as f,r,C as Y,c as G,a as ve,b as q,g as be,m as Ce,d as Ee,e as je,_ as ne,f as we,h as ie,i as ae,S as Pe,u as Ne,k as ze,j as s,T as O,D as Oe}from"./index-9b9f9762.js";import{S as Ie}from"./Sidebar-4a2b2b80.js";import{r as Be}from"./render-7ea5242e.js";import{I as Te}from"./index-35f46482.js";import{e as Me,P as _e}from"./Pagination-6393cadc.js";import{D as Le}from"./index-d52de4f1.js";const Q=f.createContext({});Q.Consumer;var re=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(t);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(n[i[a]]=t[i[a]]);return n};const He=t=>{var{prefixCls:e,className:n,avatar:i,title:a,description:l}=t,h=re(t,["prefixCls","className","avatar","title","description"]);const{getPrefixCls:$}=r.useContext(Y),m=$("list",e),y=G(`${m}-item-meta`,n),v=f.createElement("div",{className:`${m}-item-meta-content`},a&&f.createElement("h4",{className:`${m}-item-meta-title`},a),l&&f.createElement("div",{className:`${m}-item-meta-description`},l));return f.createElement("div",Object.assign({},h,{className:y}),i&&f.createElement("div",{className:`${m}-item-meta-avatar`},i),(a||l)&&v)},Ge=(t,e)=>{var{prefixCls:n,children:i,actions:a,extra:l,className:h,colStyle:$}=t,m=re(t,["prefixCls","children","actions","extra","className","colStyle"]);const{grid:y,itemLayout:v}=r.useContext(Q),{getPrefixCls:w}=r.useContext(Y),c=()=>{let x;return r.Children.forEach(i,C=>{typeof C=="string"&&(x=!0)}),x&&r.Children.count(i)>1},E=()=>v==="vertical"?!!l:!c(),g=w("list",n),b=a&&a.length>0&&f.createElement("ul",{className:`${g}-item-action`,key:"actions"},a.map((x,C)=>f.createElement("li",{key:`${g}-item-action-${C}`},x,C!==a.length-1&&f.createElement("em",{className:`${g}-item-action-split`})))),j=y?"div":"li",P=f.createElement(j,Object.assign({},m,y?{}:{ref:e},{className:G(`${g}-item`,{[`${g}-item-no-flex`]:!E()},h)}),v==="vertical"&&l?[f.createElement("div",{className:`${g}-item-main`,key:"content"},i,b),f.createElement("div",{className:`${g}-item-extra`,key:"extra"},l)]:[i,b,ve(l,{key:"extra"})]);return y?f.createElement(q,{ref:e,flex:1,style:$},P):P},oe=r.forwardRef(Ge);oe.Meta=He;const We=oe,Ae=t=>{const{listBorderedCls:e,componentCls:n,paddingLG:i,margin:a,itemPaddingSM:l,itemPaddingLG:h,marginLG:$,borderRadiusLG:m}=t;return{[`${e}`]:{border:`${t.lineWidth}px ${t.lineType} ${t.colorBorder}`,borderRadius:m,[`${n}-header,${n}-footer,${n}-item`]:{paddingInline:i},[`${n}-pagination`]:{margin:`${a}px ${$}px`}},[`${e}${n}-sm`]:{[`${n}-item,${n}-header,${n}-footer`]:{padding:l}},[`${e}${n}-lg`]:{[`${n}-item,${n}-header,${n}-footer`]:{padding:h}}}},Re=t=>{const{componentCls:e,screenSM:n,screenMD:i,marginLG:a,marginSM:l,margin:h}=t;return{[`@media screen and (max-width:${i})`]:{[`${e}`]:{[`${e}-item`]:{[`${e}-item-action`]:{marginInlineStart:a}}},[`${e}-vertical`]:{[`${e}-item`]:{[`${e}-item-extra`]:{marginInlineStart:a}}}},[`@media screen and (max-width: ${n})`]:{[`${e}`]:{[`${e}-item`]:{flexWrap:"wrap",[`${e}-action`]:{marginInlineStart:l}}},[`${e}-vertical`]:{[`${e}-item`]:{flexWrap:"wrap-reverse",[`${e}-item-main`]:{minWidth:t.contentWidth},[`${e}-item-extra`]:{margin:`auto auto ${h}px`}}}}}},ke=t=>{const{componentCls:e,antCls:n,controlHeight:i,minHeight:a,paddingSM:l,marginLG:h,padding:$,itemPadding:m,colorPrimary:y,itemPaddingSM:v,itemPaddingLG:w,paddingXS:c,margin:E,colorText:g,colorTextDescription:b,motionDurationSlow:j,lineWidth:P,headerBg:x,footerBg:C,emptyTextPadding:I,metaMarginBottom:W,avatarMarginRight:B,titleMarginBottom:A,descriptionFontSize:R}=t,T={};return["start","center","end"].forEach(M=>{T[`&-align-${M}`]={textAlign:M}}),{[`${e}`]:Object.assign(Object.assign({},Ee(t)),{position:"relative","*":{outline:"none"},[`${e}-header`]:{background:x},[`${e}-footer`]:{background:C},[`${e}-header, ${e}-footer`]:{paddingBlock:l},[`${e}-pagination`]:Object.assign(Object.assign({marginBlockStart:h},T),{[`${n}-pagination-options`]:{textAlign:"start"}}),[`${e}-spin`]:{minHeight:a,textAlign:"center"},[`${e}-items`]:{margin:0,padding:0,listStyle:"none"},[`${e}-item`]:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:m,color:g,[`${e}-item-meta`]:{display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%",[`${e}-item-meta-avatar`]:{marginInlineEnd:B},[`${e}-item-meta-content`]:{flex:"1 0",width:0,color:g},[`${e}-item-meta-title`]:{margin:`0 0 ${t.marginXXS}px 0`,color:g,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":{color:g,transition:`all ${j}`,"&:hover":{color:y}}},[`${e}-item-meta-description`]:{color:b,fontSize:R,lineHeight:t.lineHeight}},[`${e}-item-action`]:{flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none","& > li":{position:"relative",display:"inline-block",padding:`0 ${c}px`,color:b,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center","&:first-child":{paddingInlineStart:0}},[`${e}-item-action-split`]:{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:P,height:Math.ceil(t.fontSize*t.lineHeight)-t.marginXXS*2,transform:"translateY(-50%)",backgroundColor:t.colorSplit}}},[`${e}-empty`]:{padding:`${$}px 0`,color:b,fontSize:t.fontSizeSM,textAlign:"center"},[`${e}-empty-text`]:{padding:I,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"},[`${e}-item-no-flex`]:{display:"block"}}),[`${e}-grid ${n}-col > ${e}-item`]:{display:"block",maxWidth:"100%",marginBlockEnd:E,paddingBlock:0,borderBlockEnd:"none"},[`${e}-vertical ${e}-item`]:{alignItems:"initial",[`${e}-item-main`]:{display:"block",flex:1},[`${e}-item-extra`]:{marginInlineStart:h},[`${e}-item-meta`]:{marginBlockEnd:W,[`${e}-item-meta-title`]:{marginBlockStart:0,marginBlockEnd:A,color:g,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG}},[`${e}-item-action`]:{marginBlockStart:$,marginInlineStart:"auto","> li":{padding:`0 ${$}px`,"&:first-child":{paddingInlineStart:0}}}},[`${e}-split ${e}-item`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,"&:last-child":{borderBlockEnd:"none"}},[`${e}-split ${e}-header`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-split${e}-empty ${e}-footer`]:{borderTop:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-loading ${e}-spin-nested-loading`]:{minHeight:i},[`${e}-split${e}-something-after-last-item ${n}-spin-container > ${e}-items > ${e}-item:last-child`]:{borderBlockEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-lg ${e}-item`]:{padding:w},[`${e}-sm ${e}-item`]:{padding:v},[`${e}:not(${e}-vertical)`]:{[`${e}-item-no-flex`]:{[`${e}-item-action`]:{float:"right"}}}}},De=be("List",t=>{const e=Ce(t,{listBorderedCls:`${t.componentCls}-bordered`,minHeight:t.controlHeightLG});return[ke(e),Ae(e),Re(e)]},t=>({contentWidth:220,itemPadding:`${t.paddingContentVertical}px 0`,itemPaddingSM:`${t.paddingContentVerticalSM}px ${t.paddingContentHorizontal}px`,itemPaddingLG:`${t.paddingContentVerticalLG}px ${t.paddingContentHorizontalLG}px`,headerBg:"transparent",footerBg:"transparent",emptyTextPadding:t.padding,metaMarginBottom:t.padding,avatarMarginRight:t.padding,titleMarginBottom:t.paddingSM,descriptionFontSize:t.fontSize}));var Ke=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(t);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(n[i[a]]=t[i[a]]);return n};function J(t){var e,{pagination:n=!1,prefixCls:i,bordered:a=!1,split:l=!0,className:h,rootClassName:$,style:m,children:y,itemLayout:v,loadMore:w,grid:c,dataSource:E=[],size:g,header:b,footer:j,loading:P=!1,rowKey:x,renderItem:C,locale:I}=t,W=Ke(t,["pagination","prefixCls","bordered","split","className","rootClassName","style","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]);const B=n&&typeof n=="object"?n:{},[A,R]=r.useState(B.defaultCurrent||1),[T,M]=r.useState(B.defaultPageSize||10),{getPrefixCls:le,renderEmpty:k,direction:se,list:N}=r.useContext(Y),ce={current:1,total:0},U=o=>(p,S)=>{var V;R(p),M(S),n&&n[o]&&((V=n==null?void 0:n[o])===null||V===void 0||V.call(n,p,S))},de=U("onChange"),me=U("onShowSizeChange"),ge=(o,p)=>{if(!C)return null;let S;return typeof x=="function"?S=x(o):x?S=o[x]:S=o.key,S||(S=`list-item-${p}`),r.createElement(r.Fragment,{key:S},C(o,p))},pe=()=>!!(w||n||j),d=le("list",i),[he,$e]=De(d);let z=P;typeof z=="boolean"&&(z={spinning:z});const D=z&&z.spinning,ue=je(g);let _="";switch(ue){case"large":_="lg";break;case"small":_="sm";break}const fe=G(d,{[`${d}-vertical`]:v==="vertical",[`${d}-${_}`]:_,[`${d}-split`]:l,[`${d}-bordered`]:a,[`${d}-loading`]:D,[`${d}-grid`]:!!c,[`${d}-something-after-last-item`]:pe(),[`${d}-rtl`]:se==="rtl"},N==null?void 0:N.className,h,$,$e),u=Me(ce,{total:E.length,current:A,pageSize:T},n||{}),Z=Math.ceil(u.total/u.pageSize);u.current>Z&&(u.current=Z);const ee=n?r.createElement("div",{className:G(`${d}-pagination`,`${d}-pagination-align-${(e=u==null?void 0:u.align)!==null&&e!==void 0?e:"end"}`)},r.createElement(_e,Object.assign({},u,{onChange:de,onShowSizeChange:me}))):null;let K=ne(E);n&&E.length>(u.current-1)*u.pageSize&&(K=ne(E).splice((u.current-1)*u.pageSize,u.pageSize));const xe=Object.keys(c||{}).some(o=>["xs","sm","md","lg","xl","xxl"].includes(o)),te=we(xe),L=r.useMemo(()=>{for(let o=0;o<ie.length;o+=1){const p=ie[o];if(te[p])return p}},[te]),Se=r.useMemo(()=>{if(!c)return;const o=L&&c[L]?c[L]:c.column;if(o)return{width:`${100/o}%`,maxWidth:`${100/o}%`}},[c==null?void 0:c.column,L]);let X=D&&r.createElement("div",{style:{minHeight:53}});if(K.length>0){const o=K.map((p,S)=>ge(p,S));X=c?r.createElement(ae,{gutter:c.gutter},r.Children.map(o,p=>r.createElement("div",{key:p==null?void 0:p.key,style:Se},p))):r.createElement("ul",{className:`${d}-items`},o)}else!y&&!D&&(X=r.createElement("div",{className:`${d}-empty-text`},I&&I.emptyText||(k==null?void 0:k("List"))||r.createElement(Le,{componentName:"List"})));const H=u.position||"bottom",ye=r.useMemo(()=>({grid:c,itemLayout:v}),[JSON.stringify(c),v]);return he(r.createElement(Q.Provider,{value:ye},r.createElement("div",Object.assign({style:Object.assign(Object.assign({},N==null?void 0:N.style),m),className:fe},W),(H==="top"||H==="both")&&ee,b&&r.createElement("div",{className:`${d}-header`},b),r.createElement(Pe,Object.assign({},z),X,y),j&&r.createElement("div",{className:`${d}-footer`},j),w||(H==="bottom"||H==="both")&&ee)))}J.Item=We;const Xe="_container_6sk2g_1",Ve="_thumb-news_6sk2g_5",Fe="_content-news_6sk2g_34",F={container:Xe,"thumb-news":"_thumb-news_6sk2g_5",thumbNews:Ve,"content-news":"_content-news_6sk2g_34",contentNews:Fe};function et(){const{t}=Ne(),[e,n]=ze(),i=Be(t),a=e.get("k")||"",l=$=>{e.set("k",$),n(e)},h=()=>s.jsxs("div",{className:F.container,children:[s.jsxs(ae,{style:{width:"100%",justifyContent:"space-between"},children:[s.jsx(q,{children:s.jsx(O.Title,{style:{margin:0},level:2,children:"Tin tức Kiness"})}),s.jsx(q,{span:12,md:16,children:s.jsx(Te.Search,{defaultValue:a,allowClear:!0,onSearch:l,placeholder:"Tìm kiếm"})})]}),s.jsx(Oe,{}),s.jsx(J,{children:[...Array(7)].map(($,m)=>s.jsxs(J.Item,{children:[s.jsx("div",{className:F.thumbNews,children:s.jsx(O.Title,{level:1,children:"NEW"})}),s.jsxs("div",{className:F.contentNews,children:[s.jsxs("div",{children:[s.jsx(O.Title,{level:5,children:"Key Growth Clinic Kines , tổ chức sự kiện đăng ký vào ngày tháng 6"}),s.jsx(O.Text,{children:"Phòng khám Kinesis Key Growth Kines, nơi quản lý sự tăng trưởng, tư thế đúng, béo phì và trưởng thành nhanh chóng, đã thông báo vào ngày 9 rằng họ sẽ tổ chức một sự kiện đăng ký vào cùng ngày của tháng Sáu . Kines tiến hành 10 bài kiểm tra độ chính xác về tăng trưởng khoa học. Nguyên nhân thấp lùn và các giai đoạn sinh trưởng..."})]}),s.jsx("div",{style:{textAlign:"right"},children:s.jsx(O.Text,{children:"09/06/2023"})})]})]},m))})]});return s.jsx(Ie,{children:h(),items:i})}export{et as default};
