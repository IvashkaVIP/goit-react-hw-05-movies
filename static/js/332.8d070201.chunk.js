"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[332],{634:function(t,n,e){e.d(n,{UF:function(){return p},Wf:function(){return l},fh:function(){return v},q5:function(){return _},yo:function(){return x}});var r=e(861),c=e(757),a=e.n(c),u=e(243),s="9d709850c7590845ffb60644b29d6f51",o="https://api.themoviedb.org/3/",i="trending/all/",f="search/movie";function p(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o).concat(i,"day?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o).concat(f,"?api_key=").concat(s,"&query=").concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o,"movie/").concat(n,"?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},81:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(87),c=e(689),a="MoviesListItem_wrap-link__UqwH6",u=e(184),s=function(t){var n=t.title,e=t.name,s=t.id,o=(0,c.TH)(),i="/"===o.pathname?"movies":o.pathname;return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{className:a,to:"".concat(i,"/").concat(s),state:{from:o},children:null!==n&&void 0!==n?n:e})})},o=function(t){var n=t.movies;return(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)(s,{title:t.title,name:t.name,id:t.id},t.id)}))})}},332:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(861),c=e(439),a=e(757),u=e.n(a),s=e(791),o=e(87),i=e(634),f="SearchForm_form__o80os",p="SearchForm_btn-search__RNESS",h="SearchForm_input__HOxJo",l=e(184),m=function(t){var n=t.handleSearch,e=t.searchValue,r=t.setSearchParams,c=t.firstRender;return(0,l.jsxs)("form",{className:f,onSubmit:function(t){t.preventDefault(),n(e)},children:[(0,l.jsx)("input",{className:h,type:"text",value:e,onChange:function(t){var n=t.target.value;r({search:n}),c.current=!1}}),(0,l.jsx)("button",{className:p,type:"submit",children:"Search"})]})},v=e(81),d=function(){var t,n=(0,s.useState)([]),e=(0,c.Z)(n,2),a=e[0],f=e[1],p=(0,o.lr)(),h=(0,c.Z)(p,2),d=h[0],x=h[1],y=null!==(t=d.get("search"))&&void 0!==t?t:"",_=(0,s.useRef)(!0);(0,s.useEffect)((function(){_.current&&y&&k(y)}),[y]),(0,s.useEffect)((function(){!y&&x({})}),[y,x]);var k=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.Wf)(n);case 3:e=t.sent,f(e.data.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}();return(0,l.jsxs)("div",{children:[(0,l.jsx)(m,{handleSearch:k,searchValue:y,setSearchParams:x,firstRender:_}),a&&(0,l.jsx)(v.Z,{movies:a})]})}}}]);
//# sourceMappingURL=332.8d070201.chunk.js.map