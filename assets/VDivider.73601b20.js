import{l as c,m as v,n as d,t as h,c as m,q as u,h as i}from"./index.b075d872.js";import{y as g,h as f}from"./VImg.d81e8b2b.js";const y=c()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v()},setup(e,a){let{attrs:t}=a;const{themeClasses:o}=d(e),{textColorClasses:l,textColorStyles:n}=g(h(e,"color")),s=m(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),r});return f(()=>u("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,l.value],style:[s.value,n.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{y as V};