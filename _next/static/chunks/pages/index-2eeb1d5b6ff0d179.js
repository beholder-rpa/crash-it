(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(738)}])},5899:function(e,t,n){"use strict";var r=n(7294),i="undefined"!==typeof window.navigator;t.Z=function(){return(0,r.useMemo)((function(){if(i)return n(2260)}),[])}},738:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ue}});var r=n(5893),i=n(9323),a=n(7294),s=n(9008),l={name:"Crash I.T.",logo:{src:"/crash-it//_next/static/media/beholder.09f0613d.svg",height:300,width:300},copyright:"\xa9 2022 Crash I.T."},o=n(1228),c=n(6486),d=n(1436),u=n(2814),h=[{title:"Dashboard",icon:(0,r.jsx)(u.G,{icon:d.HLz}),current:!0,url:"/"},{title:"Flow Designer",icon:(0,r.jsx)(u.G,{icon:d.o4t}),current:!0,url:"/flow_designer"},{title:"Node Editor",icon:(0,r.jsx)(u.G,{icon:d.w49}),current:!0,url:"/node_editor"}];function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}var x=n(1664),m=n(1163),p=function(e){var t=e.title,n=void 0===t?"Title":t,i=e.icon,a=e.url,s=e.className,l=e.target,o="";return(0,m.useRouter)().asPath===a&&(o="border-accent bg-base-300"),(0,r.jsx)(x.default,{href:a,passHref:!0,children:(0,r.jsxs)("a",{target:"string"===typeof l?l:"_self",className:f("relative flex flex-row items-center h-11 hover:bg-base-300 text-base-content hover:text-base-content border-l-4 border-transparent hover:border-accent-focus pr-6",s||"",o),children:[(0,r.jsx)("span",{className:"inline-flex justify-center items-center ml-3",children:i}),(0,r.jsx)("span",{className:"ml-2 text-sm tracking-wide truncate",children:n})]})})};function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(o){l=!0,i=o}finally{try{s||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=(0,i.Pi)((function(){c.templateSettings.interpolate=/{{([\s\S]+?)}}/g;var e=b(a.useState({host:""}),2),t=e[0],n=e[1];return(0,a.useEffect)((function(){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},t,{host:window.location.host}))}),[]),(0,r.jsx)("nav",{className:"fixed flex flex-col top-14 left-0 w-14 md:w-64 h-full text-white transition-all duration-300 border-none z-10 sidebar bg-base-200",children:(0,r.jsxs)("div",{className:"overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow",children:[(0,r.jsx)("ul",{className:"flex flex-col py-4 space-y-1",children:h.map((function(e){return e.children?(0,r.jsx)(o.p,{as:"div",className:"space-y-1",defaultOpen:e.defaultOpen,children:function(n){var i=n.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p.Button,{className:"relative flex flex-row w-full",children:(0,r.jsxs)("span",{className:"w-full flex flex-row items-center h-11 hover:bg-base-300 text-base-content hover:text-base-content border-l-4 border-transparent hover:border-accent-focus pr-6",children:[(0,r.jsx)("span",{className:"flex-none justify-center items-center ml-3",children:e.icon}),(0,r.jsx)("span",{className:"ml-2 text-sm flex-grow text-left tracking-wide truncate",children:e.title}),(0,r.jsx)("span",{className:"flex-none",children:(0,r.jsx)("svg",{className:f(i?"text-gray-400 rotate-90":"text-gray-300","ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"),viewBox:"0 0 20 20","aria-hidden":"true",children:(0,r.jsx)("path",{d:"M6 6L14 10L6 14V6Z",fill:"currentColor"})})})]})}),(0,r.jsx)(o.p.Panel,{className:"space-y-1",children:e.children&&e.children.map((function(e){return(0,r.jsx)(p,{className:"md:ml-11",title:e.title,url:(0,c.template)(e.url)(t),icon:e.icon,target:e.target},e.title)}))})]})}},e.title):(0,r.jsx)("li",{children:(0,r.jsx)(p,{title:e.title,url:(0,c.template)(e.url)(t),icon:e.icon,target:e.target})},e.title)}))}),(0,r.jsx)("p",{className:"mb-14 px-5 py-3 hidden md:block text-center text-xs",children:l.copyright})]})})})),A=n(5675),w=n(6835),y=n(9196),N=[{headline:"System Maintenance",body:"scheduled starting at 9:00PM EST on 6/12/2021",critical:!0},{headline:"Help Desk Closed",body:"on July 4th.",critical:!1},{headline:"New Feature",body:"Checkout this cool new alert feature.",critical:!1}],C=function(e){var t=e.count,n=void 0===t?0:t,i=e.icon;return(0,r.jsxs)("div",{className:"relative p-3",children:[(0,r.jsx)("div",{className:"text-secondary hover:text-secondary-focus",children:i}),n>0&&(0,r.jsx)("div",{className:"flex justify-center items-center h-5 w-5 text-xs font-semibold font-mono rounded-full absolute top-0 right-0 bg-accent text-neutral",children:n})]})};function k(){return(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsx)("div",{className:"relative z-10 flex-shrink-0 flex h-14 bg-base-200",children:(0,r.jsx)(w.J,{className:"relative py-2",children:function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.J.Button,{children:(0,r.jsx)(C,{count:3,icon:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,r.jsx)("title",{children:"Notifications"}),(0,r.jsx)("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})]})})}),(0,r.jsx)(y.u,{as:a.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:(0,r.jsx)(w.J.Panel,{className:"absolute z-10 w-72 px-4 mt-1 right-0 sm:px-0 ",children:(0,r.jsxs)("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:[(0,r.jsxs)("div",{className:"bg-white text-gray-900 py-2 px-4",children:[(0,r.jsx)("h1",{children:"Notifications"}),(0,r.jsx)("ul",{children:N.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"py-2 border-t-2",children:[(0,r.jsx)("p",{className:"text-sm font-medium text-gray-900",children:e.headline}),(0,r.jsx)("p",{className:"text-sm text-gray-500",children:e.body})]})},e.headline)}))})]}),(0,r.jsx)("div",{className:"bg-gray-50 text-center",children:(0,r.jsx)(x.default,{href:"/notifications",passHref:!0,children:(0,r.jsx)("a",{className:"flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",children:(0,r.jsx)("span",{className:"block text-sm text-blue-500",children:"View All"})})})})]})})})]})}})})})}var z=[{description:"Ask Mary about repo letter for this account",url:"/accounts/1234",complete:!1,due:"6/7/2021"},{description:"Call Sarah at Durham Chevrolet about this titleCall Sarah at Durham Chevrolet about this titleCall Sarah at Durham Chevrolet about this title",url:"/accounts/1234",complete:!1,due:"7/4/2021"},{description:"Revisit work item 1234",url:"/work-items/1234",complete:!1,due:"7/5/2021"}];function S(){return(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsx)("div",{className:"relative z-10 flex-shrink-0 flex h-14 py-2 bg-base-200",children:(0,r.jsx)(w.J,{children:function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.J.Button,{children:(0,r.jsx)(C,{count:3,icon:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,r.jsx)("title",{children:"Reminders"}),(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})]})})}),(0,r.jsx)(y.u,{as:a.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:(0,r.jsx)(w.J.Panel,{className:"absolute z-40 w-max px-4 mt-1 right-0 sm:px-0 ",children:(0,r.jsx)("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:(0,r.jsxs)("div",{className:"bg-white text-gray-900 p-4",children:["Reminders",(0,r.jsx)("table",{children:(0,r.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 align-top",children:z.map((function(e){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"p-4",children:(0,r.jsx)("input",{type:"checkbox"})}),(0,r.jsx)("td",{className:"p-4 w-20 sm:w-40 lg:w-96",children:e.description}),(0,r.jsx)("td",{className:"p-4",children:(0,r.jsx)(x.default,{href:e.url,passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})})})}),(0,r.jsx)("td",{className:"p-4",children:e.due})]},e.description)}))})})]})})})})]})}})})})}var O,E,P,D,B=n(3746),T={src:"/crash-it//_next/static/media/dummy-avatar.1af885b7.jpeg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAogT/xAAcEAABAwUAAAAAAAAAAAAAAAARABITFCIkMkH/2gAIAQEAAT8AqcwS2atHV//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"},F=[{name:"Profile",href:"#"},{name:"Settings",href:"#"}],I=(0,i.Pi)((function(){return(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsx)("div",{className:"relative z-10 flex-shrink-0 flex h-14 py-2 bg-base-200",children:(0,r.jsx)(B.v,{as:"div",className:"px-3 py-1 relative",children:function(e){var t=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsxs)(B.v.Button,{className:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",children:[(0,r.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,r.jsx)("div",{className:"h-8 w-8",children:(0,r.jsx)(A.default,{unoptimized:!0,className:"rounded-full",placeholder:"blur",src:T,alt:"avatar",width:256,height:256})})]})}),(0,r.jsx)(y.u,{show:t,as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,r.jsxs)(B.v.Items,{static:!0,className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,r.jsx)("div",{className:"py-1 border-b-2",children:(0,r.jsx)("h1",{className:"px-2 text-gray-800 font-bold",children:"Beholder"})}),F.map((function(e,t){return(0,r.jsx)(B.v.Item,{children:function(t){var n=t.active;return(0,r.jsx)("div",{className:f(n?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:(0,r.jsx)(x.default,{href:e.href,children:e.name})})}},t)}))]})})]})}})})})})),M=n(3153),Q=function(){return(0,r.jsx)("div",{className:"flex flex-col w-0 flex-1 overflow-hidden",children:(0,r.jsx)("div",{className:"relative z-10 flex-shrink-0 flex h-14 shadow bg-base-200",children:(0,r.jsx)("div",{className:"flex-1 px-4 flex justify-between",children:(0,r.jsxs)("form",{className:"w-full flex md:ml-0",action:"#",method:"GET",children:[(0,r.jsx)("label",{htmlFor:"search-field",className:"sr-only",children:"Search"}),(0,r.jsxs)("div",{className:"relative w-full",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pointer-events-none",children:(0,r.jsx)(M.W1M,{className:"h-5 w-5","aria-hidden":"true"})}),(0,r.jsx)("input",{id:"search-field",className:"block w-full h-full pl-8 pr-3 py-2 border-transparent focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm input bg-base-200 input",placeholder:"Search",type:"search",name:"search"})]})]})})})})},_=n(8949),L=n(1217);function R(e,t,n,r,i){var a={};Object.keys(r).forEach((function(e){a[e]=r[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,r){return r&&r(e,t,n)||n}),a),i&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(i):void 0,a.initializer=void 0);var s=Object.getOwnPropertyDescriptor(e,t);return s&&(s.get||s.set)&&(delete a.writable,delete a.initializer),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}var V,J,H,Z,K=(E=R((O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),G(this,"appSettingsOpen",E,this),G(this,"navCollapsed",P,this),G(this,"locale",D,this),this.appStore=t,(0,_.rC)(this)}var t,n,r;return t=e,(n=[{key:"toggleAppSettings",value:function(){this.appSettingsOpen=!this.appSettingsOpen}},{key:"toggleNavCollapsed",value:function(){this.navCollapsed=!this.navCollapsed}}])&&U(t.prototype,n),r&&U(t,r),e}()).prototype,"appSettingsOpen",[_.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P=R(O.prototype,"navCollapsed",[_.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),D=R(O.prototype,"locale",[_.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{languageId:"english",locale:"en",name:"English",icon:"us"}}}),R(O.prototype,"toggleAppSettings",[_.aD],Object.getOwnPropertyDescriptor(O.prototype,"toggleAppSettings"),O.prototype),R(O.prototype,"toggleNavCollapsed",[_.aD],Object.getOwnPropertyDescriptor(O.prototype,"toggleNavCollapsed"),O.prototype),O);function W(e,t,n,r,i){var a={};Object.keys(r).forEach((function(e){a[e]=r[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce((function(n,r){return r&&r(e,t,n)||n}),a),i&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(i):void 0,a.initializer=void 0);var s=Object.getOwnPropertyDescriptor(e,t);return s&&(s.get||s.set)&&(delete a.writable,delete a.initializer),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}function X(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}(0,L.DT)(!1);var Y=(J=W((V=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),X(this,"lastUpdate",J,this),X(this,"uiStore",H,this),X(this,"hydrate",Z,this),this.uiStore=new K(this),(0,_.ky)(this)}).prototype,"lastUpdate",[_.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:void 0}),H=W(V.prototype,"uiStore",[_.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:void 0}),Z=W(V.prototype,"hydrate",[_.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){t&&(e.lastUpdate=null!==t.lastUpdate?t.lastUpdate:Date.now())}}}),V);var q=new Y,$=a.createContext(q);function ee(){var e=(0,a.useContext)($).uiStore;return(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsx)("div",{className:"relative z-10 flex-shrink-0 flex bg-base-200",children:(0,r.jsx)("button",{onClick:function(){return e.toggleAppSettings()},children:(0,r.jsx)(C,{count:0,icon:(0,r.jsx)(u.G,{icon:d.b7W,size:"2x"})})})})})}var te=(0,i.Pi)((function(){return(0,r.jsxs)("div",{className:"fixed w-full flex items-center justify-between h-14 z-10 bg-base-300",children:[(0,r.jsxs)("div",{className:"flex items-center justify-start pl-3 w-14 md:w-64 h-14 border-none",children:[(0,r.jsx)(A.default,{unoptimized:!0,width:"40",height:"40",className:"w-7 h-7 md:w-10 md:h-10 Ks rounded-md",placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((t=40,n=40,e='\n<svg width="'.concat(t,'" height="').concat(n,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(t,'" height="').concat(n,'" fill="#333" />\n  <rect id="r" width="').concat(t,'" height="').concat(n,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(t,'" to="').concat(t,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(e))),src:l.logo,alt:"".concat(l.name," Logo")}),(0,r.jsx)("span",{className:"hidden md:block text-white ml-2",children:l.name})]}),(0,r.jsx)(Q,{}),(0,r.jsx)(k,{}),(0,r.jsx)(S,{}),(0,r.jsx)(ee,{}),(0,r.jsx)(I,{})]});var e,t,n})),ne=n(8346),re=n(3801),ie=(0,i.Pi)((function(){return(0,r.jsx)("div",{className:"absolute inset-0 px-4 sm:px-6",children:(0,r.jsx)("a",{target:"_blank",href:"/api/getServerCertificate",children:(0,r.jsx)("button",{className:"btn btn-primary",children:"Download Device Certificate"})})})})),ae=(0,i.Pi)((function(){var e=(0,a.useContext)($).uiStore;return(0,r.jsx)(y.u.Root,{show:e.appSettingsOpen,as:a.Fragment,children:(0,r.jsx)(ne.V,{as:"div",className:"fixed inset-0 overflow-hidden",onClose:function(){},children:(0,r.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,r.jsx)(ne.V.Overlay,{className:"absolute inset-0"}),(0,r.jsx)("div",{className:"fixed inset-y-0 right-0 pl-10 max-w-full flex",children:(0,r.jsx)(y.u.Child,{as:a.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,r.jsx)("div",{className:"w-screen max-w-md",children:(0,r.jsxs)("div",{className:"h-full flex flex-col py-6 bg-secondary shadow-xl overflow-y-scroll",children:[(0,r.jsx)("div",{className:"px-4 sm:px-6 pt-12",children:(0,r.jsxs)("div",{className:"flex items-start justify-between",children:[(0,r.jsxs)(ne.V.Title,{className:"text-lg font-medium text-secondary-content",children:[l.name," Settings"]}),(0,r.jsx)("div",{className:"ml-3 h-7 flex items-center",children:(0,r.jsxs)("button",{type:"button",className:"bg-accent rounded-md text-accent-content hover:text-accent-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-focus",onClick:function(){return e.toggleAppSettings()},children:[(0,r.jsx)("span",{className:"sr-only",children:"Close panel"}),(0,r.jsx)(re.b0D,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),(0,r.jsx)("div",{className:"mt-6 relative flex-1 px-4 sm:px-6",children:(0,r.jsx)(ie,{})})]})})})})]})})})})),se=(0,i.Pi)((function(e){var t=e.children,n=e.title,i=void 0===n?"Home":n;return(0,r.jsxs)("main",{className:"min-h-screen h-screen flex flex-col flex-auto flex-shrink-0 antialiased",children:[(0,r.jsxs)(s.default,{children:[(0,r.jsxs)("title",{children:[l.name," - ",i]}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)(te,{}),(0,r.jsx)(j,{}),(0,r.jsx)(ae,{}),(0,r.jsx)("div",{className:"ml-14 mt-14 md:ml-64 content h-screen",children:t})]})})),le=n(5152),oe=n(5899),ce=(0,le.default)((function(){return n.e(206).then(n.bind(n,4206))}),{loadableGenerated:{webpack:function(){return[4206]}},ssr:!1}),de=(0,i.Pi)((function(){var e=(0,oe.Z)();if(!e)return null;var t={type:e.AUTO,backgroundColor:"#20134e",scale:{mode:e.Scale.RESIZE},physics:{default:"arcade",arcade:{gravity:{y:200}}},scene:{preload:function(){console.log("preload ->  preloading assets...",this),this.load.setBaseURL("."),this.load.image("rain","assets/images/thalion-rain.png"),this.load.image("logo","assets/sprites/phaser3-logo.png"),this.load.image("red","assets/particles/red.png"),this.load.audio("theme",["assets/music/AlexBeroza_-_Drive.mp3"])},create:function(){var e=this;console.log("create -> creating elements...",this);var t=this.add.tileSprite(0,0,this.scale.width,this.scale.height,"rain").setOrigin(0),n=this.physics.add.image(400,100,"logo");this.scale.on("resize",(function(r){var i=r.width,a=r.height;e.cameras.resize(i,a),t.setSize(i,a),n.setPosition(i/2,a/2)}),this);var r=this.add.particles("red").createEmitter({speed:100,scale:{start:1,end:0},blendMode:"ADD"});n.setVelocity(100,200),n.setBounce(1,1),n.setCollideWorldBounds(!0),r.startFollow(n);var i=this.sound.add("theme");i.loop=!0,i.play()}},callbacks:{preBoot:function(e){return console.log("preBoot -> ",e)},postBoot:function(e){return console.log("postBoot -> ",e)}}};return(0,r.jsx)(ce,{config:t})})),ue=(0,i.Pi)((function(){return(0,r.jsx)(se,{children:(0,r.jsx)(de,{})})}))}},function(e){e.O(0,[774,989,461,662,523,122,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);