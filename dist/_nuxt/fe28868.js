(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(n,e,t){"use strict";var M=t(2),o=t(194),r=t.n(o);M.default.use(r.a)},197:function(n,e,t){"use strict";var M={name:"Navbar"},o=t(25),component=Object(o.a)(M,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"\n    z-10\n    fixed\n    top-0\n    left-0\n    w-full\n    px-24\n    h-20\n    flex\n    justify-between\n    items-center\n  "},[t("LazyImage",{attrs:{width:"56",height:"32",src:"navbar/logo.svg"}}),n._v(" "),t("div",{staticClass:"h-4 flex flex-col justify-between w-9"},n._l(2,(function(n){return t("div",{key:n,staticClass:"w-full bg-white",staticStyle:{height:"3px"}})})),0)],1)}),[],!1,null,null,null),r=component.exports;installComponents(component,{LazyImage:t(198).default});var c={components:{Navbar:r}},I=Object(o.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("Navbar"),n._v(" "),t("Nuxt")],1)}),[],!1,null,null,null);e.a=I.exports},198:function(n,e,t){"use strict";t.r(e);var M={name:"LazyImage",props:{src:{type:String,default:""},width:{type:String,default:""},height:{type:String,default:""},alt:{type:String,default:""}}},o=t(25),component=Object(o.a)(M,(function(){var n=this,e=n.$createElement;return(n._self._c||e)("img",{staticClass:"lazyload overflow-hidden",attrs:{"data-size":"auto","data-src":t(297)("./"+n.src),width:n.width?n.width+"px":"",height:n.height?n.height+"px":"",alt:n.alt}})}),[],!1,null,null,null);e.default=component.exports},199:function(n,e,t){n.exports=t.p+"img/1-md.e940056.png"},200:function(n,e,t){n.exports=t.p+"img/2-md.fbfd5c2.png"},201:function(n,e,t){n.exports=t.p+"img/3-md.99fb285.png"},204:function(n,e,t){n.exports=t.p+"img/1.893a1a9.png"},205:function(n,e,t){n.exports=t.p+"img/2.99220e6.png"},206:function(n,e,t){n.exports=t.p+"img/3.702ed9c.png"},207:function(n,e,t){n.exports=t.p+"img/4.a71a82c.png"},208:function(n,e,t){n.exports=t.p+"img/5.7a06734.png"},209:function(n,e,t){n.exports=t.p+"img/6.8941e0e.png"},210:function(n,e,t){n.exports=t.p+"img/7.175c0dc.png"},211:function(n,e,t){n.exports=t.p+"img/1.3853100.png"},212:function(n,e,t){n.exports=t.p+"img/2.d48b98c.png"},213:function(n,e,t){n.exports=t.p+"img/3.d5c8ef7.png"},214:function(n,e,t){n.exports=t.p+"img/1.aa883c7.png"},215:function(n,e,t){n.exports=t.p+"img/2.19fb614.png"},216:function(n,e,t){n.exports=t.p+"img/3.c6e999b.png"},217:function(n,e,t){n.exports=t.p+"img/4.c021d90.png"},218:function(n,e,t){n.exports=t.p+"img/5.1e2c3d8.png"},219:function(n,e,t){n.exports=t.p+"img/6.851b899.png"},220:function(n,e,t){n.exports=t.p+"img/7.184e991.png"},221:function(n,e,t){n.exports=t.p+"img/process-md.ec9dd06.png"},222:function(n,e,t){t(223),n.exports=t(224)},285:function(n,e,t){var content=t(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(48).default)("af54aa6c",content,!0,{sourceMap:!1})},286:function(n,e,t){var M=t(47)((function(i){return i[1]}));M.push([n.i,'/*purgecss start ignore*/\n\nbody{\n  font-family:"Montserrat"\n}\n\n.lazyload,.lazyloading{\n  opacity:0;\n  transition:opacity .4s!important\n}\n\n.lazyloaded{\n  opacity:1;\n  transition:opacity .4s!important\n}\n\n.main-container{\n  max-width:1920px;\n  margin:auto;\n  overflow:hidden\n}\n\n/*purgecss end ignore*/',""]),M.locals={},n.exports=M},287:function(n,e,t){var content=t(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(48).default)("5c55e90a",content,!0,{sourceMap:!1})},288:function(n,e,t){var M=t(47),o=t(289),r=t(290),c=t(291),I=t(292),N=t(293),d=t(294),D=M((function(i){return i[1]})),x=o(r),l=o(c),j=o(I),f=o(N),T=o(d);D.push([n.i,'/*purgecss start ignore*/\n\n@font-face{\n  font-family:"Montserrat";\n\n  src:url('+x+') format("truetype");\n\n  font-weight:300\n}\n\n@font-face{\n  font-family:"Montserrat";\n\n  src:url('+l+') format("truetype");\n\n  font-weight:400\n}\n\n@font-face{\n  font-family:"Montserrat";\n\n  src:url('+j+') format("truetype");\n\n  font-weight:500\n}\n\n@font-face{\n  font-family:"Montserrat";\n\n  src:url('+f+') format("truetype");\n\n  font-weight:600\n}\n\n@font-face{\n  font-family:"Montserrat";\n\n  src:url('+T+') format("truetype");\n\n  font-weight:700\n}\n\n/*purgecss end ignore*/',""]),D.locals={},n.exports=D},290:function(n,e,t){n.exports=t.p+"fonts/Montserrat-Thin.e8ecb9f.ttf"},291:function(n,e,t){n.exports=t.p+"fonts/Montserrat-Regular.ac98a5f.ttf"},292:function(n,e,t){n.exports=t.p+"fonts/Montserrat-Medium.3a09173.ttf"},293:function(n,e,t){n.exports=t.p+"fonts/Montserrat-SemiBold.04af9a9.ttf"},294:function(n,e,t){n.exports=t.p+"fonts/Montserrat-Bold.63fae50.ttf"},297:function(n,e,t){var map={"./index/advantages/arrow.svg":298,"./index/cases/1.png":204,"./index/cases/2.png":205,"./index/cases/3.png":206,"./index/cases/4.png":207,"./index/cases/5.png":208,"./index/cases/6.png":209,"./index/cases/7.png":210,"./index/cases/arrow-icon.svg":299,"./index/deals/1-md.png":199,"./index/deals/1.png":211,"./index/deals/2-md.png":200,"./index/deals/2.png":212,"./index/deals/3-md.png":201,"./index/deals/3.png":213,"./index/header/arrow-down.svg":300,"./index/header/header-bg.png":301,"./index/partners/1.svg":302,"./index/partners/2.svg":303,"./index/partners/3.svg":304,"./index/partners/4.svg":305,"./index/partners/5.svg":306,"./index/partners/qoutes.svg":307,"./index/processes/1.png":214,"./index/processes/2.png":215,"./index/processes/3.png":216,"./index/processes/4.png":217,"./index/processes/5.png":218,"./index/processes/6.png":219,"./index/processes/7.png":220,"./index/processes/arrow-down.svg":308,"./index/processes/process-md.png":221,"./index/reviews/arrow-down.svg":309,"./index/reviews/arrow-left.svg":310,"./index/reviews/arrow-right.svg":311,"./index/reviews/person.png":312,"./index/reviews/russia-icon.png":313,"./index/reviews/uralsib-icon.png":314,"./index/solutions/1.png":315,"./index/solutions/2.png":316,"./index/solutions/3.png":317,"./index/solutions/solution-arrow.svg":318,"./index/stack/stack-bg.png":319,"./navbar/logo.svg":320};function M(n){var e=o(n);return t(e)}function o(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}M.keys=function(){return Object.keys(map)},M.resolve=o,n.exports=M,M.id=297},298:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjkwMjc2MiA5LjkyODE1TDguMzcxNTYgMi40NTkzNkwwLjg2MDMyMSAyLjQ1OTM1TDAuODYwMzI0IDAuNzAzMTMyTDExLjM2OTYgMC43MDMxNDJMMTEuMzY5NiAxMS4yMTI0TDkuNjEzNCAxMS4yMTI0TDkuNjEzNCAzLjcwMTJMMi4xNDQ2IDExLjE3TDAuOTAyNzYyIDkuOTI4MTVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},299:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNjg3ODA4IDkuMTk1NUw5LjM1MDA2IDAuODQzMjI1TTkuMzUwMDYgMC44NDMyMjVMOS4zNTAwNiA5LjE5NTQ1TTkuMzUwMDYgMC44NDMyMjVMMC45OTc3NzQgMC44NDMxNjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4wNDI1OCIvPgo8L3N2Zz4K"},300:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MC4xNDQ1IDExNC40OTNMNjAuMTQ0NSA2TTYwLjE0NDUgMTE0LjQ5M0w4Ny4yODkxIDg3LjM0ODVNNjAuMTQ0NSAxMTQuNDkzTDMyLjk5OTkgODcuMzQ4NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI3Ii8+Cjwvc3ZnPgo="},301:function(n,e,t){n.exports=t.p+"img/header-bg.193c4f1.png"},302:function(n,e,t){n.exports=t.p+"img/1.7f9f7e3.svg"},303:function(n,e,t){n.exports=t.p+"img/2.20efcd0.svg"},304:function(n,e,t){n.exports=t.p+"img/3.2e48ae1.svg"},305:function(n,e,t){n.exports=t.p+"img/4.bb54a8e.svg"},306:function(n,e,t){n.exports=t.p+"img/5.7f9f7e3.svg"},307:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0NiA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEgxOC40NzA4VjE4LjI0MThDMTguNDcwOCAyMy44NTg0IDE3LjA3OSAyOC40OTgyIDE0LjI5NTQgMzIuMTYxMkMxMS41NTkgMzUuODI0MiA3LjU0ODcyIDM4LjQzNzEgMi4yNjQ2MiA0MEwwLjA3MDc2OTIgMzMuMTEzNkMxLjg2MzU5IDMyLjQ3ODYgMy4zNDk3NCAzMS43OTQ5IDQuNTI5MjMgMzEuMDYyM0M1LjcwODcyIDMwLjM3ODUgNi42NTIzMSAyOS41NzI3IDcuMzYgMjguNjQ0N0M4LjA2NzY5IDI3Ljc2NTYgOC41NjMwOCAyNi43Mzk5IDguODQ2MTUgMjUuNTY3OEM5LjEyOTIzIDI0LjM5NTYgOS4yNzA3NyAyMy4wMjgxIDkuMjcwNzcgMjEuNDY1MkgwVjBaTTI3LjUyOTIgMEg0NlYxOC4yNDE4QzQ2IDIzLjg1ODQgNDQuNjA4MiAyOC40OTgyIDQxLjgyNDYgMzIuMTYxMkMzOS4wODgyIDM1LjgyNDIgMzUuMDc3OSAzOC40MzcxIDI5Ljc5MzggNDBMMjcuNiAzMy4xMTM2QzI5LjM5MjggMzIuNDc4NiAzMC44NzkgMzEuNzk0OSAzMi4wNTg1IDMxLjA2MjNDMzMuMjM3OSAzMC4zNzg1IDM0LjE4MTUgMjkuNTcyNyAzNC44ODkyIDI4LjY0NDdDMzUuNTk2OSAyNy43NjU2IDM2LjA5MjMgMjYuNzM5OSAzNi4zNzU0IDI1LjU2NzhDMzYuNjU4NSAyNC4zOTU2IDM2LjggMjMuMDI4MSAzNi44IDIxLjQ2NTJIMjcuNTI5MlYwWiIgZmlsbD0iIzI2MjYyNiIvPgo8L3N2Zz4K"},308:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjU2NzY2IDAuNjY0MTg0TDYuNTY3NjYgMTEuMjI2N0wxLjI1NjQxIDUuOTE1NDFMMC4wMTQ1NzQ5IDcuMTU3MjVMNy40NDU3NyAxNC41ODg0TDE0Ljg3NyA3LjE1NzI1TDEzLjYzNTEgNS45MTU0MUw4LjMyMzg4IDExLjIyNjdMOC4zMjM4OCAwLjY2NDE4N0w2LjU2NzY2IDAuNjY0MTg0WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},309:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjU2ODY0IDAuNjY0MDYyTDYuNTY4NjQgMTEuMjI2NUwxLjI1NzM4IDUuOTE1MjlMMC4wMTU1NTE1IDcuMTU3MTNMNy40NDY3NSAxNC41ODgzTDE0Ljg3NzkgNy4xNTcxM0wxMy42MzYxIDUuOTE1MjlMOC4zMjQ4NiAxMS4yMjY1TDguMzI0ODYgMC42NjQwNjVMNi41Njg2NCAwLjY2NDA2MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},310:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC40MDkyIDYuNzQ3ODNMMy44NDY3MSA2Ljc0Nzg0TDkuMTU3OTUgMS40MzY1OEw3LjkxNjExIDAuMTk0NzUxTDAuNDg0OTI5IDcuNjI1OTVMNy45MTYxMiAxNS4wNTcxTDkuMTU3OTUgMTMuODE1M0wzLjg0NjcxIDguNTA0MDZMMTQuNDA5MiA4LjUwNDA1TDE0LjQwOTIgNi43NDc4M1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},311:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjQ4NDM3NSA2Ljc0Nzg0TDExLjA0NjggNi43NDc4NEw1LjczNTYgMS40MzY1OEw2Ljk3NzQ0IDAuMTk0NzUxTDE0LjQwODYgNy42MjU5NUw2Ljk3NzQ0IDE1LjA1NzFMNS43MzU2IDEzLjgxNTNMMTEuMDQ2OCA4LjUwNDA2TDAuNDg0Mzc3IDguNTA0MDZMMC40ODQzNzUgNi43NDc4NFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},312:function(n,e,t){n.exports=t.p+"img/person.ed1ca35.png"},313:function(n,e,t){n.exports=t.p+"img/russia-icon.92b86de.png"},314:function(n,e,t){n.exports=t.p+"img/uralsib-icon.b9a7126.png"},315:function(n,e,t){n.exports=t.p+"img/1.16beeb2.png"},316:function(n,e,t){n.exports=t.p+"img/2.cf8c9f5.png"},317:function(n,e,t){n.exports=t.p+"img/3.285c09b.png"},318:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjkwMjc2MiA5LjkyODE1TDguMzcxNTYgMi40NTkzNkwwLjg2MDMyMSAyLjQ1OTM1TDAuODYwMzI0IDAuNzAzMTMyTDExLjM2OTYgMC43MDMxNDJMMTEuMzY5NiAxMS4yMTI0TDkuNjEzNCAxMS4yMTI0TDkuNjEzNCAzLjcwMTJMMi4xNDQ2IDExLjE3TDAuOTAyNzYyIDkuOTI4MTVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},319:function(n,e,t){n.exports=t.p+"img/stack-bg.79981af.png"},320:function(n,e,t){n.exports=t.p+"img/logo.788d18e.svg"},321:function(n,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return M})),t.d(e,"mutations",(function(){return o}));var M=function(){return{indexBgColor:"black"}},o={changeBgColor:function(n,e){n.indexBgColor=e}}}},[[222,3,1,4]]]);