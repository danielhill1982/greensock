import{g as s}from"./index.35H_NU9g.js";import{f as a,c as r,o as i,a as t}from"./entry.T1zo_6Vq.js";const c={class:"header-banner mt-20"},d=t("h1",null,"Hello World !",-1),l=t("div",null,[t("p",null,"Here's a description")],-1),_=[d,l],p={__name:"mousemove",setup(m){return a(()=>{let e,o;document.addEventListener("mousemove",n=>{e=n.clientX,o=n.clientY,s.to(".header-banner",{x:(e/window.innerWidth-.5)*90,y:(o/window.innerHeight-.5)*90,delay:.1,ease:"power2.out",overwrite:"auto"})})}),(e,o)=>(i(),r("section",c,_))}};export{p as default};
