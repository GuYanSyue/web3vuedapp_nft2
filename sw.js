if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>i(e,l),t={module:{uri:l},exports:o,require:a};s[l]=Promise.all(r.map((e=>t[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"02190b989286d28b28964fdef87e9091"},{url:"assets/_...all_.038b9a9c.js",revision:null},{url:"assets/_name_.099c6b0d.js",revision:null},{url:"assets/404.bdc16ff0.js",revision:null},{url:"assets/about.486e510f.js",revision:null},{url:"assets/app.6924dd41.js",revision:null},{url:"assets/home.24593f42.js",revision:null},{url:"assets/index.0bb00f73.css",revision:null},{url:"assets/README.ae3ec87c.js",revision:null},{url:"assets/virtual_pwa-register.a3ff9987.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"86a15a8d2c5bbfb5bfb48e74e4975318"},{url:"readme.html",revision:"0e59345ef955b3f1ed536278592a528a"},{url:"favicon.svg",revision:"50eaa5ff03f3d89bea3e4450aefa60af"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"6684232feb819cdd4076b5fce63cb190"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
