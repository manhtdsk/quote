(this.webpackJsonpquote=this.webpackJsonpquote||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(4),u=n.n(c),r=(n(16),n(10)),a=(n(17),n(5)),s=Object(a.b)({name:"quote",initialState:{quoteValue:"",quoteAuthor:""},reducers:{newQuote:function(e,t){e.quoteValue=t.payload},newAuthor:function(e,t){e.quoteAuthor=t.payload}}}),i=s.actions,l=i.newQuote,f=i.newAuthor,d=function(){return function(e){fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(t){var n=Math.floor(1643*Math.random());e(l(t[n].text)),e(f(t[n].author))}))}},h=s.reducer,j=n(3),b=n(1);var x=function(){var e=Object(j.c)((function(e){return e.quote.quoteValue})),t=Object(j.c)((function(e){return e.quote.quoteAuthor})),n=Object(o.useState)("red"),c=Object(r.a)(n,2),u=c[0],a=c[1],s=Object(o.useState)(!0),i=Object(r.a)(s,2),l=i[0],f=i[1],h=Object(j.b)();return Object(o.useEffect)((function(){h(d())}),[h]),Object(b.jsx)("div",{style:{backgroundColor:"".concat(u)},className:"App h-screen flex flex-row justify-center items-center",children:Object(b.jsxs)("span",{className:"bg-green-50 rounded-lg shadow-lg h-auto w  w-2/5 p-10",children:[Object(b.jsxs)("div",{className:" h-auto",children:[Object(b.jsxs)("h1",{onAnimationEnd:function(){return f(!1)},className:"".concat(l?"fade":""," flex font-serif text-4xl"),children:[Object(b.jsx)("img",{className:"h-8 p-1 ",src:"left-quote.png"}),e," "]}),Object(b.jsxs)("p",{onAnimationEnd:function(){return f(!1)},className:"".concat(l?"fade":""," font-light text-xl flex flex-row-reverse m-6 "),children:["~~",t]})]}),Object(b.jsx)("div",{className:"flex flex-row-reverse mt-6",children:Object(b.jsx)("button",{style:{backgroundColor:"".concat(u)},className:"btn shadow-md text-xl p-2 pl-4 pr-4 rounded-md focus:outline-none",onClick:function(){h(d()),function(){var e="#";e+=Math.random().toString(16).slice(2,8),a(e),console.log(e),f(!0)}()},children:"New quote"})})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,u=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),u(e),r(e)}))},p=Object(a.a)({reducer:{quote:h}});u.a.render(Object(b.jsx)(j.a,{store:p,children:Object(b.jsx)(x,{})}),document.getElementById("root")),m()}},[[25,1,2]]]);
//# sourceMappingURL=main.79632b86.chunk.js.map