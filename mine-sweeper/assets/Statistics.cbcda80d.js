import{M as E}from"./index.29880da6.js";import{d as S,r as f,a1 as g,b as u,a2 as _,l as m,m as I,q as A,_ as e,v as F,x as C,z as n,F as x,a0 as R}from"./index.f9ae8d7a.js";const k={class:"statistics"},w={class:"records"},D={class:"title"},y={class:"row"},M={class:"value"},T={class:"row"},N={class:"value"},$={class:"row"},q={class:"value"},z=S({__name:"Statistics",emits:["close"],setup(J){var p;const h=f(!0),o=f(JSON.parse((p=localStorage.getItem(g))!=null?p:"null")),c=u(()=>{var t;return((t=o.value)==null?void 0:t[1])||[]}),i=u(()=>{var t;return((t=o.value)==null?void 0:t[2])||[]}),r=u(()=>{var t;return((t=o.value)==null?void 0:t[3])||[]}),v=t=>t.length===0?"0.00%":(100*t.filter(l=>l[0]==="complete").length/t.length).toFixed(2)+"%",d=t=>{const s=t.filter(l=>l[0]==="complete");return s.length===0?0:Math.min(...s.map(l=>l[1]))},b=u(()=>[{title:"\u7B80\u5355",successRate:v(c.value),total:c.value.length,best:_(d(c.value))},{title:"\u4E2D\u7B49",successRate:v(i.value),total:i.value.length,best:_(d(i.value))},{title:"\u56F0\u96BE",successRate:v(r.value),total:r.value.length,best:_(d(r.value))}]),B=()=>{localStorage.removeItem(g),o.value=null};return(t,s)=>{const l=E;return m(),I(l,{visible:h.value,title:"\u6218\u7EE9\u7EDF\u8BA1",width:"800px",centered:"",footer:null,onCancel:s[0]||(s[0]=a=>t.$emit("close"))},{default:A(()=>[e("div",k,[e("div",w,[(m(!0),F(x,null,C(b.value,a=>(m(),F("div",{key:a.title,class:"item"},[e("h2",D,n(a.title),1),e("div",y,[s[1]||(s[1]=e("div",{class:"label"}," \u80DC\u2003\u2003\u7387\uFF1A ",-1)),e("div",M,n(a.successRate),1)]),e("div",T,[s[2]||(s[2]=e("div",{class:"label"}," \u5DF2\u73A9\u5C40\u6570\uFF1A ",-1)),e("div",N,n(a.total),1)]),e("div",$,[s[3]||(s[3]=e("div",{class:"label"}," \u6700\u4F73\u8BB0\u5F55\uFF1A ",-1)),e("div",q,n(a.best),1)])]))),128))]),e("div",{class:"operations"},[e("div",{class:"btn btn-clear",onClick:B}," \u6E05\u7A7A\u8BB0\u5F55 ")])])]),_:1},8,["visible"])}}});const P=R(z,[["__scopeId","data-v-647e72f0"]]);export{P as default};
