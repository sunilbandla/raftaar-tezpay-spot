import{_ as t,a as n,b as e,c as r,i as a,s as c,d as o,S as s,e as i,t as u,f,g as l,h,j as p,k as v,l as m,m as y,n as d,o as g,p as R,q as $,r as _,u as N,v as x,w,x as E,y as I,z as P,A as j,B as D,C as M}from"./client.3bd801ac.js";function b(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(r){var o=n(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return e(this,a)}}function z(t,n,e){var r=t.slice();return r[1]=n[e],r}function A(t){var n,e,r,a,c,o,s,R,$,_,N,x,w,E,I=t[1].amount+"",P=t[1].payerName+"",j=t[1].payeeName+"",D=t[1].tipAmount+"",M=t[1].payeeMerchantType+"",b=t[1].payeeMerchantName+"";return{c:function(){n=i("li"),e=u("INR "),r=u(I),a=u("\n      from "),c=u(P),o=u(" to "),s=u(j),R=u("\n      including INR "),$=u(D),_=u("\n      for "),N=u(M),x=u(" at "),w=u(b),E=f()},l:function(t){n=l(t,"LI",{});var i=h(n);e=p(i,"INR "),r=p(i,I),a=p(i,"\n      from "),c=p(i,P),o=p(i," to "),s=p(i,j),R=p(i,"\n      including INR "),$=p(i,D),_=p(i,"\n      for "),N=p(i,M),x=p(i," at "),w=p(i,b),E=v(i),i.forEach(m)},m:function(t,i){y(t,n,i),d(n,e),d(n,r),d(n,a),d(n,c),d(n,o),d(n,s),d(n,R),d(n,$),d(n,_),d(n,N),d(n,x),d(n,w),d(n,E)},p:function(t,n){1&n&&I!==(I=t[1].amount+"")&&g(r,I),1&n&&P!==(P=t[1].payerName+"")&&g(c,P),1&n&&j!==(j=t[1].payeeName+"")&&g(s,j),1&n&&D!==(D=t[1].tipAmount+"")&&g($,D),1&n&&M!==(M=t[1].payeeMerchantType+"")&&g(N,M),1&n&&b!==(b=t[1].payeeMerchantName+"")&&g(w,b)},d:function(t){t&&m(n)}}}function F(t){for(var n,e,r,a,c=t[0].transactions,o=[],s=0;s<c.length;s+=1)o[s]=A(z(t,c,s));return{c:function(){n=i("h1"),e=u("Recent transactions"),r=f(),a=i("ul");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){n=l(t,"H1",{});var c=h(n);e=p(c,"Recent transactions"),c.forEach(m),r=v(t),a=l(t,"UL",{class:!0});for(var s=h(a),i=0;i<o.length;i+=1)o[i].l(s);s.forEach(m),this.h()},h:function(){R(a,"class","svelte-esxtna")},m:function(t,c){y(t,n,c),d(n,e),y(t,r,c),y(t,a,c);for(var s=0;s<o.length;s+=1)o[s].m(a,null)},p:function(t,n){var e=$(n,1)[0];if(1&e){var r;for(c=t[0].transactions,r=0;r<c.length;r+=1){var s=z(t,c,r);o[r]?o[r].p(s,e):(o[r]=A(s),o[r].c(),o[r].m(a,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=c.length}},i:_,o:_,d:function(t){t&&m(n),t&&m(r),t&&m(a),N(o,t)}}}function S(t,n,e){var r=n.recent_transactions;return t.$$set=function(t){"recent_transactions"in t&&e(0,r=t.recent_transactions)},[r]}var T=function(n){t(i,s);var e=b(i);function i(t){var n;return r(this,i),n=e.call(this),a(o(n),t,S,F,c,{recent_transactions:0}),n}return i}();function k(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(r){var o=n(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return e(this,a)}}function H(t){var n,e,r,a,c,o;return c=new T({props:{recent_transactions:t[0]}}),{c:function(){n=f(),e=i("h5"),r=u("Pay Feed"),a=f(),w(c.$$.fragment),this.h()},l:function(t){E('[data-svelte="svelte-1gezcvh"]',document.head).forEach(m),n=v(t),e=l(t,"H5",{class:!0});var o=h(e);r=p(o,"Pay Feed"),o.forEach(m),a=v(t),I(c.$$.fragment,t),this.h()},h:function(){document.title="Tez Feed",R(e,"class","svelte-f1p3m9")},m:function(t,s){y(t,n,s),y(t,e,s),d(e,r),y(t,a,s),P(c,t,s),o=!0},p:function(t,n){var e={};1&$(n,1)[0]&&(e.recent_transactions=t[0]),c.$set(e)},i:function(t){o||(j(c.$$.fragment,t),o=!0)},o:function(t){D(c.$$.fragment,t),o=!1},d:function(t){t&&m(n),t&&m(e),t&&m(a),M(c,t)}}}var L=function(t,n,e,r){return new(e||(e=Promise))((function(a,c){function o(t){try{i(r.next(t))}catch(t){c(t)}}function s(t){try{i(r.throw(t))}catch(t){c(t)}}function i(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,s)}i((r=r.apply(t,n||[])).next())}))};function q(){return L(this,void 0,void 0,x.mark((function t(){return x.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.fetch("/recent_transactions.json").then((function(t){return t.json()})).then((function(t){return{recent_transactions:t}})));case 1:case"end":return t.stop()}}),t,this)})))}function B(t,n,e){var r=n.recent_transactions;return t.$$set=function(t){"recent_transactions"in t&&e(0,r=t.recent_transactions)},[r]}var C=function(n){t(i,s);var e=k(i);function i(t){var n;return r(this,i),n=e.call(this),a(o(n),t,B,H,c,{recent_transactions:0}),n}return i}();export default C;export{q as preload};
