import{S as a,P as r,W as d,T as c,a as p,M as w,b as m,A as u}from"./three.module-635cce14.js";const t=new a,e=new r(75,window.innerWidth/window.innerHeight,.1,1e3),o=new d({canvas:document.querySelector("#bg")});o.setPixelRatio(window.devicePixelRatio);o.setSize(window.innerWidth,window.innerHeight);e.position.setZ(0);e.position.setY(10);e.position.setX(0);e.rotation.set(-Math.PI/2,0,0);const f=new c,h=f.load("Images/neptun.jpg"),l=new p(1,100,100),g=new w({map:h}),n=new m(l,g),i=new u(16777215);n.position.set(0,0,0);n.rotation.set(1.7,0,0);t.add(n);t.add(i);i.position.set(0,0,0);document.addEventListener("dblclick",function(){e.position.y>=10?e.position.y=3:e.position.y<=10&&(e.position.y=10)});function s(){requestAnimationFrame(s),n.rotation.y+=.01,o.render(t,e)}s();