import{d as p,i as d,r as c,L as F,G as l,o as n,c as f,a as s,b as r,e as E,n as b,u as _,t as a,g as h,F as B,T as C,f as k,_ as y}from"./index.f1573a6d.js";const w="/mini-games/games/link-game/icons/close.png",A={class:"game-setting-modal"},L={class:"game-setting-container"},S={class:"header"},G={class:"wrapper"},I={class:"list"},x=["onClick"],$={class:"row"},D={class:"value"},N={class:"row"},T={class:"value"},V={class:"row"},j={class:"value"},z={class:"row"},K={class:"value"},M={class:"row"},O={class:"value"},P=p({__name:"GameSetting",emits:["close"],setup(q,{emit:v}){const m=v,i=d("currentLevel",c(F.easy)),u=d("gameStatus",c(l.finished)),g=o=>{u.value=l.finished,i.value=o;try{localStorage.setItem(k,`${o}`)}catch{}m("close"),Promise.resolve().then(()=>{u.value=l.playing})};return(o,e)=>(n(),f(C,{to:"body"},[s("div",A,[s("section",L,[s("header",S,[e[2]||(e[2]=s("h2",{class:"title"},"\u96BE\u5EA6\u8BBE\u7F6E",-1)),s("button",{class:"btn btn-close",onClick:e[0]||(e[0]=t=>o.$emit("close"))},e[1]||(e[1]=[s("img",{src:w,width:"32"},null,-1)]))]),s("div",G,[s("ul",I,[(n(!0),r(B,null,E(_(h),t=>(n(),r("li",{key:t.level,class:b(["item",{current:t.level===_(i)}]),onClick:H=>g(t.level)},[s("div",$,[e[3]||(e[3]=s("div",{class:"label"}," \u96BE\u5EA6\uFF1A ",-1)),s("div",D,a(t.text),1)]),s("div",N,[e[4]||(e[4]=s("div",{class:"label"}," \u884C\u6570\uFF1A ",-1)),s("div",T,a(t.row),1)]),s("div",V,[e[5]||(e[5]=s("div",{class:"label"}," \u5217\u6570\uFF1A ",-1)),s("div",j,a(t.column),1)]),s("div",z,[e[6]||(e[6]=s("div",{class:"label"}," \u5143\u7D20\uFF1A ",-1)),s("div",K,a(t.totalOfItems)+"\uFF08\u79CD\uFF09 ",1)]),s("div",M,[e[7]||(e[7]=s("div",{class:"label"}," \u8FB9\u754C\uFF1A ",-1)),s("div",O,a(t.useBoundary?"\u6709":"\u65E0"),1)])],10,x))),128))])])])])]))}});const Q=y(P,[["__scopeId","data-v-a70d1a4a"]]);export{Q as default};
