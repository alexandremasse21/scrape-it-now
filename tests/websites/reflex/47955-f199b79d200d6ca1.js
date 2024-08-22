"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47955],{36024:function(e,t,n){n.d(t,{U:function(){return f}});var i=n(17257),l=n(91836),r=n(35059),o=n(91639),s=n(33179),a=n(51337),d=n(25432),u=n(67294),c=n(85893),f=(0,r.G)(function({children:e,reduceMotion:t,...n},r){let f=(0,o.jC)("Accordion",n),h=(0,s.Lr)(n),{htmlProps:b,descendants:p,...m}=(0,i.As)(h),x=(0,u.useMemo)(()=>({...m,reduceMotion:!!t}),[m,t]);return(0,c.jsx)(l.di,{value:p,children:(0,c.jsx)(i.a2,{value:x,children:(0,c.jsx)(l.lh,{value:f,children:(0,c.jsx)(a.m.div,{ref:r,...b,className:(0,d.cx)("chakra-accordion",n.className),__css:f.root,children:e})})})})});f.displayName="Accordion"},77484:function(e,t,n){n.d(t,{K:function(){return a}});var i=n(91836),l=n(35059),r=n(51337),o=n(25432),s=n(85893),a=(0,l.G)(function(e,t){let{getButtonProps:n}=(0,i.bB)(),l=n(e,t),a=(0,i.YO)(),d={display:"flex",alignItems:"center",width:"100%",outline:0,...a.button};return(0,s.jsx)(r.m.button,{...l,className:(0,o.cx)("chakra-accordion__button",e.className),__css:d})});a.displayName="AccordionButton"},5077:function(e,t,n){n.d(t,{Q:function(){return u}});var i=n(17257),l=n(91836),r=n(35059),o=n(51337),s=n(25432),a=n(67294),d=n(85893),u=(0,r.G)(function(e,t){let{children:n,className:r}=e,{htmlProps:u,...c}=(0,i.Zl)(e),f=(0,l.YO)(),h={...f.container,overflowAnchor:"none"},b=(0,a.useMemo)(()=>c,[c]);return(0,d.jsx)(l.ec,{value:b,children:(0,d.jsx)(o.m.div,{ref:t,...u,className:(0,s.cx)("chakra-accordion__item",r),__css:h,children:"function"==typeof n?n({isExpanded:!!c.isOpen,isDisabled:!!c.isDisabled}):n})})});u.displayName="AccordionItem"},21673:function(e,t,n){n.d(t,{X:function(){return AccordionIcon}});var i=n(17257),l=n(91836),r=n(56877),o=n(25432),s=n(85893);function AccordionIcon(e){let{isOpen:t,isDisabled:n}=(0,l.bB)(),{reduceMotion:a}=(0,i.EF)(),d=(0,o.cx)("chakra-accordion__icon",e.className),u=(0,l.YO)(),c={opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:a?void 0:"transform 0.2s",transformOrigin:"center",...u.icon};return(0,s.jsx)(r.J,{viewBox:"0 0 24 24","aria-hidden":!0,className:d,__css:c,...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}AccordionIcon.displayName="AccordionIcon"},17257:function(e,t,n){n.d(t,{As:function(){return useAccordion},EF:function(){return u},Zl:function(){return useAccordionItem},a2:function(){return d}});var i=n(91836),l=n(55227),r=n(61942),o=n(81103),s=n(25432),a=n(67294);function useAccordion(e){let{onChange:t,defaultIndex:n,index:l,allowMultiple:o,allowToggle:s,...d}=e;allowMultipleWarning(e),allowMultipleAndAllowToggleWarning(e);let u=(0,i._v)(),[c,f]=(0,a.useState)(-1);(0,a.useEffect)(()=>()=>{f(-1)},[]);let[h,b]=(0,r.T)({value:l,defaultValue:()=>o?null!=n?n:[]:null!=n?n:-1,onChange:t});return{index:h,setIndex:b,htmlProps:d,getAccordionItemProps:e=>{let t=!1;return null!==e&&(t=Array.isArray(h)?h.includes(e):h===e),{isOpen:t,onChange:t=>{if(null!==e){if(o&&Array.isArray(h)){let n=t?h.concat(e):h.filter(t=>t!==e);b(n)}else t?b(e):s&&b(-1)}}}},focusedIndex:c,setFocusedIndex:f,descendants:u}}var[d,u]=(0,l.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function useAccordionItem(e){let{isDisabled:t,isFocusable:n,id:l,...r}=e,{getAccordionItemProps:d,setFocusedIndex:c}=u(),f=(0,a.useRef)(null),h=(0,a.useId)(),b=null!=l?l:h,p=`accordion-button-${b}`,m=`accordion-panel-${b}`;focusableNotDisabledWarning(e);let{register:x,index:_,descendants:v}=(0,i.mc)({disabled:t&&!n}),{isOpen:N,onChange:g}=d(-1===_?null:_);warnIfOpenAndDisabled({isOpen:N,isDisabled:t});let y=(0,a.useCallback)(()=>{null==g||g(!N),c(_)},[_,c,N,g]),I=(0,a.useCallback)(e=>{let t={ArrowDown:()=>{let e=v.nextEnabled(_);null==e||e.node.focus()},ArrowUp:()=>{let e=v.prevEnabled(_);null==e||e.node.focus()},Home:()=>{let e=v.firstEnabled();null==e||e.node.focus()},End:()=>{let e=v.lastEnabled();null==e||e.node.focus()}}[e.key];t&&(e.preventDefault(),t(e))},[v,_]),w=(0,a.useCallback)(()=>{c(_)},[c,_]),E=(0,a.useCallback)(function(e={},n=null){return{...e,type:"button",ref:(0,o.lq)(x,f,n),id:p,disabled:!!t,"aria-expanded":!!N,"aria-controls":m,onClick:(0,s.v0)(e.onClick,y),onFocus:(0,s.v0)(e.onFocus,w),onKeyDown:(0,s.v0)(e.onKeyDown,I)}},[p,t,N,y,w,I,m,x]),A=(0,a.useCallback)(function(e={},t=null){return{...e,ref:t,role:"region",id:m,"aria-labelledby":p,hidden:!N}},[p,N,m]);return{isOpen:N,isDisabled:t,isFocusable:n,onOpen:()=>{null==g||g(!0)},onClose:()=>{null==g||g(!1)},getButtonProps:E,getPanelProps:A,htmlProps:r}}function allowMultipleWarning(e){let t=e.index||e.defaultIndex,n=null!=t&&!Array.isArray(t)&&e.allowMultiple;(0,s.ZK)({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})}function allowMultipleAndAllowToggleWarning(e){(0,s.ZK)({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function focusableNotDisabledWarning(e){(0,s.ZK)({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function warnIfOpenAndDisabled(e){(0,s.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}},91836:function(e,t,n){n.d(t,{YO:function(){return o},_v:function(){return c},bB:function(){return a},di:function(){return d},ec:function(){return s},lh:function(){return r},mc:function(){return f}});var i=n(73614),l=n(55227),[r,o]=(0,l.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[s,a]=(0,l.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[d,u,c,f]=(0,i.n)()},18122:function(e,t,n){n.d(t,{H:function(){return m}});var i=n(17257),l=n(91836),r=n(35059),o=n(51337),s=n(99155),a=n(25432),d=n(51526),u=n(17745),c=n(67294),f=n(85893),isNumeric=e=>null!=e&&parseInt(e.toString(),10)>0,h={exit:{height:{duration:.2,ease:s.Lj.ease},opacity:{duration:.3,ease:s.Lj.ease}},enter:{height:{duration:.3,ease:s.Lj.ease},opacity:{duration:.4,ease:s.Lj.ease}}},b={exit:({animateOpacity:e,startingHeight:t,transition:n,transitionEnd:i,delay:l})=>{var r;return{...e&&{opacity:isNumeric(t)?1:0},height:t,transitionEnd:null==i?void 0:i.exit,transition:null!=(r=null==n?void 0:n.exit)?r:s.p$.exit(h.exit,l)}},enter:({animateOpacity:e,endingHeight:t,transition:n,transitionEnd:i,delay:l})=>{var r;return{...e&&{opacity:1},height:t,transitionEnd:null==i?void 0:i.enter,transition:null!=(r=null==n?void 0:n.enter)?r:s.p$.enter(h.enter,l)}}},p=(0,c.forwardRef)((e,t)=>{let{in:n,unmountOnExit:i,animateOpacity:l=!0,startingHeight:r=0,endingHeight:o="auto",style:s,className:h,transition:p,transitionEnd:m,...x}=e,[_,v]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let e=setTimeout(()=>{v(!0)});return()=>clearTimeout(e)},[]),(0,a.ZK)({condition:Number(r)>0&&!!i,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let N=parseFloat(r.toString())>0,g={startingHeight:r,endingHeight:o,animateOpacity:l,transition:_?p:{enter:{duration:0}},transitionEnd:{enter:null==m?void 0:m.enter,exit:i?null==m?void 0:m.exit:{...null==m?void 0:m.exit,display:N?"block":"none"}}},y=!i||n,I=n||i?"enter":"exit";return(0,f.jsx)(d.M,{initial:!1,custom:g,children:y&&(0,f.jsx)(u.E.div,{ref:t,...x,className:(0,a.cx)("chakra-collapse",h),style:{overflow:"hidden",display:"block",...s},custom:g,variants:b,initial:!!i&&"exit",animate:I,exit:"exit"})})});p.displayName="Collapse";var m=(0,r.G)(function(e,t){let{className:n,motionProps:r,...s}=e,{reduceMotion:d}=(0,i.EF)(),{getPanelProps:u,isOpen:c}=(0,l.bB)(),h=u(s,t),b=(0,a.cx)("chakra-accordion__panel",n),m=(0,l.YO)();d||delete h.hidden;let x=(0,f.jsx)(o.m.div,{...h,__css:m.panel,className:b});return d?x:(0,f.jsx)(p,{in:c,...r,children:x})});m.displayName="AccordionPanel"},73614:function(e,t,n){n.d(t,{n:function(){return createDescendantContext}});var i=n(67294),l=Object.defineProperty,__defNormalProp=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__publicField=(e,t,n)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,n),n);function sortNodes(e){return e.sort((e,t)=>{let n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(n&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var isElement=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function getNextIndex(e,t,n){let i=e+1;return n&&i>=t&&(i=0),i}function getPrevIndex(e,t,n){let i=e-1;return n&&i<0&&(i=t),i}var r="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,cast=e=>e,o=class{constructor(){__publicField(this,"descendants",new Map),__publicField(this,"register",e=>{if(null!=e)return isElement(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),__publicField(this,"unregister",e=>{this.descendants.delete(e);let t=sortNodes(Array.from(this.descendants.keys()));this.assignIndex(t)}),__publicField(this,"destroy",()=>{this.descendants.clear()}),__publicField(this,"assignIndex",e=>{this.descendants.forEach(t=>{let n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),__publicField(this,"count",()=>this.descendants.size),__publicField(this,"enabledCount",()=>this.enabledValues().length),__publicField(this,"values",()=>{let e=Array.from(this.descendants.values());return e.sort((e,t)=>e.index-t.index)}),__publicField(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),__publicField(this,"item",e=>{if(0!==this.count())return this.values()[e]}),__publicField(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),__publicField(this,"first",()=>this.item(0)),__publicField(this,"firstEnabled",()=>this.enabledItem(0)),__publicField(this,"last",()=>this.item(this.descendants.size-1)),__publicField(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),__publicField(this,"indexOf",e=>{var t,n;return e&&null!=(n=null==(t=this.descendants.get(e))?void 0:t.index)?n:-1}),__publicField(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),__publicField(this,"next",(e,t=!0)=>{let n=getNextIndex(e,this.count(),t);return this.item(n)}),__publicField(this,"nextEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let i=this.enabledIndexOf(n.node),l=getNextIndex(i,this.enabledCount(),t);return this.enabledItem(l)}),__publicField(this,"prev",(e,t=!0)=>{let n=getPrevIndex(e,this.count()-1,t);return this.item(n)}),__publicField(this,"prevEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let i=this.enabledIndexOf(n.node),l=getPrevIndex(i,this.enabledCount()-1,t);return this.enabledItem(l)}),__publicField(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;let n=Array.from(this.descendants.keys()).concat(e),i=sortNodes(n);(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);let l={node:e,index:-1,...t};this.descendants.set(e,l),this.assignIndex(i)})}},s=n(55227),a=n(81103);function useDescendants(){let e=(0,i.useRef)(new o);return r(()=>()=>e.current.destroy()),e.current}var[d,u]=(0,s.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function useDescendant(e){let t=u(),[n,l]=(0,i.useState)(-1),o=(0,i.useRef)(null);r(()=>()=>{o.current&&t.unregister(o.current)},[]),r(()=>{if(!o.current)return;let e=Number(o.current.dataset.index);n==e||Number.isNaN(e)||l(e)});let s=e?cast(t.register(e)):cast(t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(o.current),register:(0,a.lq)(s,o)}}function createDescendantContext(){let e=cast(d);return[e,()=>cast(u()),()=>useDescendants(),e=>useDescendant(e)]}},61942:function(e,t,n){n.d(t,{T:function(){return useControllableState}});var i=n(67294),l=n(35155);function useControllableState(e){let{value:t,defaultValue:n,onChange:r,shouldUpdate:o=(e,t)=>e!==t}=e,s=(0,l.W)(r),a=(0,l.W)(o),[d,u]=(0,i.useState)(n),c=void 0!==t,f=c?t:d,h=(0,l.W)(e=>{let t="function"==typeof e?e(f):e;a(f,t)&&(c||u(t),s(t))},[c,s,f,a]);return[f,h]}},99155:function(e,t,n){n.d(t,{Lj:function(){return i},Sh:function(){return r},js:function(){return getSlideTransition},p$:function(){return o}});var i={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},l={slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function getSlideTransition(e){var t;let n=null!=(t=null==e?void 0:e.direction)?t:"right";switch(n){case"right":default:return l.slideRight;case"left":return l.slideLeft;case"bottom":return l.slideDown;case"top":return l.slideUp}}var r={enter:{duration:.2,ease:i.easeOut},exit:{duration:.1,ease:i.easeIn}},o={enter:(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.enter}),exit:(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.exit})}}}]);