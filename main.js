(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var a;e.g.importScripts&&(a=e.g.location+"");var t=e.g.document;if(!a&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(a=t.currentScript.src),!a)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!a||!/^http(s?):/.test(a));)a=n[r--].src}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})();const a=e.p+"images/9dea5984e24f399826b2.png",t=e.p+"images/b5899c0e4f04e780d3e0.svg",n=document.getElementById("links"),r=document.querySelector("h1"),s={name:"Raúl Sánchez Salgado",nickname:"raulsansal",description:"Trabajo con personas y organizaciones que quieren aplicar la estrategia en sus proyectos políticos y ampliar sus posibilidades de éxito.",avatar:a,social:[{name:"twitter",url:"https://x.com/Raulsansal",username:"raulsansal"},{name:"instagram",url:"https://www.instagram.com/raul.sanchez.sal/",username:"raulsansal"},{name:"github",url:"https://github.com/Raulss74",username:"raulsansal"},{name:"linkedin",url:"https://www.linkedin.com/in/raulsansal",username:"raulsansal"}],links:[{name:"analisis",url:"https://www.notion.so/raulsansal/351df79caa8f480fa325f2dd3ebbd4f8?v=92ae2e31ccac48e0923feb06620b7fb3&pvs=4",color:"yellow",emoji:"🆎"},{name:"Design System",url:"https://www.notion.so/raulsansal/Fundations-e31bfae79fef4f50b13556896d562b96?pvs=4",color:"blue",emoji:"🔷"}],footer:"Made with love on México"};(()=>{let e=document.createTextNode(s?.name),a=s?.links?.map((e=>`<div class="bg-${e.color}-200 px-4 py-5 w-full flex justify-between">\n            <a\n              class="text-sm font-bold text-${e.color} text-center hover:text-${e.color}-800 cursor-pointer"\n              href="${e.url}"\n              target="_blank"\n            >\n              ${e.name}\n            </a>\n            <span>${e.emoji}</span>\n          </div>`)).join(""),o=document.createElement("section");o.innerHTML=a,n.appendChild(o),r.appendChild(e),document.querySelector('img[alt="Raúl Sánchez Salgado"]').src=s.avatar,document.querySelector('img[alt="logotipo Eskemma"]').src=t})()})();