import{r as n,aq as It,ad as ie,h as j,ag as W,a5 as xe,ax as zt,a3 as F,a8 as R,bb as Lt,a2 as Be,bc as Nt,bd as Mt,be as Ot,ay as Q,bf as Je,a7 as Bt,_ as Qe,ah as Oe,bg as kt,bh as At,aJ as Ze,n as Dt,a4 as Ht,bi as et,H as Gt,I as Wt,J as dt,aL as jt,aU as ut,e as Kt,K as Xt,bj as Vt,C as Ft}from"./index-6b48638c.js";var Ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const qt=Ut;var Yt=function(t,a){return n.createElement(It,ie({},t,{ref:a,icon:qt}))};const Jt=n.forwardRef(Yt),Ce=n.createContext(null);var vt=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.className,i=e.style,o=e.id,l=e.active,c=e.tabKey,s=e.children;return n.createElement("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!l,style:i,className:j(a,l&&"".concat(a,"-active"),r),ref:t},s)}),Qt=["key","forceRender","style","className"];function Zt(e){var t=e.id,a=e.activeKey,r=e.animated,i=e.tabPosition,o=e.destroyInactiveTabPane,l=n.useContext(Ce),c=l.prefixCls,s=l.tabs,d=r.tabPane,$="".concat(c,"-tabpane");return n.createElement("div",{className:j("".concat(c,"-content-holder"))},n.createElement("div",{className:j("".concat(c,"-content"),"".concat(c,"-content-").concat(i),W({},"".concat(c,"-content-animated"),d))},s.map(function(u){var h=u.key,f=u.forceRender,b=u.style,E=u.className,B=xe(u,Qt),_=h===a;return n.createElement(zt,ie({key:h,visible:_,forceRender:f,removeOnLeave:!!o,leavedClassName:"".concat($,"-hidden")},r.tabPaneMotion),function(I,S){var D=I.style,k=I.className;return n.createElement(vt,ie({},B,{prefixCls:$,id:t,tabKey:h,animated:d,active:_,style:F(F({},b),D),className:j(E,k),ref:S}))})})))}var tt={width:0,height:0,left:0,top:0};function ea(e,t,a){return n.useMemo(function(){for(var r,i=new Map,o=t.get((r=e[0])===null||r===void 0?void 0:r.key)||tt,l=o.left+o.width,c=0;c<e.length;c+=1){var s=e[c].key,d=t.get(s);if(!d){var $;d=t.get(($=e[c-1])===null||$===void 0?void 0:$.key)||tt}var u=i.get(s)||F({},d);u.right=l-u.left-u.width,i.set(s,u)}return i},[e.map(function(r){return r.key}).join("_"),t,a])}function at(e,t){var a=n.useRef(e),r=n.useState({}),i=R(r,2),o=i[1];function l(c){var s=typeof c=="function"?c(a.current):c;s!==a.current&&t(s,a.current),a.current=s,o({})}return[a.current,l]}var ta=.1,nt=.01,ye=20,rt=Math.pow(.995,ye);function aa(e,t){var a=n.useState(),r=R(a,2),i=r[0],o=r[1],l=n.useState(0),c=R(l,2),s=c[0],d=c[1],$=n.useState(0),u=R($,2),h=u[0],f=u[1],b=n.useState(),E=R(b,2),B=E[0],_=E[1],I=n.useRef();function S(g){var C=g.touches[0],T=C.screenX,v=C.screenY;o({x:T,y:v}),window.clearInterval(I.current)}function D(g){if(i){g.preventDefault();var C=g.touches[0],T=C.screenX,v=C.screenY;o({x:T,y:v});var x=T-i.x,w=v-i.y;t(x,w);var L=Date.now();d(L),f(L-s),_({x,y:w})}}function k(){if(i&&(o(null),_(null),B)){var g=B.x/h,C=B.y/h,T=Math.abs(g),v=Math.abs(C);if(Math.max(T,v)<ta)return;var x=g,w=C;I.current=window.setInterval(function(){if(Math.abs(x)<nt&&Math.abs(w)<nt){window.clearInterval(I.current);return}x*=rt,w*=rt,t(x*ye,w*ye)},ye)}}var m=n.useRef();function z(g){var C=g.deltaX,T=g.deltaY,v=0,x=Math.abs(C),w=Math.abs(T);x===w?v=m.current==="x"?C:T:x>w?(v=C,m.current="x"):(v=T,m.current="y"),t(-v,-v)&&g.preventDefault()}var M=n.useRef(null);M.current={onTouchStart:S,onTouchMove:D,onTouchEnd:k,onWheel:z},n.useEffect(function(){function g(x){M.current.onTouchStart(x)}function C(x){M.current.onTouchMove(x)}function T(x){M.current.onTouchEnd(x)}function v(x){M.current.onWheel(x)}return document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",T,{passive:!1}),e.current.addEventListener("touchstart",g,{passive:!1}),e.current.addEventListener("wheel",v),function(){document.removeEventListener("touchmove",C),document.removeEventListener("touchend",T)}},[])}function ft(e){var t=n.useState(0),a=R(t,2),r=a[0],i=a[1],o=n.useRef(0),l=n.useRef();return l.current=e,Lt(function(){var c;(c=l.current)===null||c===void 0||c.call(l)},[r]),function(){o.current===r&&(o.current+=1,i(o.current))}}function na(e){var t=n.useRef([]),a=n.useState({}),r=R(a,2),i=r[1],o=n.useRef(typeof e=="function"?e():e),l=ft(function(){var s=o.current;t.current.forEach(function(d){s=d(s)}),t.current=[],o.current=s,i({})});function c(s){t.current.push(s),l()}return[o.current,c]}var it={width:0,height:0,left:0,top:0,right:0};function ra(e,t,a,r,i,o,l){var c=l.tabs,s=l.tabPosition,d=l.rtl,$,u,h;return["top","bottom"].includes(s)?($="width",u=d?"right":"left",h=Math.abs(a)):($="height",u="top",h=-a),n.useMemo(function(){if(!c.length)return[0,0];for(var f=c.length,b=f,E=0;E<f;E+=1){var B=e.get(c[E].key)||it;if(B[u]+B[$]>h+t){b=E-1;break}}for(var _=0,I=f-1;I>=0;I-=1){var S=e.get(c[I].key)||it;if(S[u]<h){_=I+1;break}}return _>=b?[0,0]:[_,b]},[e,t,r,i,o,h,s,c.map(function(f){return f.key}).join("_"),d])}function ot(e){var t;return e instanceof Map?(t={},e.forEach(function(a,r){t[r]=a})):t=e,JSON.stringify(t)}var ia="TABS_DQ";function pt(e){return String(e).replace(/"/g,ia)}function bt(e,t,a,r){return!(!a||r||e===!1||e===void 0&&(t===!1||t===null))}function oa(e,t){var a=e.prefixCls,r=e.editable,i=e.locale,o=e.style;return!r||r.showAdd===!1?null:n.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:o,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(c){r.onEdit("add",{event:c})}},r.addIcon||"+")}const mt=n.forwardRef(oa);var lt=n.forwardRef(function(e,t){var a=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var o,l={};return Be(i)==="object"&&!n.isValidElement(i)?l=i:l.right=i,a==="right"&&(o=l.right),a==="left"&&(o=l.left),o?n.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},o):null});function la(e,t){var a=e.prefixCls,r=e.id,i=e.tabs,o=e.locale,l=e.mobile,c=e.moreIcon,s=c===void 0?"More":c,d=e.moreTransitionName,$=e.style,u=e.className,h=e.editable,f=e.tabBarGutter,b=e.rtl,E=e.removeAriaLabel,B=e.onTabClick,_=e.getPopupContainer,I=e.popupClassName,S=n.useState(!1),D=R(S,2),k=D[0],m=D[1],z=n.useState(null),M=R(z,2),g=M[0],C=M[1],T="".concat(r,"-more-popup"),v="".concat(a,"-dropdown"),x=g!==null?"".concat(T,"-").concat(g):null,w=o==null?void 0:o.dropdownAriaLabel;function L(y,O){y.preventDefault(),y.stopPropagation(),h.onEdit("remove",{key:O,event:y})}var U=n.createElement(Nt,{onClick:function(O){var K=O.key,V=O.domEvent;B(K,V),m(!1)},prefixCls:"".concat(v,"-menu"),id:T,tabIndex:-1,role:"listbox","aria-activedescendant":x,selectedKeys:[g],"aria-label":w!==void 0?w:"expanded dropdown"},i.map(function(y){var O=y.closable,K=y.disabled,V=y.closeIcon,X=y.key,q=y.label,ee=bt(O,V,h,K);return n.createElement(Mt,{key:X,id:"".concat(T,"-").concat(X),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(X),disabled:K},n.createElement("span",null,q),ee&&n.createElement("button",{type:"button","aria-label":E||"remove",tabIndex:0,className:"".concat(v,"-menu-item-remove"),onClick:function(ae){ae.stopPropagation(),L(ae,X)}},V||h.removeIcon||"×"))}));function te(y){for(var O=i.filter(function(ee){return!ee.disabled}),K=O.findIndex(function(ee){return ee.key===g})||0,V=O.length,X=0;X<V;X+=1){K=(K+y+V)%V;var q=O[K];if(!q.disabled){C(q.key);return}}}function Z(y){var O=y.which;if(!k){[Q.DOWN,Q.SPACE,Q.ENTER].includes(O)&&(m(!0),y.preventDefault());return}switch(O){case Q.UP:te(-1),y.preventDefault();break;case Q.DOWN:te(1),y.preventDefault();break;case Q.ESC:m(!1);break;case Q.SPACE:case Q.ENTER:g!==null&&B(g,y);break}}n.useEffect(function(){var y=document.getElementById(x);y&&y.scrollIntoView&&y.scrollIntoView(!1)},[g]),n.useEffect(function(){k||C(null)},[k]);var G=W({},b?"marginRight":"marginLeft",f);i.length||(G.visibility="hidden",G.order=1);var oe=j(W({},"".concat(v,"-rtl"),b)),ue=l?null:n.createElement(Ot,{prefixCls:v,overlay:U,trigger:["hover"],visible:i.length?k:!1,transitionName:d,onVisibleChange:m,overlayClassName:j(oe,I),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:_},n.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:G,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(r,"-more"),"aria-expanded":k,onKeyDown:Z},s));return n.createElement("div",{className:j("".concat(a,"-nav-operations"),u),style:$,ref:t},ue,n.createElement(mt,{prefixCls:a,locale:o,editable:h}))}const ca=n.memo(n.forwardRef(la),function(e,t){return t.tabMoving});function sa(e){var t,a=e.prefixCls,r=e.id,i=e.active,o=e.tab,l=o.key,c=o.label,s=o.disabled,d=o.closeIcon,$=e.closable,u=e.renderWrapper,h=e.removeAriaLabel,f=e.editable,b=e.onClick,E=e.onFocus,B=e.style,_="".concat(a,"-tab"),I=bt($,d,f,s);function S(m){s||b(m)}function D(m){m.preventDefault(),m.stopPropagation(),f.onEdit("remove",{key:l,event:m})}var k=n.createElement("div",{key:l,"data-node-key":pt(l),className:j(_,(t={},W(t,"".concat(_,"-with-remove"),I),W(t,"".concat(_,"-active"),i),W(t,"".concat(_,"-disabled"),s),t)),style:B,onClick:S},n.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(l),className:"".concat(_,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(l),"aria-disabled":s,tabIndex:s?null:0,onClick:function(z){z.stopPropagation(),S(z)},onKeyDown:function(z){[Q.SPACE,Q.ENTER].includes(z.which)&&(z.preventDefault(),S(z))},onFocus:E},c),I&&n.createElement("button",{type:"button","aria-label":h||"remove",tabIndex:0,className:"".concat(_,"-remove"),onClick:function(z){z.stopPropagation(),D(z)}},d||f.removeIcon||"×"));return u?u(k):k}var da=function(t){var a=t.activeTabOffset,r=t.horizontal,i=t.rtl,o=t.indicatorSize,l=n.useState(),c=R(l,2),s=c[0],d=c[1],$=n.useRef(),u=function(b){return typeof o=="function"?o(b):typeof o=="number"?o:b};function h(){Je.cancel($.current)}return n.useEffect(function(){var f={};return a&&(r?(i?(f.right=a.right+a.width/2,f.transform="translateX(50%)"):(f.left=a.left+a.width/2,f.transform="translateX(-50%)"),f.width=u(a.width)):(f.top=a.top+a.height/2,f.transform="translateY(-50%)",f.height=u(a.height))),h(),$.current=Je(function(){d(f)}),h},[a,r,i,o]),{style:s}},de=function(t){var a=t.current||{},r=a.offsetWidth,i=r===void 0?0:r,o=a.offsetHeight,l=o===void 0?0:o;return[i,l]},Se=function(t,a){return t[a?0:1]};function ua(e,t){var a,r=n.useContext(Ce),i=r.prefixCls,o=r.tabs,l=e.className,c=e.style,s=e.id,d=e.animated,$=e.activeKey,u=e.rtl,h=e.extra,f=e.editable,b=e.locale,E=e.tabPosition,B=e.tabBarGutter,_=e.children,I=e.onTabClick,S=e.onTabScroll,D=e.indicatorSize,k=n.useRef(),m=n.useRef(),z=n.useRef(),M=n.useRef(),g=n.useRef(),C=n.useRef(),T=n.useRef(),v=E==="top"||E==="bottom",x=at(0,function(N,p){v&&S&&S({direction:N>p?"left":"right"})}),w=R(x,2),L=w[0],U=w[1],te=at(0,function(N,p){!v&&S&&S({direction:N>p?"top":"bottom"})}),Z=R(te,2),G=Z[0],oe=Z[1],ue=n.useState([0,0]),y=R(ue,2),O=y[0],K=y[1],V=n.useState([0,0]),X=R(V,2),q=X[0],ee=X[1],be=n.useState([0,0]),ae=R(be,2),Te=ae[0],we=ae[1],_e=n.useState([0,0]),ve=R(_e,2),Ee=ve[0],P=ve[1],le=na(new Map),se=R(le,2),ht=se[0],$t=se[1],me=ea(o,ht,q[0]),Pe=Se(O,v),fe=Se(q,v),Re=Se(Te,v),ke=Se(Ee,v),Ae=Pe<fe+Re,Y=Ae?Pe-ke:Pe-Re,St="".concat(i,"-nav-operations-hidden"),ne=0,ce=0;v&&u?(ne=0,ce=Math.max(0,fe-Y)):(ne=Math.min(0,Y-fe),ce=0);function Ie(N){return N<ne?ne:N>ce?ce:N}var De=n.useRef(),yt=n.useState(),He=R(yt,2),ge=He[0],Ge=He[1];function ze(){Ge(Date.now())}function Le(){window.clearTimeout(De.current)}aa(M,function(N,p){function A(H,re){H(function(J){var Rt=Ie(J+re);return Rt})}return Ae?(v?A(U,N):A(oe,p),Le(),ze(),!0):!1}),n.useEffect(function(){return Le(),ge&&(De.current=window.setTimeout(function(){Ge(0)},100)),Le},[ge]);var xt=ra(me,Y,v?L:G,fe,Re,ke,F(F({},e),{},{tabs:o})),We=R(xt,2),Ct=We[0],Tt=We[1],je=Bt(function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,p=me.get(N)||{width:0,height:0,left:0,right:0,top:0};if(v){var A=L;u?p.right<L?A=p.right:p.right+p.width>L+Y&&(A=p.right+p.width-Y):p.left<-L?A=-p.left:p.left+p.width>-L+Y&&(A=-(p.left+p.width-Y)),oe(0),U(Ie(A))}else{var H=G;p.top<-G?H=-p.top:p.top+p.height>-G+Y&&(H=-(p.top+p.height-Y)),U(0),oe(Ie(H))}}),he={};E==="top"||E==="bottom"?he[u?"marginRight":"marginLeft"]=B:he.marginTop=B;var Ke=o.map(function(N,p){var A=N.key;return n.createElement(sa,{id:s,prefixCls:i,key:A,tab:N,style:p===0?void 0:he,closable:N.closable,editable:f,active:A===$,renderWrapper:_,removeAriaLabel:b==null?void 0:b.removeAriaLabel,onClick:function(re){I(A,re)},onFocus:function(){je(A),ze(),M.current&&(u||(M.current.scrollLeft=0),M.current.scrollTop=0)}})}),Xe=function(){return $t(function(){var p=new Map;return o.forEach(function(A){var H,re=A.key,J=(H=g.current)===null||H===void 0?void 0:H.querySelector('[data-node-key="'.concat(pt(re),'"]'));J&&p.set(re,{width:J.offsetWidth,height:J.offsetHeight,left:J.offsetLeft,top:J.offsetTop})}),p})};n.useEffect(function(){Xe()},[o.map(function(N){return N.key}).join("_")]);var $e=ft(function(){var N=de(k),p=de(m),A=de(z);K([N[0]-p[0]-A[0],N[1]-p[1]-A[1]]);var H=de(T);we(H);var re=de(C);P(re);var J=de(g);ee([J[0]-H[0],J[1]-H[1]]),Xe()}),wt=o.slice(0,Ct),_t=o.slice(Tt+1),Ve=[].concat(Qe(wt),Qe(_t)),Fe=me.get($),Et=da({activeTabOffset:Fe,horizontal:v,rtl:u,indicatorSize:D}),Pt=Et.style;n.useEffect(function(){je()},[$,ne,ce,ot(Fe),ot(me),v]),n.useEffect(function(){$e()},[u]);var Ue=!!Ve.length,pe="".concat(i,"-nav-wrap"),Ne,Me,qe,Ye;return v?u?(Me=L>0,Ne=L!==ce):(Ne=L<0,Me=L!==ne):(qe=G<0,Ye=G!==ne),n.createElement(Oe,{onResize:$e},n.createElement("div",{ref:kt(t,k),role:"tablist",className:j("".concat(i,"-nav"),l),style:c,onKeyDown:function(){ze()}},n.createElement(lt,{ref:m,position:"left",extra:h,prefixCls:i}),n.createElement(Oe,{onResize:$e},n.createElement("div",{className:j(pe,(a={},W(a,"".concat(pe,"-ping-left"),Ne),W(a,"".concat(pe,"-ping-right"),Me),W(a,"".concat(pe,"-ping-top"),qe),W(a,"".concat(pe,"-ping-bottom"),Ye),a)),ref:M},n.createElement(Oe,{onResize:$e},n.createElement("div",{ref:g,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(L,"px, ").concat(G,"px)"),transition:ge?"none":void 0}},Ke,n.createElement(mt,{ref:T,prefixCls:i,locale:b,editable:f,style:F(F({},Ke.length===0?void 0:he),{},{visibility:Ue?"hidden":null})}),n.createElement("div",{className:j("".concat(i,"-ink-bar"),W({},"".concat(i,"-ink-bar-animated"),d.inkBar)),style:Pt}))))),n.createElement(ca,ie({},e,{removeAriaLabel:b==null?void 0:b.removeAriaLabel,ref:C,prefixCls:i,tabs:Ve,className:!Ue&&St,tabMoving:!!ge})),n.createElement(lt,{ref:z,position:"right",extra:h,prefixCls:i})))}const ct=n.forwardRef(ua);var va=["renderTabBar"],fa=["label","key"];function pa(e){var t=e.renderTabBar,a=xe(e,va),r=n.useContext(Ce),i=r.tabs;if(t){var o=F(F({},a),{},{panes:i.map(function(l){var c=l.label,s=l.key,d=xe(l,fa);return n.createElement(vt,ie({tab:c,key:s,tabKey:s},d))})});return t(o,ct)}return n.createElement(ct,a)}function ba(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=F({inkBar:!0},Be(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var ma=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],st=0;function ga(e,t){var a,r=e.id,i=e.prefixCls,o=i===void 0?"rc-tabs":i,l=e.className,c=e.items,s=e.direction,d=e.activeKey,$=e.defaultActiveKey,u=e.editable,h=e.animated,f=e.tabPosition,b=f===void 0?"top":f,E=e.tabBarGutter,B=e.tabBarStyle,_=e.tabBarExtraContent,I=e.locale,S=e.moreIcon,D=e.moreTransitionName,k=e.destroyInactiveTabPane,m=e.renderTabBar,z=e.onChange,M=e.onTabClick,g=e.onTabScroll,C=e.getPopupContainer,T=e.popupClassName,v=e.indicatorSize,x=xe(e,ma),w=n.useMemo(function(){return(c||[]).filter(function(P){return P&&Be(P)==="object"&&"key"in P})},[c]),L=s==="rtl",U=ba(h),te=n.useState(!1),Z=R(te,2),G=Z[0],oe=Z[1];n.useEffect(function(){oe(At())},[]);var ue=Ze(function(){var P;return(P=w[0])===null||P===void 0?void 0:P.key},{value:d,defaultValue:$}),y=R(ue,2),O=y[0],K=y[1],V=n.useState(function(){return w.findIndex(function(P){return P.key===O})}),X=R(V,2),q=X[0],ee=X[1];n.useEffect(function(){var P=w.findIndex(function(se){return se.key===O});if(P===-1){var le;P=Math.max(0,Math.min(q,w.length-1)),K((le=w[P])===null||le===void 0?void 0:le.key)}ee(P)},[w.map(function(P){return P.key}).join("_"),O,q]);var be=Ze(null,{value:r}),ae=R(be,2),Te=ae[0],we=ae[1];n.useEffect(function(){r||(we("rc-tabs-".concat(st)),st+=1)},[]);function _e(P,le){M==null||M(P,le);var se=P!==O;K(P),se&&(z==null||z(P))}var ve={id:Te,activeKey:O,animated:U,tabPosition:b,rtl:L,mobile:G},Ee=F(F({},ve),{},{editable:u,locale:I,moreIcon:S,moreTransitionName:D,tabBarGutter:E,onTabClick:_e,onTabScroll:g,extra:_,style:B,panes:null,getPopupContainer:C,popupClassName:T,indicatorSize:v});return n.createElement(Ce.Provider,{value:{tabs:w,prefixCls:o}},n.createElement("div",ie({ref:t,id:r,className:j(o,"".concat(o,"-").concat(b),(a={},W(a,"".concat(o,"-mobile"),G),W(a,"".concat(o,"-editable"),u),W(a,"".concat(o,"-rtl"),L),a),l)},x),n.createElement(pa,ie({},Ee,{renderTabBar:m})),n.createElement(Zt,ie({destroyInactiveTabPane:k},ve,{animated:U}))))}var ha=n.forwardRef(ga);const $a={motionAppear:!1,motionEnter:!0,motionLeave:!0};function Sa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},a;return t===!1?a={inkBar:!1,tabPane:!1}:t===!0?a={inkBar:!0,tabPane:!0}:a=Object.assign({inkBar:!0},typeof t=="object"?t:{}),a.tabPane&&(a.tabPaneMotion=Object.assign(Object.assign({},$a),{motionName:Dt(e,"switch")})),a}var ya=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function xa(e){return e.filter(t=>t)}function Ca(e,t){if(e)return e;const a=Ht(t).map(r=>{if(n.isValidElement(r)){const{key:i,props:o}=r,l=o||{},{tab:c}=l,s=ya(l,["tab"]);return Object.assign(Object.assign({key:String(i)},s),{label:c})}return null});return xa(a)}const Ta=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[et(e,"slide-up"),et(e,"slide-down")]]},wa=Ta,_a=e=>{const{componentCls:t,tabsCardPadding:a,cardBg:r,cardGutter:i,colorBorderSecondary:o,itemSelectedColor:l}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:r,border:`${e.lineWidth}px ${e.lineType} ${o}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:l,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${i}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${i}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Ea=e=>{const{componentCls:t,itemHoverColor:a,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},dt(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${r}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},jt),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Pa=e=>{const{componentCls:t,margin:a,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:o,verticalItemMargin:l}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:o,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:l},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Ra=e=>{const{componentCls:t,cardPaddingSM:a,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:o}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},Ia=e=>{const{componentCls:t,itemActiveColor:a,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:o,horizontalItemPadding:l,itemSelectedColor:c,itemColor:s}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:l,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:s,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:a}},ut(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${d}-active ${d}-btn`]:{color:c,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${i}`]:{margin:0},[i]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:o}}}},za=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:a,iconCls:r,cardGutter:i}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:a},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},La=e=>{const{componentCls:t,tabsCardPadding:a,cardHeight:r,cardGutter:i,itemHoverColor:o,itemActiveColor:l,colorBorderSecondary:c}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},dt(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${c}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:o},"&:active, &:focus:not(:focus-visible)":{color:l}},ut(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Ia(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Na=Gt("Tabs",e=>{const t=Wt(e,{tabsCardPadding:e.cardPadding||`${(e.cardHeight-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${e.horizontalItemGutter}px`,tabsHorizontalItemMarginRTL:`0 0 0 ${e.horizontalItemGutter}px`});return[Ra(t),za(t),Pa(t),Ea(t),_a(t),La(t),wa(t)]},e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:"",cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}),Ma=()=>null,Oa=Ma;var Ba=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};const gt=e=>{const{type:t,className:a,rootClassName:r,size:i,onEdit:o,hideAdd:l,centered:c,addIcon:s,popupClassName:d,children:$,items:u,animated:h,style:f,indicatorSize:b}=e,E=Ba(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated","style","indicatorSize"]),{prefixCls:B,moreIcon:_=n.createElement(Vt,null)}=E,{direction:I,tabs:S,getPrefixCls:D,getPopupContainer:k}=n.useContext(Kt),m=D("tabs",B),[z,M]=Na(m);let g;t==="editable-card"&&(g={onEdit:(L,U)=>{let{key:te,event:Z}=U;o==null||o(L==="add"?Z:te,L)},removeIcon:n.createElement(Ft,null),addIcon:s||n.createElement(Jt,null),showAdd:l!==!0});const C=D(),T=Ca(u,$),v=Sa(m,h),x=Xt(i),w=Object.assign(Object.assign({},S==null?void 0:S.style),f);return z(n.createElement(ha,Object.assign({direction:I,getPopupContainer:k,moreTransitionName:`${C}-slide-up`},E,{items:T,className:j({[`${m}-${x}`]:x,[`${m}-card`]:["card","editable-card"].includes(t),[`${m}-editable-card`]:t==="editable-card",[`${m}-centered`]:c},S==null?void 0:S.className,a,r,M),popupClassName:j(d,M),style:w,editable:g,moreIcon:_,prefixCls:m,animated:v,indicatorSize:b??(S==null?void 0:S.indicatorSize)})))};gt.TabPane=Oa;const Aa=gt;export{Aa as T};
