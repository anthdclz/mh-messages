(this["webpackJsonpmh-messages"]=this["webpackJsonpmh-messages"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"a":[{"sentAt":"2012-11-13T17:29:37.003Z","uuid":"435453","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio. Nullam vel feugiat lacus. Phasellus ut sodales.","senderUuid":"2"},{"sentAt":"2015-05-22T13:55:10.542Z","uuid":"4354353","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio. Nullam vel feugiat lacus. Phasellus ut sodales.","senderUuid":"2"},{"sentAt":"2012-11-20T01:31:33.751Z","uuid":"4354353","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio. Nullam vel feugiat lacus.","senderUuid":"1"},{"sentAt":"2016-02-17T10:13:03.115Z","uuid":"435453","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio. Nullam vel feugiat lacus. Phasellus ut sodales.","senderUuid":"2"},{"sentAt":"2015-05-22T13:55:10.542Z","uuid":"4354353","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio. Nullam vel feugiat lacus. Phasellus ut sodales.","senderUuid":"1"},{"sentAt":"2018-07-05T10:19:07.713Z","uuid":"4354353","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio. Nullam vel feugiat lacus.","senderUuid":"2"},{"sentAt":"2016-11-09T03:24:54.612Z","uuid":"4354353","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio.","senderUuid":"1"},{"sentAt":"2013-06-21T16:39:08.630Z","uuid":"43543353","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio. Nullam vel feugiat lacus.","senderUuid":"1"},{"sentAt":"2013-08-24T01:55:38.167Z","uuid":"43521314353","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio. Nullam vel feugiat lacus.","senderUuid":"1"},{"sentAt":"2012-11-05T11:37:00.472Z","uuid":"43532134353","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio.","senderUuid":"2"},{"sentAt":"2017-09-26T17:01:10.949Z","uuid":"43321315433","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio. Nullam vel feugiat lacus.","senderUuid":"2"},{"sentAt":"2012-12-02T13:55:30.626Z","uuid":"43543321353","content":"Fusce quis ante consequat, congue felis scelerisque, molestie odio.","senderUuid":"1"},{"sentAt":"2015-05-03T08:54:02.530Z","uuid":"43542233","content":"Fusce quis ante consequat, congue felis scelerisque.","senderUuid":"2"},{"sentAt":"2013-08-24T01:55:38.167Z","uuid":"43521314353","content":"Ante consequat, congue felis scelerisque.","senderUuid":"1"},{"sentAt":"2012-02-19T09:42:11.913Z","uuid":"435353","content":"Fusce quis ante consequat, congue felis scelerisque.","senderUuid":"2"},{"sentAt":"2018-07-06T20:31:01.649Z","uuid":"4354543353","content":"Fusce quis ante consequat, congue felis scelerisque.","senderUuid":"2"},{"sentAt":"2017-09-25T04:35:18.647Z","uuid":"4354353","content":"Ante consequat, congue felis scelerisque.","senderUuid":"1"},{"sentAt":"2012-12-17T15:08:37.988Z","uuid":"43545433353","content":"Consequat, congue felis scelerisque.","senderUuid":"1"},{"sentAt":"2016-02-03T05:20:52.506Z","uuid":"435454www35353","content":"Ante consequat, congue felis scelerisque.","senderUuid":"2"},{"sentAt":"2018-04-07T06:30:38.178Z","uuid":"43545435353","content":"Quis ante consequat, congue felis scelerisque.","senderUuid":"2"}]}')},,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),u=s.n(n),i=s(3),c=s.n(i),a=(s(15),s(9)),o=s(8),l=s(4),d=s(5),r=s(10),g=s(7),f=s(6),q=(s(16),s(0)),h=function(e){var t=e.content,s=e.senderUuid,n=e.sentAt,u=e.index,i=e.deleteMessage,c=new Date(n),a="".concat(function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"][e]}(c.getDay()),", ").concat(function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]}(c.getMonth())," ").concat(c.getDate(),", ").concat(c.getFullYear()," at ").concat(c.toString().substring(16));return Object(q.jsxs)("div",{className:"message",children:[Object(q.jsxs)("span",{className:"message-content",children:[s,": ",t,Object(q.jsx)("br",{})," ",Object(q.jsx)("div",{className:"message-details",children:a})]}),Object(q.jsx)("span",{className:"delete-button",onClick:function(){return i(u)},children:"Delete"})]})},m=(s(18),function(e){var t=e.displayText,s=e.handleClick;return Object(q.jsx)("span",{className:"chat-button",onClick:function(){return s()},children:t})}),j=(s(19),function(e){Object(r.a)(s,e);var t=Object(g.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).deleteMessage=function(t){var s=e.state.chatList;delete s[t],e.setState({chatList:s})},e.toggleSort=function(){var t=e.state,s=t.sortType,n=t.chatList.sort((function(e,t){var n=new Date(e.sentAt),u=new Date(t.sentAt);return"desc"===s?n.getTime()-u.getTime():u.getTime()-n.getTime()}));e.setState({chatList:n,isSorted:!0,sortType:"desc"===s?"asc":"desc"})},e.addNextPage=function(){var t=e.state,s=t.chatList,n=t.nextEntry;n<s.length&&e.setState({nextEntry:n+5})},e.state={chatList:[],isSorted:!1,sortType:"asc",nextEntry:5},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e,t=f.a,s=[],n=new Set,u=Object(o.a)(t);try{for(u.s();!(e=u.n()).done;){var i=e.value,c=JSON.stringify({uuid:i.uuid,content:i.content});n.has(c)||(n.add(c),s.push(i))}}catch(a){u.e(a)}finally{u.f()}this.setState({chatList:s})}},{key:"render",value:function(){var e=this,t=this.state,s=t.chatList,n=t.isSorted,u=t.sortType,i=t.nextEntry,c=n?"desc"===u?"Sorted by Newest First":"Sorted by Oldest First":"Sort";return Object(q.jsxs)("div",{id:"chat-page",children:[Object(q.jsx)("div",{children:Object(q.jsx)(m,{handleClick:this.toggleSort,displayText:c})}),s.slice(0,i).map((function(t,s){var n=Object.assign({},t);return Object(q.jsx)(h,Object(a.a)({index:s,deleteMessage:e.deleteMessage},n),s)})),i<s.length?Object(q.jsx)(m,{handleClick:this.addNextPage,displayText:"Next Page"}):null]})}}]),s}(u.a.Component)),b=(s(20),function(){return Object(q.jsx)("div",{className:"App",children:Object(q.jsx)(j,{})})}),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,n=t.getFID,u=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),u(e),i(e),c(e)}))};c.a.render(Object(q.jsx)(u.a.StrictMode,{children:Object(q.jsx)(b,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.d8e043b4.chunk.js.map