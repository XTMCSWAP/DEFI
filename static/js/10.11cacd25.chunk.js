(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[10],{668:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"i",(function(){return l})),t.d(n,"d",(function(){return d})),t.d(n,"e",(function(){return j})),t.d(n,"j",(function(){return f})),t.d(n,"f",(function(){return p})),t.d(n,"c",(function(){return x})),t.d(n,"b",(function(){return O})),t.d(n,"g",(function(){return h})),t.d(n,"h",(function(){return m}));var r=t(2),c=t.n(r),a=t(12),o=t(10),i=t.n(o),s=t(670),u=t(671),b=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.approve(t.options.address,s.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){var o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="0x0000000000000000000000000000000000000000",null!==(s=u.b.token)&&""!==s&&void 0!==s&&(o=s),e.abrupt("return",n.methods.deposit(t,new i.a(r).times(new i.a(10).pow(18)).toString(),o).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 4:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit(new i.a(t).times(new i.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:r,value:new i.a(t).times(new i.a(10).pow(18)).toString()}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.withdraw(t,new i.a(r).times(new i.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r,c){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"!==n.options.address){e.next=2;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 2:if("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"!==n.options.address){e.next=4;break}return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 4:return e.abrupt("return",n.methods.withdraw(new i.a(t).times(new i.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.emergencyWithdraw().send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(n,t,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0x0000000000000000000000000000000000000000",null!=(a=u.b.token)&&a,e.abrupt("return",n.methods.deposit(t,"0","0x0000000000000000000000000000000000000000").send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit("0").send({from:t}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(n,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.deposit().send({from:t,value:new i.a(0)}).on("transactionHash",(function(e){return e.transactionHash})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},671:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(10),c={myreferrerdata:null,token:"",tvl:new(t.n(r).a)(0)};function a(e){c.token=e}n.b=c},673:function(e,n,t){"use strict";var r=t(47),c=t(9),a=(t(0),t(3));function o(){var e=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return i=function(){return e},e}var s=a.e.div(i(),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),u=a.e.input(o(),(function(e){return e.theme.colors.primary}));n.a=function(e){var n=e.endAdornment,t=e.onChange,r=e.placeholder,a=e.startAdornment,o=e.value;return Object(c.jsxs)(s,{children:[!!a&&a,Object(c.jsx)(u,{placeholder:r,value:o,onChange:t}),!!n&&n]})}},675:function(e,n,t){"use strict";t.d(n,"a",(function(){return j})),t.d(n,"d",(function(){return f})),t.d(n,"c",(function(){return p})),t.d(n,"b",(function(){return x}));var r=t(2),c=t.n(r),a=t(12),o=t(0),i=t(61),s=t(670),u=t(50),b=t(103),l=t(668),d=t(665),j=function(e){var n=Object(u.b)(),t=Object(i.m)().account,r=Object(d.f)();return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(l.a)(e,r,t);case 3:return o=c.sent,n(Object(b.a)(t)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[t,n,e,r])}},f=function(e,n){var t=Object(u.b)(),r=Object(i.m)().account,s=Object(d.i)(n);return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function a(){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(l.a)(e,s,r);case 3:return o=c.sent,t(Object(b.e)(n,r)),c.abrupt("return",o);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[r,t,e,s,n])}},p=function(){var e=Object(i.m)().account,n=Object(d.a)(),t=Object(d.d)();return{onApprove:Object(o.useCallback)(Object(a.a)(c.a.mark((function r(){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(l.a)(n,t,e);case 3:return a=r.sent,r.abrupt("return",a);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[e,n,t])}},x=function(e,n){var t=Object(i.m)().account;return Object(o.useCallback)(Object(a.a)(c.a.mark((function r(){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.methods.approve(n,s.ethers.constants.MaxUint256).send({from:t});case 3:return a=r.sent,r.abrupt("return",a);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[t,n,e])}},676:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(47),c=t(9),a=t(0),o=t.n(a),i=t(3);function s(){var e=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return s=function(){return e},e}var u=i.e.div(s(),(function(e){return e.size}),(function(e){return e.size})),b=function(e){var n,t=e.size,r=void 0===t?"md":t,o=Object(a.useContext)(i.a).spacing;switch(r){case"lg":n=o[6];break;case"sm":n=o[2];break;case"md":default:n=o[4]}return Object(c.jsx)(u,{size:n})};function l(){var e=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return l=function(){return e},e}function d(){var e=Object(r.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return d=function(){return e},e}var j=i.e.div(d(),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),f=i.e.div(l()),p=function(e){var n=e.children,t=o.a.Children.toArray(n).length;return Object(c.jsx)(j,{children:o.a.Children.map(n,(function(e,n){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{children:e}),n<t-1&&Object(c.jsx)(b,{})]})}))})}},679:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return a}));var r=t(678);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(50);var c=new r.a(10512e3),a=3},685:function(e,n,t){"use strict";t.d(n,"b",(function(){return j})),t.d(n,"a",(function(){return f})),t.d(n,"c",(function(){return p}));var r=t(48),c=t(2),a=t.n(c),o=t(12),i=t(0),s=t(61),u=t(50),b=t(103),l=t(668),d=t(665),j=function(e){var n=Object(u.b)(),t=Object(s.m)().account,r=Object(d.f)();return{onReward:Object(i.useCallback)(Object(o.a)(a.a.mark((function c(){var o;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.b)(r,e,t);case 2:return o=c.sent,n(Object(b.a)(t)),c.abrupt("return",o);case 5:case"end":return c.stop()}}),c)}))),[t,n,e,r])}},f=function(e){var n=Object(s.m)().account,t=Object(d.f)();return{onReward:Object(i.useCallback)(Object(o.a)(a.a.mark((function c(){var o;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o=e.reduce((function(e,c){return[].concat(Object(r.a)(e),[Object(l.b)(t,c,n)])}),[]),c.abrupt("return",Promise.all(o));case 2:case"end":return c.stop()}}),c)}))),[n,e,t])}},p=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(u.b)(),r=Object(s.m)(),c=r.account,j=Object(d.i)(e),f=Object(d.f)(),p=Object(i.useCallback)(Object(o.a)(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==e){r.next=5;break}return r.next=3,Object(l.b)(f,0,c);case 3:r.next=12;break;case 5:if(!n){r.next=10;break}return r.next=8,Object(l.h)(j,c);case 8:r.next=12;break;case 10:return r.next=12,Object(l.g)(j,c);case 12:t(Object(b.g)(e,c)),t(Object(b.f)(e,c));case 14:case"end":return r.stop()}}),r)}))),[c,t,n,f,j,e]);return{onReward:p}}},687:function(e,n,t){"use strict";var r=t(673);t.d(n,"a",(function(){return r.a}))},692:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var r=t(47),c=t(9),a=(t(0),t(3)),o=t(678),i=t(36),s=t(167),u=t(687);function b(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return b=function(){return e},e}function l(){var e=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return l=function(){return e},e}function d(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return d=function(){return e},e}function j(){var e=Object(r.a)(["\n  width: ","px;\n"]);return j=function(){return e},e}function f(){var e=Object(r.a)([""]);return f=function(){return e},e}var p=a.e.div(f()),x=a.e.div(j(),(function(e){return e.theme.spacing[3]})),O=a.e.div(d()),h=a.e.div(l(),(function(e){return e.theme.colors.primary})),m=a.e.span(b(),(function(e){return e.theme.colors.primary})),v=function(e){var n=e.max,t=e.symbol,r=e.onChange,a=e.onSelectMax,b=e.value,l=e.depositFeeBP,d=void 0===l?0:l,j=Object(s.a)();return Object(c.jsxs)(p,{children:[Object(c.jsxs)(h,{children:[n.toLocaleString()," ",t," ",j(526,"Available")]}),Object(c.jsx)(u.a,{endAdornment:Object(c.jsxs)(O,{children:[Object(c.jsx)(m,{children:t}),Object(c.jsx)(x,{}),Object(c.jsx)("div",{children:Object(c.jsx)(i.e,{size:"sm",onClick:a,children:j(452,"Max")})})]}),onChange:r,placeholder:"0",value:b}),d>0?Object(c.jsxs)(h,{children:[j(10001,"Deposit Fee"),": ",new o.a(b||0).times(d/1e4).toString()," ",t]}):null]})}},698:function(e,n,t){"use strict";var r=t(9),c=t(47),a=(t(0),t(3)),o=t(36);function i(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return i=function(){return e},e}var s=a.e.div(i(),(function(e){return e.theme.colors.primary})),u=function(e){var n=e.onClick,t=e.expanded;return Object(r.jsxs)(s,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(r.jsx)(o.J,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(r.jsx)(o.o,{}):Object(r.jsx)(o.n,{})]})};u.defaultProps={expanded:!1},n.a=u},699:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return a}));var r=t(9),c=(t(0),t(36)),a=function(){return Object(r.jsx)(c.I,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.N,{}),children:"No Fees"})},o=function(){return Object(r.jsx)(c.I,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.N,{}),children:"Core"})},i=function(){return Object(r.jsx)(c.I,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.p,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.I,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.d,{}),children:"Binance"})}},700:function(e,n,t){"use strict";t.d(n,"b",(function(){return d}));var r=t(2),c=t.n(r),a=t(12),o=t(0),i=t(61),s=t(50),u=t(103),b=t(668),l=t(665),d=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),r=Object(i.m)(),d=r.account,j=Object(l.f)(),f=Object(l.i)(e),p=Object(o.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==e){r.next=5;break}return r.next=3,Object(b.i)(j,0,a,d);case 3:r.next=12;break;case 5:if(!n){r.next=10;break}return r.next=8,Object(b.e)(f,a,d);case 8:r.next=12;break;case 10:return r.next=12,Object(b.d)(f,a,d);case 12:t(Object(u.h)(e,d)),t(Object(u.f)(e,d));case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[d,t,n,j,f,e]);return{onStake:p}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.f)();return{onStake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.i)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},709:function(e,n,t){"use strict";var r=t(47);function c(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return e},e}var a=t(3).e.div(c());n.a=a},710:function(e,n,t){"use strict";t.d(n,"b",(function(){return j}));var r=t(2),c=t.n(r),a=t(12),o=t(0),i=t(61),s=t(50),u=t(103),b=t(668),l=t(665),d=[5,6,3,1,22,23],j=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.f)(),j=Object(l.i)(e),f=d.includes(e);return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i,s,l;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==e){c.next=7;break}return c.next=3,Object(b.j)(r,0,o,t);case 3:i=c.sent,console.info(i),c.next=18;break;case 7:if(!f){c.next=14;break}return c.next=10,Object(b.c)(j,o,t);case 10:s=c.sent,console.info(s),c.next=18;break;case 14:return c.next=16,Object(b.f)(j,o,t);case 16:l=c.sent,console.info(l);case 18:n(Object(u.h)(e,t)),n(Object(u.f)(e,t)),n(Object(u.g)(e,t));case 21:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,f,r,j,e])}};n.a=function(e){var n=Object(s.b)(),t=Object(i.m)().account,r=Object(l.f)();return{onUnstake:Object(o.useCallback)(function(){var o=Object(a.a)(c.a.mark((function a(o){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.j)(r,e,o,t);case 2:i=c.sent,n(Object(u.a)(t)),console.info(i);case 5:case"end":return c.stop()}}),a)})));return function(e){return o.apply(this,arguments)}}(),[t,n,r,e])}}},855:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return ze}));var r=t(9),c=t(13),a=t(17),o=t(47),i=t(0),s=t(27),u=t(50),b=t(3),l=t(10),d=t.n(l),j=t(61),f=t(36),p=t(679),x=t(709),O=t(169),h=t(106),m=t(128),v=t(103),k=t(23),g=t(167),w=t(698),y=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,r=e.tokenAddresses,c="BNB"===t?"ETH":n[56],a=r[56];return"".concat(c,"/").concat(a)};function C(){var e=Object(o.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(o.a)(["\n  margin-top: 24px;\n"]);return S=function(){return e},e}var T=b.e.div(S()),A=Object(b.e)(f.w)(C(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),q=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,a=e.totalValueFormated,o=e.lpLabel,i=e.quoteTokenAdresses,s=e.quoteTokenSymbol,u=e.tokenAddresses,b=Object(g.a)(),l=y({quoteTokenAdresses:i,quoteTokenSymbol:s,tokenAddresses:u});return Object(r.jsxs)(T,{children:[Object(r.jsxs)(f.q,{justifyContent:"space-between",children:[Object(r.jsxs)(f.J,{children:[b(316,"Stake"),":"]}),Object(r.jsx)(A,{href:n?"https://exchange.xtmcswap.app/#/swap/".concat(u[56]):"https://exchange.xtmcswap.app/#/add/".concat(l),children:o})]}),!c&&Object(r.jsxs)(f.q,{justifyContent:"space-between",children:[Object(r.jsxs)(f.J,{children:[b(23,"Total Liquidity"),":"]}),Object(r.jsx)(f.J,{children:a})]}),Object(r.jsx)(f.q,{justifyContent:"flex-start",children:Object(r.jsx)(f.v,{external:!0,href:t,bold:!1,children:b(356,"View on BscScan")})})]})},B=t(699);function J(){var e=Object(o.a)(["\n  margin-left: 4px;\n"]);return J=function(){return e},e}function I(){var e=Object(o.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return I=function(){return e},e}var P=Object(b.e)(f.q)(I()),D=Object(b.e)(f.I)(J()),H=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage),a=e.tokenSymbol,o=e.depositFee;Object(g.a)();return Object(r.jsxs)(P,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(r.jsx)(f.t,{src:"/images/farms/".concat(c,".png"),alt:a,width:64,height:64}),Object(r.jsxs)(f.q,{flexDirection:"column",alignItems:"flex-end",children:[Object(r.jsx)(f.q,{children:Object(r.jsx)(f.r,{mb:"4px",children:n})}),Object(r.jsxs)(f.q,{justifyContent:"center",children:[0===o?Object(r.jsx)(B.d,{}):null,Object(r.jsx)(D,{variant:"secondary",children:t})]})]})]})},F=t(2),z=t.n(F),M=t(12),L=t(686),E=t(672),N=t(675),X=t(700),Q=t(710),R=t(667),W=t(676),G=t(692),U=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,o=e.tokenName,s=void 0===o?"":o,u=e.depositFeeBP,b=void 0===u?0:u,l=Object(i.useState)(""),d=Object(a.a)(l,2),j=d[0],p=d[1],x=Object(i.useState)(!1),O=Object(a.a)(x,2),h=O[0],m=O[1],v=Object(g.a)(),k=Object(i.useMemo)((function(){return Object(R.b)(n)}),[n]),w=Object(i.useCallback)((function(e){p(e.currentTarget.value)}),[p]),y=Object(i.useCallback)((function(){p(k)}),[k,p]);return Object(r.jsxs)(f.A,{title:"".concat(v(316,"Deposit")," ").concat(s," Tokens"),onDismiss:c,children:[Object(r.jsx)(G.a,{value:j,onSelectMax:y,onChange:w,max:k,symbol:s,depositFeeBP:b}),Object(r.jsxs)(W.a,{children:[Object(r.jsx)(f.e,{variant:"secondary",onClick:c,children:v(462,"Cancel")}),Object(r.jsx)(f.e,{disabled:h,onClick:Object(M.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,t(j);case 3:m(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:h?v(488,"Pending Confirmation"):v(464,"Confirm")})]})]})},V=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,o=e.tokenName,s=void 0===o?"":o,u=Object(i.useState)(""),b=Object(a.a)(u,2),l=b[0],d=b[1],j=Object(i.useState)(!1),p=Object(a.a)(j,2),x=p[0],O=p[1],h=Object(g.a)(),m=Object(i.useMemo)((function(){return Object(R.b)(c)}),[c]),v=Object(i.useCallback)((function(e){d(e.currentTarget.value)}),[d]),k=Object(i.useCallback)((function(){d(m)}),[m,d]);return Object(r.jsxs)(f.A,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(r.jsx)(G.a,{onSelectMax:k,onChange:v,value:l,max:m,symbol:s}),Object(r.jsxs)(W.a,{children:[Object(r.jsx)(f.e,{variant:"secondary",onClick:t,children:h(462,"Cancel")}),Object(r.jsx)(f.e,{disabled:x,onClick:Object(M.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,n(l);case 3:O(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:x?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})};function $(){var e=Object(o.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return $=function(){return e},e}var _=b.e.div($()),K=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,o=e.pid,i=e.depositFeeBP,s=Object(g.a)(),u=Object(X.a)(o).onStake,b=Object(Q.a)(o).onUnstake,l=Object(R.a)(n),d=l.toLocaleString(),j=Object(f.Q)(Object(r.jsx)(U,{max:t,onConfirm:u,tokenName:c,depositFeeBP:i})),p=Object(a.a)(j,1)[0],x=Object(f.Q)(Object(r.jsx)(V,{max:n,onConfirm:b,tokenName:c})),O=Object(a.a)(x,1)[0];return Object(r.jsxs)(f.q,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(f.r,{color:0===l?"textDisabled":"text",children:d}),0===l?Object(r.jsx)(f.e,{onClick:p,children:s(999,"Stake")}):Object(r.jsxs)(_,{children:[Object(r.jsx)(f.s,{variant:"tertiary",onClick:O,mr:"6px",children:Object(r.jsx)(f.z,{color:"primary"})}),Object(r.jsx)(f.s,{variant:"tertiary",onClick:p,children:Object(r.jsx)(f.a,{color:"primary"})})]})]})},Y=t(683),Z=t(685);function ee(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return ee=function(){return e},e}var ne=b.e.div(ee()),te=function(e){var n=e.earnings,t=e.pid,c=Object(g.a)(),o=Object(i.useState)(!1),s=Object(a.a)(o,2),u=s[0],b=s[1],l=Object(Z.b)(t).onReward,d=Object(X.a)(t).onStake,j=Object(Y.c)(t),p=Object(R.a)(n),x=p.toLocaleString();return Object(r.jsxs)(f.q,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(f.r,{color:0===p?"textDisabled":"text",children:x}),Object(r.jsxs)(ne,{children:[8===t?Object(r.jsx)(f.e,{disabled:0===p||u||!1===j,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(M.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,d(p.toString());case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(r.jsx)(f.e,{disabled:0===p||u||!1===j,onClick:Object(M.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,l();case 3:b(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})};function re(){var e=Object(o.a)(["\n  padding-top: 16px;\n"]);return re=function(){return e},e}var ce=b.e.div(re()),ae=function(e){var n=e.farm,t=e.ethereum,c=e.account,o=Object(g.a)(),s=Object(i.useState)(!1),u=Object(a.a)(s,2),b=u[0],l=u[1],d=Object(h.a)(n.pid),j=d.pid,p=d.lpAddresses,x=d.tokenAddresses,O=d.isTokenOnly,m=d.depositFeeBP,v=Object(h.b)(j),k=v.allowance,w=v.tokenBalance,y=v.stakedBalance,C=v.earnings,S=p[56],T=x[56],A=n.lpSymbol.toUpperCase(),q=c&&k&&k.isGreaterThan(0),B=Object(i.useMemo)((function(){return O?Object(L.b)(t,T):Object(L.b)(t,S)}),[t,S,T,O]),J=Object(N.a)(B).onApprove,I=Object(i.useCallback)(Object(M.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,J();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[J]);return Object(r.jsxs)(ce,{children:[Object(r.jsxs)(f.q,{children:[Object(r.jsx)(f.J,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"XTMC"}),Object(r.jsx)(f.J,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Earned")})]}),Object(r.jsx)(te,{earnings:C,pid:j}),Object(r.jsxs)(f.q,{children:[Object(r.jsx)(f.J,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:A}),Object(r.jsx)(f.J,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:o(999,"Staked")})]}),c?q?Object(r.jsx)(K,{stakedBalance:y,tokenBalance:w,tokenName:A,pid:j,depositFeeBP:m}):Object(r.jsx)(f.e,{mt:"8px",fullWidth:!0,disabled:b,onClick:I,children:o(999,"Approve Contract")}):Object(r.jsx)(E.a,{mt:"8px",fullWidth:!0})]})},oe=function(e){var n,t=e.numberOfDays,r=e.farmApy/100,c=t/365,a=1e3/e.cakePrice,o=a*Math.pow(1+r/365,365*c);return n=o-a,Math.round(100*n)/100},ie=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)};function se(){var e=Object(o.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);return se=function(){return e},e}function ue(){var e=Object(o.a)(["\n  margin-bottom: '10px';\n"]);return ue=function(){return e},e}function be(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);return be=function(){return e},e}var le=b.e.div(be()),de=b.e.div(ue()),je=Object(b.e)(f.J)(se()),fe=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.quoteTokenAdresses,a=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(g.a)(),b=y({quoteTokenAdresses:c,quoteTokenSymbol:a,tokenAddresses:o}),l=s.times(new d.a(100)).toNumber(),j=1e3/i.toNumber(),p=oe({numberOfDays:1,farmApy:l,cakePrice:i}),x=oe({numberOfDays:7,farmApy:l,cakePrice:i}),O=oe({numberOfDays:30,farmApy:l,cakePrice:i}),h=oe({numberOfDays:365,farmApy:l,cakePrice:i});return Object(r.jsxs)(f.A,{title:"ROI",onDismiss:n,children:[Object(r.jsxs)(le,{children:[Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"Timeframe")})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"ROI")})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:u(999,"XTMC per $1000")})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{children:"1d"})}),Object(r.jsx)(de,{children:Object(r.jsxs)(f.J,{children:[ie({amountEarned:p,amountInvested:j}),"%"]})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{children:p})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{children:"7d"})}),Object(r.jsx)(de,{children:Object(r.jsxs)(f.J,{children:[ie({amountEarned:x,amountInvested:j}),"%"]})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{children:x})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{children:"30d"})}),Object(r.jsx)(de,{children:Object(r.jsxs)(f.J,{children:[ie({amountEarned:O,amountInvested:j}),"%"]})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{children:O})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{children:"365d(APY)"})}),Object(r.jsx)(de,{children:Object(r.jsxs)(f.J,{children:[ie({amountEarned:h,amountInvested:j}),"%"]})}),Object(r.jsx)(de,{children:Object(r.jsx)(f.J,{children:h})})]}),Object(r.jsx)(je,{fontSize:"12px",color:"textSubtle",children:u(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(r.jsx)(f.q,{justifyContent:"center",children:Object(r.jsxs)(f.w,{href:"https://exchange.xtmcswap.app/#/add/".concat(b),children:[u(999,"Get")," ",t]})})]})},pe=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,c=e.quoteTokenSymbol,o=e.tokenAddresses,i=e.cakePrice,s=e.apy,u=Object(f.Q)(Object(r.jsx)(fe,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:c,tokenAddresses:o,cakePrice:i,apy:s})),b=Object(a.a)(u,1)[0];return Object(r.jsx)(f.s,{onClick:b,variant:"text",size:"sm",ml:"4px",children:Object(r.jsx)(f.h,{})})};function xe(){var e=Object(o.a)(["\n  margin-top: 5px;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border: 1px solid #ff0050;\n  background: linear-gradient(#e25581,#ff0050);\n  border-radius: 16px;\n  color: #fff !important;\n  font-size: 14px;\n  font-weight: bold;\n  height: auto;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: pre-wrap;\n  place-content: center;\n  margin-bottom: 10px;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(o.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return Oe=function(){return e},e}function he(){var e=Object(o.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);return he=function(){return e},e}function me(){var e=Object(o.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);return me=function(){return e},e}function ve(){var e=Object(o.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return ve=function(){return e},e}function ke(){var e=Object(o.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return ke=function(){return e},e}var ge=Object(b.f)(ke()),we=b.e.div(ve(),ge),ye=b.e.div(me(),(function(e){return e.theme.card.background})),Ce=b.e.div(he(),(function(e){return e.theme.colors.borderColor})),Se=b.e.div(Oe(),(function(e){return e.expanded?"100%":"0px"})),Te=(b.e.div(xe()),function(e){var n=e.farm,t=e.removed,c=e.cakePrice,o=e.bnbPrice,s=e.ethereum,u=e.account,b=Object(g.a)(),l=Object(i.useState)(!1),j=Object(a.a)(l,2),p=j[0],x=j[1],O=n.lpSymbol.split(" ")[0].toLocaleLowerCase(),h=Object(i.useMemo)((function(){return n.lpTotalInQuoteToken?n.quoteTokenSymbol===k.b.BNB?o.times(n.lpTotalInQuoteToken):n.quoteTokenSymbol===k.b.CAKE?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[o,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),m=h?"$".concat(Number(h).toLocaleString(void 0,{maximumFractionDigits:0})):"-",v=n.lpSymbol,y=n.apy&&n.apy.times(new d.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),C=n.quoteTokenAdresses,S=n.quoteTokenSymbol,T=n.tokenAddresses,A=n.risk;return Object(r.jsxs)(ye,{children:["XTMC"===n.tokenSymbol&&Object(r.jsx)(we,{}),Object(r.jsx)(H,{lpLabel:v,multiplier:n.multiplier,risk:A,depositFee:n.depositFeeBP,farmImage:O,tokenSymbol:n.tokenSymbol}),!t&&Object(r.jsxs)(f.q,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsxs)(f.J,{children:[b(352,"APR"),":"]}),Object(r.jsx)(f.J,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(pe,{lpLabel:v,quoteTokenAdresses:C,quoteTokenSymbol:S,tokenAddresses:T,cakePrice:c,apy:n.apy}),y,"%"]}):Object(r.jsx)(f.G,{height:24,width:80})})]}),Object(r.jsxs)(f.q,{justifyContent:"space-between",children:[Object(r.jsxs)(f.J,{children:[b(318,"Earn"),":"]}),Object(r.jsx)(f.J,{bold:!0,children:"XTMC"})]}),Object(r.jsxs)(f.q,{justifyContent:"space-between",children:[Object(r.jsxs)(f.J,{children:[b(10001,"Deposit Fee"),":"]}),Object(r.jsxs)(f.J,{bold:!0,children:[n.depositFeeBP/100,"%"]})]}),Object(r.jsxs)(f.q,{justifyContent:"space-between",children:[Object(r.jsxs)(f.J,{children:[b(999,"Harvest Lockup:"),":"]}),Object(r.jsxs)(f.J,{bold:!0,children:[n.harvestInterval/3600,"Hour(s)"]})]}),Object(r.jsx)(ae,{farm:n,ethereum:s,account:u}),Object(r.jsx)(Ce,{}),Object(r.jsx)(w.a,{onClick:function(){return x(!p)},expanded:p}),Object(r.jsx)(Se,{expanded:p,children:Object(r.jsx)(q,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:m,lpLabel:v,quoteTokenAdresses:C,quoteTokenSymbol:S,tokenAddresses:T})})]})}),Ae=t(64);function qe(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  @media (max-width: 768px) {\n    margin-bottom : 10px;\n  }\n  "," {\n    margin-left: 8px;\n  }\n"]);return qe=function(){return e},e}function Be(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n  @media (max-width: 768px) {\n    display: block;\n    text-align: -webkit-center;\n  }\n"]);return Be=function(){return e},e}var Je=function(e){var n=e.stakedOnly,t=e.setStakedOnly,c=Object(s.g)(),a=c.url,o=(c.isExact,Object(g.a)()),i=Object(s.f)();return Object(r.jsxs)(Ie,{children:[Object(r.jsxs)(Pe,{children:[Object(r.jsx)(f.M,{checked:n,onChange:function(){return t(!n)}}),Object(r.jsxs)(f.J,{children:[" ",o(699,"Staked only")]})]}),Object(r.jsxs)(f.f,{activeIndex:function(){switch(i.pathname){case"/farms":case"/staking":return 0;case"/farms/oct":case"/staking/oct":return 1;case"/farms/partner":case"/staking/partner":return 2;case"/farms/history":case"/staking/history":return 3;default:return 0}}(),size:"sm",variant:"subtle",children:[Object(r.jsx)(f.g,{as:Ae.b,to:"".concat(a),children:o(9999,"All")}),Object(r.jsx)(f.g,{as:Ae.b,to:"".concat(a,"/oct"),children:o(9999,"XTMC")}),Object(r.jsx)(f.g,{as:Ae.b,to:"".concat(a,"/partner"),children:o(9999,"Partner")}),Object(r.jsx)(f.g,{as:Ae.b,to:"".concat(a,"/history"),children:o(700,"Inactive")})]})]})},Ie=b.e.div(Be()),Pe=b.e.div(qe(),f.J);function De(){var e=Object(o.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"]);return De=function(){return e},e}var He=b.e.div(De(),(function(e){return e.theme.colors.textSubtle}));function Fe(){var e=Object(o.a)(["\n  background-image: url(/images/footerbg.svg);\n  background-position: center bottom;\n  background-repeat: no-repeat;\n  padding-bottom: 29%;\n  background-size: cover;\n"]);return Fe=function(){return e},e}b.e.div(Fe());var ze=function(e){var n=Object(s.g)().path,t=Object(g.a)(),o=Object(h.c)(),b=Object(h.g)(),l=Object(h.f)(),w=Object(j.m)(),y=w.account,C=w.ethereum,S=e.tokenMode,T=Object(u.b)(),A=Object(m.a)().fastRefresh;Object(i.useEffect)((function(){y&&T(Object(v.a)(y))}),[y,T,A]);var q=Object(i.useState)(!1),B=Object(a.a)(q,2),J=B[0],I=B[1],P=o.filter((function(e){return!!e.isTokenOnly===!!S&&"0X"!==e.multiplier})),D=o.filter((function(e){return!!e.isTokenOnly===!!S&&"0X"===e.multiplier})),H=o.filter((function(e){return!!e.isTokenOnly===!!S&&"0X"!==e.multiplier&&!0===e.isPartner})),F=o.filter((function(e){return!!e.isTokenOnly===!!S&&"0X"!==e.multiplier&&e.lpSymbol.includes("XTMC")})),z=P.filter((function(e){return e.userData&&new d.a(e.userData.stakedBalance).isGreaterThan(0)})),M=H.filter((function(e){return e.userData&&new d.a(e.userData.stakedBalance).isGreaterThan(0)})),L=F.filter((function(e){return e.userData&&new d.a(e.userData.stakedBalance).isGreaterThan(0)})),E=Object(i.useCallback)((function(e,n){return e.map((function(e){var n=new d.a(e.xtmcPerBlock||1).times(new d.a(e.poolWeight)).div(new d.a(10).pow(18)).times(p.a),t=b.times(n),r=new d.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===k.b.BNB&&(r=r.times(l)),r.comparedTo(0)>0&&(t=t.div(r)),Object(c.a)(Object(c.a)({},e),{},{apy:t})})).map((function(e){return Object(r.jsx)(Te,{farm:e,removed:n,bnbPrice:l,cakePrice:b,ethereum:C,account:y},e.pid)}))}),[l,y,b,C]);return Object(r.jsx)("div",{children:Object(r.jsxs)(O.a,{children:[Object(r.jsx)(f.r,{as:"h1",size:"xl",color:"primary",mb:"50px",style:{textAlign:"center"},children:S?t(10002,"Stake tokens to earn XTMC"):t(320,"Stake LP tokens to earn XTMC")}),Object(r.jsx)(Je,{stakedOnly:J,setStakedOnly:I}),Object(r.jsxs)("div",{children:[Object(r.jsx)(He,{}),Object(r.jsxs)(x.a,{children:[Object(r.jsx)(s.a,{exact:!0,path:"".concat(n),children:E(J?z:P,!1)}),Object(r.jsx)(s.a,{exact:!0,path:"".concat(n,"/oct"),children:E(J?L:F,!1)}),Object(r.jsx)(s.a,{exact:!0,path:"".concat(n,"/partner"),children:E(J?M:H,!1)}),Object(r.jsx)(s.a,{exact:!0,path:"".concat(n,"/history"),children:E(D,!0)})]})]})]})})}}}]);