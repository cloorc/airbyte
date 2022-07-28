"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(a),u=n,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return a?r.createElement(k,l(l({ref:t},m),{},{components:a})):r.createElement(k,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={},l="Iterable",p={unversionedId:"integrations/sources/iterable",id:"integrations/sources/iterable",title:"Iterable",description:"Overview",source:"@site/../docs/integrations/sources/iterable.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/iterable",permalink:"/integrations/sources/iterable",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/iterable.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Intercom",permalink:"/integrations/sources/intercom"},next:{title:"Jenkins",permalink:"/integrations/sources/jenkins"}},s={},o=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iterable"},"Iterable"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Iterable supports full refresh and incremental sync."),(0,n.kt)("p",null,"This source can sync data for the ",(0,n.kt)("a",{parentName:"p",href:"https://api.iterable.com/api/docs"},"Iterable API"),"."),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"Several output streams are available from this source:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#campaigns_campaigns"},"Campaigns")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#campaigns_metrics"},"Campaign Metrics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#channels_channels"},"Channels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Bounce")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Click")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Complaint")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Open")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Send")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Send Skip")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Subscribe")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Email Unsubscribe")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#events_User_events"},"Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#lists_getLists"},"Lists")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#lists_getLists_0"},"List Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#messageTypes_messageTypes"},"Message Types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#metadata_list_tables"},"Metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#templates_getTemplates"},"Templates")," ","(","Incremental sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.iterable.com/api/docs#export_exportDataJson"},"Users")," ","(","Incremental sync",")")),(0,n.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Iterable connector should not run into Iterable API limitations under normal usage. Please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Iterable Account"),(0,n.kt)("li",{parentName:"ul"},"Iterable API Key with ",(0,n.kt)("inlineCode",{parentName:"li"},"standard")," permissions. See ",(0,n.kt)("a",{parentName:"li",href:"https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-"},"API Keys docs")," for more details.")),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,"Please read ",(0,n.kt)("a",{parentName:"p",href:"https://support.iterable.com/hc/en-us/articles/360043464871-API-Keys-#creating-api-keys"},"How to find your API key"),"."),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.15")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8524"},"8524")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.14")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8380"},"8380")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update ",(0,n.kt)("inlineCode",{parentName:"td"},"Events")," stream to use ",(0,n.kt)("inlineCode",{parentName:"td"},"export/userEvents")," endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.13")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8091"},"8091")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adjust slice ranges for email streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.12")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7780"},"7780")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Split EmailSend stream into slices to fix premature connection close error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.11")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7619"},"7619")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix type error while incrementally loading the ",(0,n.kt)("inlineCode",{parentName:"td"},"Templates")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.10")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7591"},"7591")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optimize export streams memory consumption for large requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5915"},"5915")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable campaign_metrics stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.8")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5915"},"5915")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add new streams: campaign_metrics, events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.7")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6242"},"6242")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated schema for: campaigns, lists, templates, metadata")))))}c.isMDXComponent=!0}}]);