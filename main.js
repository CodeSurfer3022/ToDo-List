!function(o){var e={};function t(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return o[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=o,t.c=e,t.d=function(o,e,n){t.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:n})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var r in o)t.d(n,r,function(e){return o[e]}.bind(null,r));return n},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},t.p="",t(t.s=0)}([function(o,e,t){"use strict";t.r(e);const n=function(){const o=[];return{add:function(e){o.push(e)},remove:function(e){let t=o.findIndex(o=>o.getName()===e);o[t].getTodos().forEach(o=>r.remove(o.getTitle())),o.splice(t,1)},getProject:function(e){return o.find(o=>o.getName()===e)},getList:function(){return o}}}(),r=function(){const o=[];return{add:function(e){o.push(e)},remove:function(e){let t=o.findIndex(o=>o.getTitle()===e);o.splice(t,1)},getTodo:function(e){return o.find(o=>o.getTitle()===e)},getList:function(){return o}}}();function i(o,e,t,r="Home"){let i,c=o,l=e,u=t,s=r,d=[],g=!1;function f(o){if(s===o)return;console.log(s);let e=n.getProject(s);console.log(e.getTodos());let t=e.getTodos().findIndex(o=>o.getTitle()===c);console.log(t),e.getTodos().splice(t,1),s=o;let r=n.getProject(s);r.getTodos().push(this),console.log(r.getTodos())}return{edit:function(o,e,t,n){c=o,l=e,u=t,f(n)},moveToProject:f,addNotes:function(o){i=o},reschedule:function(o){l=o},setPriority:function(o){u=o},addToChecklist:function(o){d.push(o)},markAsCompleted:function(){console.log(d),d.every(o=>o.isCompleted())?(g=!0,console.log(`marked ${this} as completed`)):console.log("please complete all todos in checklist before marking the todo as complete")},getTitle:function(){return c},getNotes:function(){return i},getDueDate:function(){return l},getPriority:function(){return u},getProjectName:function(){return s},getCheckList:function(){return d},isCompleted:function(){return g},getTodo:function(){return{title:c,notes:i,dueDate:l,priority:u,projectName:s,checkList:d,completed:g}}}}let c=function(o){let e,t=o;const n=[];return{edit:function(o){t=o},addNotes:function(o){e=o},addTodo:function(o){n.push(o)},getName:function(){return t},getNotes:function(){return e},getTodos:function(){return n},getProject:function(){return{name:t,todos:n}}}}("Home");c.addNotes("this is a default project"),console.log(c.getNotes()),n.add(c);let l=i("todo1","today","high","Home");l.addNotes("this is notes"),l.setPriority("low"),r.add(l),console.log(l.getPriority()),console.log(r.getList()),console.log(r.getTodo("todo1")),c.addTodo(l),l.edit("todo2","tomorrow","high","Home"),console.log(r.getTodo("todo2")),console.log(c.getTodos()),l.moveToProject("Home"),console.log(c.getTodos()),l.reschedule("today");let u=i("todo2","do todo","today","misc");l.addToChecklist(u),console.log(r.getTodo("todo2")),console.log("output for mark"),l.markAsCompleted(),u.markAsCompleted(),l.markAsCompleted(),console.log(l.getTodo());let s=l.getTodo().checkList;console.log(s[0].getTodo()),console.log("trying to remove project from projectList"),console.log(n.getList()),console.log(r.getList()),n.remove("Home"),console.log(r.getList()),console.log(n.getList()),c.edit("Bome")}]);