if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const o=e=>i(e,l),t={module:{uri:l},exports:a,require:o};s[l]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"99c06670d1c06ed04237a4dcc7d4ca5c"},{url:"assets/_...all_.8499b9aa.js",revision:null},{url:"assets/_name_.3e184ebc.js",revision:null},{url:"assets/404.1cfa5d21.js",revision:null},{url:"assets/about.826f7e34.js",revision:null},{url:"assets/app.fecf1dff.js",revision:null},{url:"assets/home.02c6353d.js",revision:null},{url:"assets/index.abad335d.css",revision:null},{url:"assets/README.676afb23.js",revision:null},{url:"assets/virtual_pwa-register.cc76d905.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"e218a980281a46dff52bf5e42f8cb448"},{url:"readme.html",revision:"f3e9840e2591e1cd5a40f98a97fccc38"},{url:"favicon.svg",revision:"50eaa5ff03f3d89bea3e4450aefa60af"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"6684232feb819cdd4076b5fce63cb190"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
