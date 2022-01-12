"use strict";(self.webpackChunkcurrency_converter=self.webpackChunkcurrency_converter||[]).push([[658],{4658:function(e,t,o){o.r(t),o.d(t,{default:function(){return X}});var r=o(2791),i=o(3504),a=o(6871),n=o(3366),s=o(7462),d=o(8182),c=o(767),l=o(7630),u=o(1046),p=o(4036),m=o(703),v=o(5159),f=o(208);function b(e){return(0,v.Z)("MuiAppBar",e)}(0,f.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var x=o(184),g=["className","color","enableColorOnDark","position"],h=(0,l.ZP)(m.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["position".concat((0,p.Z)(o.position))],t["color".concat((0,p.Z)(o.color))]]}})((function(e){var t=e.theme,o=e.ownerState,r="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,s.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===o.position&&{position:"fixed",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===o.position&&{position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===o.position&&{position:"sticky",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"static"===o.position&&{position:"static"},"relative"===o.position&&{position:"relative"},"default"===o.color&&{backgroundColor:r,color:t.palette.getContrastText(r)},o.color&&"default"!==o.color&&"inherit"!==o.color&&"transparent"!==o.color&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},"inherit"===o.color&&{color:"inherit"},"dark"===t.palette.mode&&!o.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===o.color&&(0,s.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"}))})),Z=r.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiAppBar"}),r=o.className,i=o.color,a=void 0===i?"primary":i,l=o.enableColorOnDark,m=void 0!==l&&l,v=o.position,f=void 0===v?"fixed":v,Z=(0,n.Z)(o,g),k=(0,s.Z)({},o,{color:a,position:f,enableColorOnDark:m}),y=function(e){var t=e.color,o=e.position,r=e.classes,i={root:["root","color".concat((0,p.Z)(t)),"position".concat((0,p.Z)(o))]};return(0,c.Z)(i,b,r)}(k);return(0,x.jsx)(h,(0,s.Z)({square:!0,component:"header",ownerState:k,elevation:4,className:(0,d.Z)(y.root,r,"fixed"===f&&"mui-fixed"),ref:t},Z))})),k=o(4554),y=o(4942);function w(e){return(0,v.Z)("MuiToolbar",e)}(0,f.Z)("MuiToolbar",["root","gutters","regular","dense"]);var C=["className","component","disableGutters","variant"],S=(0,l.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&(0,y.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===o.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),G=r.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiToolbar"}),r=o.className,i=o.component,a=void 0===i?"div":i,l=o.disableGutters,p=void 0!==l&&l,m=o.variant,v=void 0===m?"regular":m,f=(0,n.Z)(o,C),b=(0,s.Z)({},o,{component:a,disableGutters:p,variant:v}),g=function(e){var t=e.classes,o={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,c.Z)(o,w,t)}(b);return(0,x.jsx)(S,(0,s.Z)({as:a,className:(0,d.Z)(g.root,r),ref:t,ownerState:b},f))})),M=o(890);function W(e){return(0,v.Z)("MuiContainer",e)}(0,f.Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var R=["className","component","disableGutters","fixed","maxWidth"],I=(0,l.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["maxWidth".concat((0,p.Z)(String(o.maxWidth)))],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,o=e.ownerState;return(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&(0,y.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,o){var r=t.breakpoints.values[o];return 0!==r&&(e[t.breakpoints.up(o)]={maxWidth:"".concat(r).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,o=e.ownerState;return(0,s.Z)({},"xs"===o.maxWidth&&(0,y.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),o.maxWidth&&"xs"!==o.maxWidth&&(0,y.Z)({},t.breakpoints.up(o.maxWidth),{maxWidth:"".concat(t.breakpoints.values[o.maxWidth]).concat(t.breakpoints.unit)}))})),j=r.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiContainer"}),r=o.className,i=o.component,a=void 0===i?"div":i,l=o.disableGutters,m=void 0!==l&&l,v=o.fixed,f=void 0!==v&&v,b=o.maxWidth,g=void 0===b?"lg":b,h=(0,n.Z)(o,R),Z=(0,s.Z)({},o,{component:a,disableGutters:m,fixed:f,maxWidth:g}),k=function(e){var t=e.classes,o=e.fixed,r=e.disableGutters,i=e.maxWidth,a={root:["root",i&&"maxWidth".concat((0,p.Z)(String(i))),o&&"fixed",r&&"disableGutters"]};return(0,c.Z)(a,W,t)}(Z);return(0,x.jsx)(I,(0,s.Z)({as:a,ownerState:Z,className:(0,d.Z)(k.root,r),ref:t},h))})),O=o(2065),B=o(6199),N=o(7844),T=o(162),L=o(2071);var z=(0,f.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var D=(0,f.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),F=o(9849);function V(e){return(0,v.Z)("MuiMenuItem",e)}var A=(0,f.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),P=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],q=(0,l.ZP)(N.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((function(e){var t,o=e.theme,r=e.ownerState;return(0,s.Z)({},o.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat(o.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:o.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,y.Z)(t,"&.".concat(A.selected),(0,y.Z)({backgroundColor:(0,O.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity)},"&.".concat(A.focusVisible),{backgroundColor:(0,O.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)})),(0,y.Z)(t,"&.".concat(A.selected,":hover"),{backgroundColor:(0,O.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,O.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity)}}),(0,y.Z)(t,"&.".concat(A.focusVisible),{backgroundColor:o.palette.action.focus}),(0,y.Z)(t,"&.".concat(A.disabled),{opacity:o.palette.action.disabledOpacity}),(0,y.Z)(t,"& + .".concat(z.root),{marginTop:o.spacing(1),marginBottom:o.spacing(1)}),(0,y.Z)(t,"& + .".concat(z.inset),{marginLeft:52}),(0,y.Z)(t,"& .".concat(F.Z.root),{marginTop:0,marginBottom:0}),(0,y.Z)(t,"& .".concat(F.Z.inset),{paddingLeft:36}),(0,y.Z)(t,"& .".concat(D.root),{minWidth:36}),t),!r.dense&&(0,y.Z)({},o.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&(0,s.Z)({minHeight:32,paddingTop:4,paddingBottom:4},o.typography.body2,(0,y.Z)({},"& .".concat(D.root," svg"),{fontSize:"1.25rem"})))})),H=r.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiMenuItem"}),i=o.autoFocus,a=void 0!==i&&i,l=o.component,p=void 0===l?"li":l,m=o.dense,v=void 0!==m&&m,f=o.divider,b=void 0!==f&&f,g=o.disableGutters,h=void 0!==g&&g,Z=o.focusVisibleClassName,k=o.role,y=void 0===k?"menuitem":k,w=o.tabIndex,C=(0,n.Z)(o,P),S=r.useContext(B.Z),G={dense:v||S.dense||!1,disableGutters:h},M=r.useRef(null);(0,T.Z)((function(){a&&M.current&&M.current.focus()}),[a]);var W,R=(0,s.Z)({},o,{dense:G.dense,divider:b,disableGutters:h}),I=function(e){var t=e.disabled,o=e.dense,r=e.divider,i=e.disableGutters,a=e.selected,n=e.classes,d={root:["root",o&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",a&&"selected"]},l=(0,c.Z)(d,V,n);return(0,s.Z)({},n,l)}(o),j=(0,L.Z)(M,t);return o.disabled||(W=void 0!==w?w:-1),(0,x.jsx)(B.Z.Provider,{value:G,children:(0,x.jsx)(q,(0,s.Z)({ref:j,role:y,tabIndex:W,component:p,focusVisibleClassName:(0,d.Z)(I.focusVisible,Z)},C,{ownerState:R,classes:I}))})})),X=function(){var e=(0,a.s0)();return(0,x.jsx)(Z,{children:(0,x.jsx)(j,{maxWidth:"xl",children:(0,x.jsxs)(G,{disableGutters:!0,children:[(0,x.jsx)(M.Z,{onClick:function(){return e("/")},variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{md:"flex"},cursor:"pointer"},children:"The Converter"}),(0,x.jsx)(k.Z,{sx:{flexGrow:1,display:{md:"flex"}},children:(0,x.jsx)(H,{children:(0,x.jsx)(i.rU,{style:{textDecoration:"none",color:"white",cursor:"pointer"},to:"/exchange-rates",children:"Exchange Rates"})},1)})]})})})}}}]);
//# sourceMappingURL=658.13425a27.chunk.js.map