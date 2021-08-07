(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[932],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7211:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],s={id:"optimus-serve",title:"Starting Optimus Server"},u=void 0,p={unversionedId:"guides/optimus-serve",id:"guides/optimus-serve",isDocsHomePage:!1,title:"Starting Optimus Server",description:"Once the optimus binary is installed, it can be started in serve mode using",source:"@site/docs/guides/optimus-serve.md",sourceDirName:"guides",slug:"/guides/optimus-serve",permalink:"/optimus/guides/optimus-serve",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/guides/optimus-serve.md",version:"current",lastUpdatedBy:"Ravi Suhag",lastUpdatedAt:1628318051,formattedLastUpdatedAt:"8/7/2021",frontMatter:{id:"optimus-serve",title:"Starting Optimus Server"},sidebar:"docsSidebar",previous:{title:"Organising specifications",permalink:"/optimus/guides/organising-specifications"},next:{title:"Bigquery to bigquery transformation task",permalink:"/optimus/guides/task-bq2bq"}},l=[],c={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once the optimus binary is installed, it can be started in serve mode using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"optimus serve\n")),(0,o.kt)("p",null,"It needs few ",(0,o.kt)("a",{parentName:"p",href:"/optimus/getting-started/configuration"},"configurations")," as prerequisites, create a ",(0,o.kt)("inlineCode",{parentName:"p"},".optimus.yaml")," file with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nhost: localhost:9100\nserve:\n  port: 9100\n  host: localhost\n  ingress_host: optimus.example.io:80\n  app_key: 32charrandomhash32charrandomhash\n  db:\n    dsn: postgres://user:password@localhost:5432/optimus?sslmode=disable\n")),(0,o.kt)("p",null,"You will need to change ",(0,o.kt)("inlineCode",{parentName:"p"},"dsn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app_key")," according to your installation."),(0,o.kt)("p",null,"Once the server is up and running, before it is ready to deploy ",(0,o.kt)("inlineCode",{parentName:"p"},"jobs")," we need to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Register an optimus project"),(0,o.kt)("li",{parentName:"ul"},"Register a namespace under project"),(0,o.kt)("li",{parentName:"ul"},"Register required secrets under project")),(0,o.kt)("p",null,"This needs to be done in order using REST/GRPC endpoints provided by the server."))}d.isMDXComponent=!0}}]);