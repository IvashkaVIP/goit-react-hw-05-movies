"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[54],{634:function(e,n,t){t.d(n,{UF:function(){return p},Wf:function(){return d},fh:function(){return v}});var r=t(861),c=t(757),i=t.n(c),a=t(243),s="9d709850c7590845ffb60644b29d6f51",o="https://api.themoviedb.org/3/",u="trending/all/",l="search/movie";function p(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.Z)("".concat(o).concat(u,"day?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.Z)("".concat(o).concat(l,"?api_key=").concat(s,"&query=").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.Z)("".concat(o,"movie/").concat(n,"?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},54:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),c=t(439),i=t(757),a=t.n(i),s=t(634),o=t(791),u=t(689),l=t(87),p=t(184),h=function(e){var n=e.movie,t=n.poster_path,r=n.name,c=n.title,i=n.genres,a=n.overview,s=n.vote_average,o=t?"https://image.tmdb.org/t/p/w300".concat(t):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";return(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:o,alt:null!==c&&void 0!==c?c:r,width:"300"}),(0,p.jsx)("h1",{children:null!==c&&void 0!==c?c:r}),(0,p.jsxs)("p",{children:["User Score: ",Math.round(10*s),"% "]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:a}),(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsx)("p",{children:i.map((function(e){return e.name})).join("  ")})]})},d=function(){var e,n,t=(0,o.useState)(),i=(0,c.Z)(t,2),d=i[0],f=i[1],v=(0,u.TH)(),x=(0,o.useRef)(null!==(e=null===(n=v.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),m=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.fh)(m);case 3:n=e.sent,f(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{children:[" Movie Details ",m]}),(0,p.jsx)(l.rU,{to:x.current,children:"Comeback"}),d&&(0,p.jsx)(h,{movie:d}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"cast",children:"Cast MovieDetails"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"reviews",children:"Reviews MovieDetails"})})]}),(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=54.1c6d7ec7.chunk.js.map