import{S as a,P as r,W as d,T as c,a as w,M as m,b as p,A as h}from"./three.module-635cce14.js";const n=new a,e=new r(75,window.innerWidth/window.innerHeight,.1,1e3),o=new d({canvas:document.querySelector("#bg")});o.setPixelRatio(window.devicePixelRatio);o.setSize(window.innerWidth,window.innerHeight);e.position.setZ(0);e.position.setY(50);e.position.setX(0);e.rotation.set(-Math.PI/2,0,0);const u=new c,l=u.load("Images/erde.jpg"),f=new w(10,100,100),g=new m({map:l}),t=new p(f,g),i=new h(16764074);t.position.set(0,0,0);t.rotation.set(4.712,0,0);n.add(t);n.add(i);i.position.set(0,0,0);document.addEventListener("dblclick",function(){e.position.y>=50?e.position.y=25:e.position.y<=50&&(e.position.y=50)});function s(){requestAnimationFrame(s),t.rotation.y+=.01,o.render(n,e)}s();