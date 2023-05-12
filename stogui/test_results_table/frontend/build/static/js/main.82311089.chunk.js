(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StyledCollapse=t.centerTableFooter=t.firstLetterStyle=t.DataTableContainer=t.cellDateTime=t.cellIconSpacing=t.cellMW160=void 0;var a=n(20),r=n(21);t.cellMW160={maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.cellIconSpacing={paddingLeft:.3,paddingRight:.3,maxWidth:24},t.cellDateTime={maxWidth:192,minWidth:192,overflow:"hidden",background:"transparent"},t.DataTableContainer=(0,a.styled)(r.TableContainer)({height:"calc(100vh - 130px)",overflow:"auto",ml:-1,mr:-1,borderTop:"1px solid #eee",width:"100%"}),t.firstLetterStyle={textTransform:"none","::first-letter":{textTransform:"uppercase"}},t.centerTableFooter={display:"flex",justifyContent:"center",width:"100%",position:"fixed",bottom:0,borderTop:"1px solid lightgray",background:"white"},t.StyledCollapse=(0,a.styled)(r.Collapse)({backgroundColor:"rgba(0,161,192, 0.05)",paddingLeft:"100px"})},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.detectDarkModeChange=t.getDarkModeValue=void 0,t.getDarkModeValue=function(){return!!window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},t.detectDarkModeChange=function(e){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(t){e(!!t.matches)}))}},231:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.TestResultsTable=void 0;var o=l(n(0)),i=n(140),u=n(21),c=n(287),d=n(303),s=n(102),f=n(306),m=[{label:"Start Date",sx:s.cellDateTime,key:function(e){return(0,d.formatSessionTime)(+e.bt)},orderBy:"bt"},{label:"Duration (sec)",sx:s.cellMW160,key:function(e){return"".concat((e.tt-e.bt)/1e6)}},{label:"Tags",sx:{maxWidth:240,overflowWrap:"break-word",wordBreak:"break-word",wordWrap:"break-word"},key:function(e){var t=new Set(e.annotations.map((function(e){return e.name})));return Array.from(t).join(", ")}},{label:"Class",sx:s.cellMW160,key:"class",orderBy:"class"},{label:"Class Predicted",sx:s.cellMW160,key:"class_predicted",orderBy:"class_predicted"},{label:"Prediction Accuracy",sx:s.cellMW160,key:function(e){return e.class===e.class_predicted?"correct":"incorrect"},orderBy:function(e,t){return null==e||null==t?0:(e.class===e.class_predicted?0:1)-(t.class===t.class_predicted?0:1)}}];t.TestResultsTable=function(e){var t,n,a,r,l,d,s,p,v,h,b,g,y,_,E,S,x,C,T,O,w,D,P,k,M,j,F,B,A,I,R,q,V,W,L=(0,o.useState)(null===(n=null===(t=e.query)||void 0===t?void 0:t.filter)||void 0===n?void 0:n.from_bt),H=L[0],Y=L[1],z=(0,o.useState)(null===(r=null===(a=e.query)||void 0===a?void 0:a.filter)||void 0===r?void 0:r.to_bt),N=z[0],G=z[1],J=(0,o.useState)(null===(d=null===(l=e.query)||void 0===l?void 0:l.filter)||void 0===d?void 0:d.from_tt),U=J[0],$=J[1],K=(0,o.useState)(null===(p=null===(s=e.query)||void 0===s?void 0:s.filter)||void 0===p?void 0:p.to_tt),Q=K[0],X=K[1],Z=(0,o.useState)(null===(h=null===(v=e.query)||void 0===v?void 0:v.filter)||void 0===h?void 0:h.sr),ee=Z[0],te=Z[1],ne=(0,o.useState)(null===(y=null===(g=null===(b=e.query)||void 0===b?void 0:b.filter)||void 0===g?void 0:g.channels)||void 0===y?void 0:y.names),ae=ne[0],re=ne[1],le=(0,o.useState)(null!==(x=null===(S=null===(E=null===(_=e.query)||void 0===_?void 0:_.filter)||void 0===E?void 0:E.channels)||void 0===S?void 0:S.operator)&&void 0!==x?x:"and"),oe=le[0],ie=le[1],ue=(0,o.useState)(null===(O=null===(T=null===(C=e.query)||void 0===C?void 0:C.filter)||void 0===T?void 0:T.annotations)||void 0===O?void 0:O.names),ce=ue[0],de=ue[1],se=(0,o.useState)(null!==(k=null===(P=null===(D=null===(w=e.query)||void 0===w?void 0:w.filter)||void 0===D?void 0:D.annotations)||void 0===P?void 0:P.operator)&&void 0!==k?k:"and"),fe=se[0],me=se[1],pe=50,ve=0;null!=(null===(j=null===(M=e.query)||void 0===M?void 0:M.pagination)||void 0===j?void 0:j.from_idx)&&(pe=e.query.pagination.to_idx-e.query.pagination.from_idx,ve=e.query.pagination.from_idx/pe);var he=(0,o.useState)(pe),be=he[0],ge=he[1],ye=(0,o.useState)(ve),_e=ye[0],Ee=ye[1],Se=(0,o.useState)(null!==(A=null===(B=null===(F=e.query)||void 0===F?void 0:F.sort)||void 0===B?void 0:B.mode)&&void 0!==A?A:"desc"),xe=Se[0],Ce=Se[1],Te=(0,o.useState)(null!==(q=null===(R=null===(I=e.query)||void 0===I?void 0:I.sort)||void 0===R?void 0:R.field)&&void 0!==q?q:"bt"),Oe=Te[0],we=Te[1],De=(0,o.useState)(e.data),Pe=De[0],ke=De[1],Me=function(){var t=null!=ae&&null!=oe?{names:ae,operator:oe}:null,n=null!=ce&&null!=fe?{names:ce,operator:fe}:null;null!=oe&&null!=fe||console.error({channelsOp:oe,annotationsOp:fe});var a={filter:{from_bt:H,to_bt:N,from_tt:U,to_tt:Q,annotations:n,device_ids:null,channels:t,sr:ee},sort:{field:Oe,mode:xe},pagination:{from_idx:_e*be,to_idx:(_e+1)*be}};ke((0,f.listSessions)(a.filter,a.sort,a.pagination,e.data))},je=[{label:"Start Date",options:"date",fromValue:H,toValue:N,onChangeFrom:Y,onChangeTo:G},{label:"End Date",options:"date",fromValue:U,toValue:Q,onChangeFrom:$,onChangeTo:X},{label:"Sample Rate",options:[44100,48e3],value:ee,onChange:te},{label:"Channels",options:"multilineOperator",linesValue:ae,onChangeLines:re,operatorValue:oe,onChangeOperator:ie,operatorOptions:["and","or"]},{label:"Annotations",options:"multilineOperator",linesValue:ce,onChangeLines:de,operatorValue:fe,onChangeOperator:me,operatorOptions:["and","or"]}];return(0,o.useEffect)(Me,[_e,xe,Oe,be]),(0,o.useEffect)((function(){Ee(0)}),[H,N,U,Q,ee,ae,oe,ce,fe,be]),o.default.createElement(c.DataTable,{theme:i.otosenseTheme2022,style:e.style,data:Pe,columns:m,clearFilters:function(){[Y,G,$,X,te,re,de].forEach((function(e){e(null)})),[ie,me].forEach((function(e){e("and")}))},submitFilters:Me,filterOptions:je,rowsPerPage:be,onRowsPerPageChange:function(e){var t=e.target.value;ge(parseInt(t,10)),Ee(0)},page:_e,onPageChange:function(e,t){Ee(t)},orderBy:Oe,order:xe,onOrderChange:function(e){we((function(){return e})),Ce("asc"===xe?"desc":"asc"),Ee(0)},renderExpandedData:function(e){return o.default.createElement(u.Grid,{container:!0},o.default.createElement(u.Grid,{item:!0,sm:4},o.default.createElement(u.Stack,{direction:"row"},o.default.createElement(u.Box,null,"Channels"),":",o.default.createElement(u.Stack,{mt:"5px",ml:0},e.channels.map((function(e,t){return o.default.createElement(i.FlexBox,{key:"channel-".concat(t),ml:1},o.default.createElement(u.Typography,{variant:"h5"},e.name),"string"===typeof e.description&&o.default.createElement(u.Typography,{variant:"h6",mr:.5},"\xa0- ".concat(e.description)))}))))),o.default.createElement(u.Grid,{item:!0,sm:4},o.default.createElement(u.Stack,{direction:"row"},o.default.createElement(u.Box,null,"Sample Rate: ".concat(e.sr)))))},isMultiSelect:e.isMultiSelect,onSelectItems:e.onSelectSessions,totalCount:null!==(W=null===(V=e.data)||void 0===V?void 0:V.length)&&void 0!==W?W:-1})}},250:function(e,t,n){e.exports=n(309)},287:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return l(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DataTable=void 0;var u=o(n(0)),c=n(21),d=n(122),s=i(n(290)),f=n(102),m=n(291),p=n(295),v=n(300),h=n(140),b=n(224),g=function(e,t){if(null!=e)return function(){return e(t)}};t.DataTable=function(e){var t,n,r,l,o=(0,u.useState)(-1),i=o[0],y=o[1],_=(0,u.useState)(new Set),E=_[0],S=_[1],x=(0,u.useState)(null!==(t=e.isDarkMode)&&void 0!==t?t:(0,b.getDarkModeValue)()),C=x[0],T=x[1];(0,u.useEffect)((function(){null==e.isDarkMode?(0,b.detectDarkModeChange)(T):T(e.isDarkMode)}),[]);var O,w,D,P,k=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];y(-1),e.apply(void 0,t)}};return u.default.createElement("div",{style:a({filter:C?"invert(1)":"invert(0)"},e.style)},u.default.createElement(c.ThemeProvider,{theme:null!==(n=e.theme)&&void 0!==n?n:h.otosenseTheme2022},u.default.createElement(c.Box,{sx:{minHeight:"720px",backgroundColor:"#fff"}},null!=e.filterOptions&&null!=e.clearFilters&&u.default.createElement(p.Filter,{clearFilters:e.clearFilters,submitFilters:k(e.submitFilters),filterOptions:e.filterOptions}),u.default.createElement(f.DataTableContainer,{sx:{borderTop:"1px solid #eee",width:"100%"}},u.default.createElement(c.Table,{size:"small",sx:{marginBottom:1},stickyHeader:!0},u.default.createElement(c.TableHead,{sx:{borderBottom:"1px solid #eee"}},u.default.createElement(c.TableRow,null,!0===e.isMultiSelect?u.default.createElement(c.TableCell,{sx:{paddingLeft:.3,paddingRight:.3,maxWidth:24,backgroundColor:"#fff"}},u.default.createElement(h.CenterBox,null,u.default.createElement(s.default,{color:"primary",onClick:function(){var t;if((null===(t=e.data)||void 0===t?void 0:t.length)>0){var n=e.data[0],a=new Set(E);E.has(n)?e.data.forEach((function(e){return a.delete(e)})):e.data.forEach((function(e){return a.add(e)})),S(a),e.onSelectItems(Array.from(a))}}}))):u.default.createElement(c.TableCell,{sx:{background:"#fff"},colSpan:1}),null!=e.renderExpandedData&&u.default.createElement(c.TableCell,{sx:{background:"#fff"},colSpan:1}),(O=e.columns,w=e.orderBy,D=e.order,P=k(e.onOrderChange),u.default.createElement(u.default.Fragment,null,O.map((function(e,t){return null!=e.orderBy?u.default.createElement(c.TableCell,{key:"header-".concat(t),sx:{background:"#fff"},sortDirection:w===e.orderBy&&D},u.default.createElement(c.TableSortLabel,{active:w===e.orderBy,direction:w===e.orderBy?D:"asc",onClick:function(){P(e.orderBy)}},e.label,w===e.orderBy?u.default.createElement(c.Box,{component:"span",sx:d.visuallyHidden},"desc"===D?"sorted descending":"sorted ascending"):null)):u.default.createElement(c.TableCell,{key:"header-".concat(t),sx:{background:"#fff"}},e.label)})))))),u.default.createElement(c.TableBody,{sx:{marginBottom:64}},(null===(r=e.data)||void 0===r?void 0:r.length)>0?u.default.createElement(u.default.Fragment,null,e.data.map((function(t,n){return u.default.createElement(m.Row,{key:"row-".concat(n),id:"row-".concat(n),data:t,columns:e.columns,isExpanded:n===i,onClickExpand:function(){y(n!==i?n:-1)},onSelectItem:function(){!function(t){if(!0===e.isMultiSelect){var n=new Set(E);n.has(t)?n.delete(t):n.add(t),S(n),e.onSelectItems(Array.from(n))}else S(new Set([t])),e.onSelectItems([t])}(t)},isSelected:E.has(t),renderExpandedData:g(e.renderExpandedData,t),selectComponent:!0===e.isMultiSelect?"checkbox":"radio"})}))):u.default.createElement(c.TableRow,null,u.default.createElement(c.TableCell,{colSpan:e.columns.length+2,sx:{textAlign:"center"}},"No Data"))),u.default.createElement(v.DataTableFooter,{rowsPerPage:e.rowsPerPage,onRowsPerPageChange:k(e.onRowsPerPageChange),page:e.page,onPageChange:k(e.onPageChange),count:null!==(l=e.totalCount)&&void 0!==l?l:-1,selectedItemsCount:E.size}))))))}},291:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Row=void 0;var r=a(n(0)),l=n(21),o=a(n(292)),i=a(n(293)),u=n(140),c=a(n(146)),d=n(102),s=n(294);t.Row=function(e){return r.default.createElement(r.default.Fragment,{key:"".concat(e.id)},r.default.createElement(l.TableRow,{sx:{width:"100%",borderBottom:"0.5px solid #ccc"},hover:!0},r.default.createElement(l.TableCell,{sx:d.cellIconSpacing},r.default.createElement(u.CenterBox,null,(t=e.selectComponent,n=e.isSelected,a=e.onSelectItem,"checkbox"===t?r.default.createElement(l.Checkbox,{color:"primary",checked:!0===n,onChange:a}):"radio"===t?r.default.createElement(c.default,{color:"primary",checked:!0===n,onChange:a}):r.default.createElement(r.default.Fragment,null)))),null!=e.renderExpandedData&&r.default.createElement(l.TableCell,{sx:d.cellIconSpacing},r.default.createElement(l.IconButton,{"aria-label":"expand row",size:"small",onClick:e.onClickExpand},e.isExpanded?r.default.createElement(i.default,{color:"primary"}):r.default.createElement(o.default,{color:"primary"}))),e.columns.map((function(t,n){return r.default.createElement(l.TableCell,{sx:t.sx,key:"".concat(e.id,"-col-").concat(n)},"string"===typeof t.key?e.data[t.key]:t.key(e.data))}))),null!=e.renderExpandedData&&r.default.createElement(s.CollapsedContents,{isExpanded:e.isExpanded,renderData:e.renderExpandedData}));var t,n,a}},294:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CollapsedContents=void 0;var r=a(n(0)),l=n(21),o=n(102);t.CollapsedContents=function(e){return r.default.createElement(l.TableRow,{sx:{width:"100%"}},r.default.createElement(l.TableCell,{sx:{p:0},colSpan:11},r.default.createElement(o.StyledCollapse,{in:e.isExpanded,timeout:"auto",unmountOnExit:!0},e.isExpanded&&e.renderData())))}},295:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchFilter=t.SearchHeader=t.SearchFooter=t.Filter=void 0;var i=l(n(0)),u=o(n(296)),c=o(n(222)),d=o(n(297)),s=n(20),f=n(21),m=n(298),p=n(102),v=n(224);t.Filter=function(e){var n=(0,i.useState)(!1),a=n[0],r=n[1],l=function(){r(!a)};return i.default.createElement(f.Box,{sx:{float:"right",mb:"16px"}},i.default.createElement(f.Button,{color:"secondary",onClick:l,startIcon:i.default.createElement(u.default,null)},i.default.createElement(f.Typography,{variant:"button"},"Filters")),i.default.createElement(t.SearchFilter,{filterOptions:e.filterOptions,drawerState:a,toggleState:l,title:"Filters",btnTxtSearch:"Search",btnTxtClear:"Clear",resetFilters:e.clearFilters,formatAndCallSetFilters:e.submitFilters}))},t.SearchFooter=(0,s.styled)(f.Box)({position:"absolute",bottom:0,textAlign:"right",width:"100%",height:"86px",padding:"1rem",backgroundColor:"#a3a6b4"}),t.SearchHeader=(0,s.styled)(f.Box)({display:"flex",justifyContent:"space-between",background:"#f3f3f3",padding:"18px"});t.SearchFilter=function(e){var n=e.filterOptions,a=e.drawerState,r=e.toggleState,l=e.title,o=e.btnTxtSearch,u=e.btnTxtClear,s=e.resetFilters,h=e.formatAndCallSetFilters,b=(0,i.useState)((0,v.getDarkModeValue)()),g=b[0],y=b[1];(0,i.useEffect)((function(){(0,v.detectDarkModeChange)(y)}),[]);var _={filter:g?"invert(1)":"invert(0)"};return i.default.createElement(f.Drawer,{style:_,anchor:"right",open:a,onClose:r},i.default.createElement(t.SearchHeader,null,i.default.createElement(f.Typography,{variant:"h3"},l),i.default.createElement(f.Box,{onClick:r,sx:{"&:hover":{cursor:"pointer"}}},i.default.createElement(c.default,{color:"primary"}))),n.map((function(e,t){return i.default.createElement(f.Accordion,{key:"search-filter-".concat(e.label,"-").concat(t),disableGutters:!0,sx:{overflow:"scroll"}},i.default.createElement(f.AccordionSummary,{expandIcon:i.default.createElement(d.default,null),"aria-controls":"panel1bh-content",id:"filter-header-".concat(e.label)},i.default.createElement(f.Typography,{variant:"body2",mr:1,sx:p.firstLetterStyle},e.label)),i.default.createElement(f.AccordionDetails,null,function(e){var t=e.options;if("date"===t){var n=e.label,a=e.fromValue,r=e.toValue,l=e.onChangeFrom,o=e.onChangeTo;return(0,m.DateTimeFilter)(n,a,r,l,o)}if("multilineOperator"===t){n=e.label;var i=e.linesValue,u=e.onChangeLines,c=e.operatorValue,d=e.onChangeOperator,s=e.operatorOptions;return(0,m.MultilineOperatorFilter)(n,i,u,c,d,s)}if(Array.isArray(t)){n=e.label;var f=e.value,p=e.onChange;return(0,m.renderSearchableFilter)(n,f,p,t)}}(e)))})),i.default.createElement(t.SearchFooter,null,i.default.createElement(f.Button,{color:"cancel",sx:{mr:1},onClick:s},i.default.createElement(f.Typography,{variant:"button"},u)),i.default.createElement(f.Button,{sx:{mr:1},onClick:h,disabled:!1},i.default.createElement(f.Typography,{variant:"button"},o))))}},298:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.DateTimeFilter=t.renderSearchableFilter=t.MultilineOperatorFilter=void 0;var i=o(n(0)),u=n(21),c=n(307),d=n(299),s=n(308);t.MultilineOperatorFilter=function(e,t,n,r,l,o){var c=(0,i.useState)(""),d=c[0],s=c[1];return(0,i.useEffect)((function(){s(null!=t?t.join("\n"):"")}),[t]),i.default.createElement(i.default.Fragment,null,i.default.createElement(u.TextField,{sx:{height:"auto",width:"100%"},placeholder:"Separate values with newline",variant:"filled",value:d,multiline:!0,rows:4,onChange:function(e){s(e.target.value)},onBlur:function(){n(d.replace(/^\s+|\s+$/g,"").split(/\n+/))}}),i.default.createElement(u.Autocomplete,{options:o,id:"filter-".concat(e),onChange:function(e,t){l(null!=t?t:o[0])},value:null!==r&&void 0!==r?r:o[0],renderInput:function(e){return i.default.createElement(u.TextField,a({},e,{placeholder:"Operator",variant:"filled"}))}}))};t.renderSearchableFilter=function(e,t,n,r){return i.default.createElement(u.Autocomplete,{options:r,id:"filter-".concat(e),onChange:function(e,t){n(null!=t?t:"")},value:null!==t&&void 0!==t?t:"",renderInput:function(t){return i.default.createElement(u.TextField,a({},t,{placeholder:e,variant:"filled"}))}})};t.DateTimeFilter=function(e,t,n,r,l){var o=(0,i.useState)(null),f=o[0],m=o[1],p=(0,i.useState)(null),v=p[0],h=p[1],b=(0,i.useState)(!1),g=b[0],y=b[1],_=(0,i.useState)(""),E=_[0],S=_[1],x=function(e){var t=e.toString().split(" "),n=t[4].slice(0,-2).concat("00"),a=t;a[4]=n;var r=a.join(" ");return new Date(r)};return(0,i.useEffect)((function(){null==t&&null==n?(h(null),m(null)):null!=t&&null!=n||(null!=t&&null==n?(S("Select End Date And Time"),y(!0)):null!=n&&null==t?(S("Select Start Date And Time"),y(!0)):null!=n&&null!=t&&(y(!1),S("")))}),[n,t]),i.default.createElement(i.default.Fragment,null,i.default.createElement(u.Stack,{mb:1},i.default.createElement(u.Typography,{variant:"overline"},"Start Date"),i.default.createElement(d.LocalizationProvider,{dateAdapter:c.AdapterDateFns},i.default.createElement(s.DateTimePicker,{renderInput:function(e){return i.default.createElement(u.TextField,a({},e))},value:f,onChange:function(e){null!=e&&"string"!==typeof e&&function(e){m(e);var t=1e3*x(e).getTime();r(t)}(e)}}))),i.default.createElement(u.Stack,null,i.default.createElement(u.Typography,{variant:"overline"},"End Date"),i.default.createElement(d.LocalizationProvider,{dateAdapter:c.AdapterDateFns},i.default.createElement(s.DateTimePicker,{renderInput:function(e){return i.default.createElement(u.TextField,a({},e))},value:v,onChange:function(e){null!=e&&"string"!==typeof e&&function(e){var n=1e3*x(e).getTime();null==t||t<=n?(y(!1),S(""),h(e),l(n)):(S("Start Date Must Be Earlier Than End Date"),y(!0))}(e)}})),g&&i.default.createElement(u.Typography,{variant:"caption",color:"error"},E)))}},300:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DataTableFooter=void 0;var i=l(n(0)),u=n(20),c=n(21),d=o(n(301)),s=o(n(302)),f=n(102),m=function(e){var t=(0,u.useTheme)();return i.createElement(c.Box,{sx:{flexShrink:0}},i.createElement(c.IconButton,{onClick:function(t){var n=e.page-1;e.onPageChange(t,n)},disabled:0===e.page,"aria-label":"previous page"},"rtl"===t.direction?i.createElement(s.default,null):i.createElement(d.default,null)),i.createElement(c.IconButton,{onClick:function(t){var n=e.page+1;e.onPageChange(t,n)},disabled:-1!==e.count&&(e.page+1)*e.rowsPerPage>=e.count,"aria-label":"next page"},"rtl"===t.direction?i.createElement(d.default,null):i.createElement(s.default,null)))};t.DataTableFooter=function(e){var t;return i.createElement(c.TableFooter,{sx:f.centerTableFooter},i.createElement(c.TableRow,null,e.selectedItemsCount>0&&i.createElement(c.TableCell,null,e.selectedItemsCount," ",1===e.selectedItemsCount?"item":"items"," selected"),i.createElement(c.TablePagination,{rowsPerPageOptions:[10,20,30,40,50],colSpan:10,count:null!==(t=e.count)&&void 0!==t?t:-1,rowsPerPage:e.rowsPerPage,page:e.page,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onPageChange:e.onPageChange,onRowsPerPageChange:e.onRowsPerPageChange,ActionsComponent:m,labelDisplayedRows:function(e){var t=e.from,n=e.to;return"".concat(t,"-").concat(n)}})))}},303:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,r)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.formatSessionTime=t.formatTimestamp=void 0;var o=l(n(304));t.formatTimestamp=function(e,t){return void 0===t&&(t=!1),t?isNaN(e)?"-":o.utc(new Date(e)).format("YYYY-MM-DD, HH:mm:ss")+" -UTC":isNaN(e)?"-":o.unix(e/1e3).format("YYYY-MM-DD, HH:mm:ss")};t.formatSessionTime=function(e,n){return void 0===n&&(n=!1),(0,t.formatTimestamp)(e/1e3,n)}},306:function(e,t,n){"use strict";var a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,r=0,l=t.length;r<l;r++)!a&&r in t||(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.listData=t.listSessions=void 0;var r=function(e,t,n,a){for(var r=[],l=1,o=e;o<t;o+=n)r.push({name:"tag ".concat(l),bt:o,tt:o+n}),l=l%a+1;return r},l=function(e){void 0===e&&(e=10);for(var t=[],n=[44100,48e3],a=0;a<e;a++){for(var l=1677672e9+6e8*a,o=1677672e9+6e8*(a+1),i=[],u=0;u<a%4+1;u++)i.push({name:"ch".concat(u),description:"microphone"});t.push({id:"mockSession".concat(a),device_id:"deviceId".concat(a%2+1),bt:l,tt:o,sr:n[a%2],bit_depth:8,channels:i,annotations:r(l,o,6e7,a%5+1)})}return t}(100),o=function(e,t,n){return!("and"===t&&!e.every((function(e){return n.some((function(t){return t.name===e}))})))&&!("or"===t&&!n.some((function(t){var n=t.name;return e.includes(n)})))},i=function(e,t){var n=a([],t,!0);if((null===n||void 0===n?void 0:n.length)>0){var r=void 0;if("function"===(r="string"===typeof e.field?typeof t[0][e.field]:"function")){var l=e.field;n="asc"===e.mode?n.sort((function(e,t){return l(e,t)})):n.sort((function(e,t){return l(t,e)}))}else if("string"===r){var o=e.field;n="asc"===e.mode?n.sort((function(e,t){var n,a=e[o],r=t[o];return null!==(n=null===a||void 0===a?void 0:a.localeCompare(null!==r&&void 0!==r?r:""))&&void 0!==n?n:0})):n.sort((function(e,t){var n,a=t[o],r=e[o];return null!==(n=null===a||void 0===a?void 0:a.localeCompare(null!==r&&void 0!==r?r:""))&&void 0!==n?n:0}))}else if("number"===r){var i=e.field;n="asc"===e.mode?n.sort((function(e,t){return e[i]-t[i]})):n.sort((function(e,t){return t[i]-e[i]}))}}return n};t.listSessions=function(e,t,n,r){void 0===e&&(e=null),void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=l);var u=null!=e?function(e,t){return void 0===t&&(t=l),a([],t,!0).filter((function(t){var n=e.from_bt,a=e.to_bt,r=e.from_tt,l=e.to_tt,i=e.sr,u=e.channels,c=e.annotations;return!(null!=n&&t.bt<n)&&(!(null!=a&&t.bt>a)&&(!(null!=r&&t.tt<r)&&(!(null!=l&&t.tt>l)&&((null==i||t.sr===i)&&(!(null!=u&&!o(u.names,u.operator,t.channels))&&!(null!=c&&!o(c.names,c.operator,t.annotations)))))))}))}(e,r):a([],r,!0);return null!=t&&(u=i(t,u)),null!=n&&(u=u.slice(n.from_idx,n.to_idx)),u};t.listData=function(e,t,n){void 0===e&&(e=null),void 0===t&&(t=null),void 0===n&&(n=[]);var r=a([],n,!0);return null!=e&&(r=i(e,r)),null!=t&&(r=r.slice(t.from_idx,t.to_idx)),r}},309:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(57),o=n.n(l),i=n(153),u=n(129),c=n(231),d=function(){var e=Object(i.useRenderData)(),t=e.args.sessions||[],n=e.args.query||null,l=e.args.is_multiselect||!1;return Object(a.useEffect)((function(){return u.Streamlit.setFrameHeight(1024)})),r.a.createElement(c.TestResultsTable,{data:t,onSelectSessions:function(e){console.log("TestResultsTable onSelectSessions",e),u.Streamlit.setComponentValue(e)},query:n,isMultiSelect:l})};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.StreamlitProvider,null,r.a.createElement(d,null))),document.getElementById("root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.82311089.chunk.js.map